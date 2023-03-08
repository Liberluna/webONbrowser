import requests
while True:
    res=requests.post("http://localhost:8000/proxy",data={
        "url":"http://example.com"
    })
    print(res.text)