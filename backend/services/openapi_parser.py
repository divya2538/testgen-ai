import requests


def parse_openapi(url):

    response = requests.get(url)

    data = response.json()

    endpoints = []

    for path, methods in data.get("paths", {}).items():

        for method in methods.keys():

            endpoints.append({
                "path": path,
                "method": method
            })

    return endpoints