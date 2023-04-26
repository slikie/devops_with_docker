Actually need to rebuild, and not just use environment.

edited Dockerfile.frontend, and run to rebuild
`docker build -f Dockerfile.frontend -t simple_frontend_new ../material-applications/example-frontend/`

After, replace the name in docker-compose.yml.

Run it, now all the buttons should work. 

Run the nmap - 

```

130 ubuntu@arm2:~/devops_with_docker/2.10$ docker run -it --rm --network host instrumentisto/nmap localhostStarting Nmap 7.93 ( https://nmap.org ) at 2023-04-26 02:55 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.0000080s latency).
Not shown: 997 closed tcp ports (reset)
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
111/tcp open  rpcbind

Nmap done: 1 IP address (1 host up) scanned in 0.14 seconds
```

