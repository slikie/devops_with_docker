```
> docker run devopsdockeruh/simple-web-service:alpine hello

		 The application accepts 1 argument "server". Use the argument server to run the server

		If no arguments are supplied the application will output log strings to a file.

		Arguments given: hello

```

```

rt@rt-pc ~/d/1.8 (main)> docker run devopsdockeruh/simple-web-service:alpine server
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /*path                    --> server.Start.func1 (3 handlers)
[GIN-debug] Listening and serving HTTP on :8080


```


docker build -t web-server .

docker run web-server
