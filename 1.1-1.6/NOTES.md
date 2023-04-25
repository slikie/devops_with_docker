### Exercise 1.1:
```

rt@rt-pc ~> docker run -d --name nginx1 nginx
c2b101e0010e085de33aa4d7cb886b34f41807e4cc802e96cc64a0ef9f40d99f
rt@rt-pc ~> docker run -d --name nginx2 nginx
c71082c23f1742935358e75ac88c4c9eaa08833ddd5a106073eca93f55433fcb
rt@rt-pc ~> docker run -d --name nginx3 nginx
b635c08b5b0e0e94628c8a9b958f56ed28ae9b44ea39d8480100e1cdc30ddfd5
rt@rt-pc ~> docker  stop nginx2 nginx3
nginx2
nginx3


rt@rt-pc ~> docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                     PORTS     NAMES
b635c08b5b0e   nginx     "/docker-entrypoint.…"   17 seconds ago   Exited (0) 4 seconds ago             nginx3
c71082c23f17   nginx     "/docker-entrypoint.…"   45 seconds ago   Exited (0) 4 seconds ago             nginx2
c2b101e0010e   nginx     "/docker-entrypoint.…"   47 seconds ago   Up 46 seconds              80/tcp    nginx1
```

### Exercise 1.2:
```
~> docker stop $(docker ps -aq)
~> docker rmi $(docker images -q)

rt@rt-pc ~> docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

rt@rt-pc ~> docker images 
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
```


### Exercise 1.3:
```
~> docker run  devopsdockeruh/simple-web-service:ubuntu

rt@rt-pc ~> docker logs -f e149ed3ed1e4
Starting log output
Wrote text to /usr/src/app/text.log

rt@rt-pc ~ [1]> docker exec -it 42a84cb85c32a2b834f15e149e71737d7da9e042308a7702c89f67ff9ba271d5 bash
root@42a84cb85c32:/usr/src/app# cat /usr/src/app/text.log
2023-04-25 06:25:08 +0000 UTC
2023-04-25 06:25:10 +0000 UTC
Secret message is: 'You can find the source code here: https://github.com/docker-hy'
2023-04-25 06:25:12 +0000 UTC
```


### Exercise 1.4
```
docker run -it  ubuntu:latest sh -c 'apt-get update && apt-get install -y curl && while true; do echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website; done'
```


### Exercise 1.5
```
rt@rt-pc ~> docker run -d  devopsdockeruh/simple-web-service:alpine


rt@rt-pc ~> docker image ls
REPOSITORY                          TAG       IMAGE ID       CREATED       SIZE
...
devopsdockeruh/simple-web-service   ubuntu    4e3362e907d5   2 years ago   83MB
devopsdockeruh/simple-web-service   alpine    fd312adc88e0   2 years ago   15.7MB

rt@rt-pc ~ [1]> docker exec -it 5059a5c08451 sh

/usr/src/app # tail /usr/src/app/text.log
2023-04-25 06:34:49 +0000 UTC
2023-04-25 06:34:51 +0000 UTC
2023-04-25 06:34:53 +0000 UTC
2023-04-25 06:34:55 +0000 UTC
Secret message is: 'You can find the source code here: https://github.com/docker-hy'
2023-04-25 06:34:57 +0000 UTC
```

### Exercise 1.6
```
rt@rt-pc ~> docker run -it devopsdockeruh/pull_exercise

...
Give me the password: basics
You found the correct password. Secret message is:
"This is the secret message"
```
