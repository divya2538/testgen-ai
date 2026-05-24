def export_pytest(test_cases):

    code = "import pytest\n\n"

    for test in test_cases:

        fn_name = (
            test["title"]
            .lower()
            .replace(" ", "_")
        )

        code += f"""
def test_{fn_name}():
    assert True
"""

    return code



def export_playwright(test_cases):

    code = ""

    for test in test_cases:

        code += f"""
test('{test["title"]}', async ({{ page }}) => {{
    await page.goto('http://localhost:5173')
}});
"""

    return code