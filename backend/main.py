from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="TestGen AI Backend")

# -----------------------------------
# CORS
# -----------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------
# REQUEST MODEL
# -----------------------------------

class TestRequest(BaseModel):
    code: str

# -----------------------------------
# HOME
# -----------------------------------

@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }

# -----------------------------------
# HEALTH
# -----------------------------------

@app.get("/health")
def health():
    return {
        "status": "ok"
    }

# -----------------------------------
# GENERATE TESTS
# -----------------------------------

@app.post("/generate-tests")
def generate_tests(request: TestRequest):

    print("Received Request:")
    print(request.code)

    mock_tests = [
        {
            "title": "Verify Login with Valid Credentials",
            "category": "Functional Test",
            "priority": "High",
            "steps": [
                "Open login page",
                "Enter valid username",
                "Enter valid password",
                "Click login button"
            ],
            "expected": "User should login successfully"
        },
        {
            "title": "Verify Login with Invalid Password",
            "category": "Negative Test",
            "priority": "Medium",
            "steps": [
                "Open login page",
                "Enter valid username",
                "Enter invalid password",
                "Click login button"
            ],
            "expected": "Error message should appear"
        },
        {
            "title": "Validate Empty Input Fields",
            "category": "Validation Test",
            "priority": "High",
            "steps": [
                "Open login page",
                "Leave all fields empty",
                "Click login button"
            ],
            "expected": "Validation warnings should display"
        },
        {
            "title": "Check SQL Injection Prevention",
            "category": "Security Test",
            "priority": "Critical",
            "steps": [
                "Enter SQL payload in username field",
                "Submit login form"
            ],
            "expected": "Application should block SQL injection"
        },
        {
            "title": "Verify API Timeout Handling",
            "category": "API Test",
            "priority": "Medium",
            "steps": [
                "Simulate delayed API response",
                "Trigger frontend request"
            ],
            "expected": "System should handle timeout gracefully"
        }
    ]

    return {
        "status": "success",
        "tests": mock_tests,
        "coverage": 92,
        "bugsFound": 5,
        "edgeCases": 14
    }