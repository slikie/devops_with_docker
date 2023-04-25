docker build -t simple_backend .

docker run  -p 8080:8080 simple_backend

curl localhost:8080/ping
