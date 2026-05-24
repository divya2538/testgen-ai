from pydantic import BaseModel
from typing import List

class TestRequest(BaseModel):
    code: str


class TestCase(BaseModel):
    title: str
    category: str
    priority: str
    steps: List[str]
    expected: str