import requests
import flask

def signin():
    username = input("Enter Username :")
    password = input("Enter Password :")
    
    payload = {
        "username":username,
        "password":password
    }
    
    resp = requests.post("http://127.0.0.1:5000/do_signin", json = payload).content.decode()
    
    print(resp)
    
signin()

if "_main" == __name__:
    app.run(host="127.0.0.1", port="8000", debug=True)