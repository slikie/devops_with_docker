Exercise 1.9:
```

> touch text.log

> docker run -v "$(pwd)/text.log:/usr/src/app/text.log" devopsdockeruh/simple-web-service:alpine

Starting log output
Wrote text to /usr/src/app/text.log
Wrote text to /usr/src/app/text.log
Wrote text to /usr/src/app/text.log


rt@rt-pc ~/d/1.8 (main)> cat text.log 
2023-04-25 07:15:57 +0000 UTC
2023-04-25 07:15:59 +0000 UTC
2023-04-25 07:16:01 +0000 UTC
2023-04-25 07:16:03 +0000 UTC
2023-04-25 07:16:05 +0000 UTC

```
