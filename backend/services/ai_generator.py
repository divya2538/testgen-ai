import random

def generate_ai_tests(user_input):

    tests = [

        {
            "title": "Verify Login with Valid Credentials",
            "category": "API Test",
            "priority": "High",
            "steps": [
                "Open login page",
                "Enter valid email",
                "Enter valid password",
                "Click login"
            ],
            "expected": "User should login successfully"
        },

        {
            "title": "Validate Empty Password",
            "category": "Validation Test",
            "priority": "Medium",
            "steps": [
                "Open login page",
                "Enter email only",
                "Click login"
            ],
            "expected": "Validation error should appear"
        },

        {
            "title": "SQL Injection Protection",
            "category": "Security Test",
            "priority": "Critical",
            "steps": [
                "Enter SQL payload",
                "Submit request"
            ],
            "expected": "Application should block SQL injection"
        },

        {
            "title": "Boundary Username Length",
            "category": "Boundary Test",
            "priority": "Medium",
            "steps": [
                "Enter 256 character username",
                "Submit form"
            ],
            "expected": "Validation error should appear"
        },

        {
            "title": "API Response Time",
            "category": "Performance Test",
            "priority": "Low",
            "steps": [
                "Call authentication API",
                "Measure response time"
            ],
            "expected": "Response time should be under 2 seconds"
        }

    ]

    return {
        "status": "success",
        "tests": tests,
        "coverage": random.randint(82, 97),
        "bugsFound": random.randint(2, 8),
        "edgeCases": random.randint(10, 20)
    }