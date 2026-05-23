from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

app = FastAPI(title="TestGen AI Backend")

# -----------------------
# Request Schema
# -----------------------
class TestRequest(BaseModel):
    code: str


# -----------------------
# Health Check
# -----------------------
@app.get("/")
def home():
    return {"message": "TestGen AI running"}


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "TestGen AI Backend"
    }


# -----------------------
# AI Test Generator
# -----------------------
@app.post("/generate-tests")
def generate_tests(request: TestRequest):

    try:
        # Better prompt (hackathon quality output)
        prompt = f"""
You are a senior QA engineer.

Generate ONLY Python unit tests using unittest framework.

Rules:
- No explanation
- No markdown
- Only runnable Python code
- Cover edge cases

Code:
{request.code}
"""

        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "llama3.2",
                "prompt": prompt,
                "stream": False
            },
            timeout=60
        )

        # Safety check (VERY IMPORTANT)
        if response.status_code != 200:
            raise HTTPException(
                status_code=500,
                detail="Ollama API failed"
            )

        data = response.json()

        return {
            "tests": data.get("response", ""),
            "status": "success"
        }

    except requests.exceptions.ConnectionError:
        raise HTTPException(
            status_code=500,
            detail="Cannot connect to Ollama. Is it running?"
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )