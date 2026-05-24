TestGen AI

AI-powered QA test generation platform built for hackathons and rapid testing workflows.

Overview

TestGen AI helps QA teams and developers generate:

Functional test cases

API test scenarios

Validation tests

Security test cases

Edge-case coverage

Boundary testing scenarios


The platform accepts Jira-style requirements and OpenAPI specifications, then generates structured test cases automatically through an interactive dashboard.


---

Features

AI-style automated test generation

Functional + API + security test coverage

Interactive dashboard UI

Pytest export support

Playwright export support

FastAPI backend

React + Vite frontend

Modern glassmorphism UI

Real-time QA metrics dashboard



---

Tech Stack

Frontend

React

Vite

Tailwind CSS

React Router


Backend

FastAPI

Python

Uvicorn



---

Project Structure

testgen-ai/
│
├── backend/
│   ├── main.py
│   ├── services/
│   │   ├── ai_generator.py
│   │   ├── edge_cases.py
│   │   ├── export_service.py
│   │   └── openapi_parser.py
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── LoadingScreen.jsx
│   │   └── index.css


---

Installation

Clone Repository

git clone https://github.com/divya2538/testgen-ai.git

cd testgen-ai


---

Backend Setup

cd backend

pip install fastapi uvicorn python-dotenv

Run backend:

python -m uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000


---

Frontend Setup

Open a new terminal:

cd frontend

npm install

npm run dev

Frontend runs at:

http://localhost:5174


---

API Endpoint

Generate Tests

POST

/generate-tests

Request Body

{
  "code": "OpenAPI and Jira Requirement"
}

Response

{
  "status": "success",
  "tests": [],
  "coverage": 92,
  "bugsFound": 5,
  "edgeCases": 14
}


---

Sample Input

OpenAPI URL

https://api.sampleapis.com/futurama/info

Jira Requirement

Build a secure login system for users.

Requirements:
- Email validation
- Password validation
- Invalid login handling
- Session timeout
- SQL injection prevention
- API timeout handling


---

Screens Included

Landing Page

AI Processing UI

Dashboard Analytics

Generated Test Cases

Export Buttons



---

Future Improvements

Real AI integration

OpenAI / Gemini support

PDF export

Jira integration

CI/CD integration

Selenium automation generation

AI bug prediction

Database test generation



---

Hackathon Focus

This project was built for rapid QA automation and AI-assisted testing workflows during a 2-day hackathon environment.

Main focus areas:

Usability

UI/UX

QA automation

AI-inspired workflows

Exportable testing artifacts



---

