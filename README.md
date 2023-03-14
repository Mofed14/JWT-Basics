# JWT-Basics
Simple Project to show the JWT-Basics

# JWT
Authorization: when I created a username the token is generated and when i want to read a data like
dashboard I will send a bareer token with request header to get our data


# login 
body { 
    username : '',
    password : ''
}

localhost:3000/api/v1/login

output : 
{
    "msg": "user created",
    "token": token
}


# Dashboard
localhost:3000/api/v1/dashboard

headers : {
    authorization : Bareer <token>
}

outPut : 
{
    "msg": "Hello username",
    "secret": "Here Is Your Authorized Data Your Lucky Number is 70"
}