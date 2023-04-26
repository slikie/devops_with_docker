all fixed up in 2.8 when it feels right.
No apparently reason to touch Dockerfile.frontend or Dockerfile.backend.
Maybe deleted the old ENV line?
But it got overwritten by docker-compose.yml environment field. Should be fine as is.

It is a weird behavior about nginx proxy_pass. I've been using caddy(v2) and haven't really
found a way to handle this field(remove the trailing path in url.)

But it doesnt behave the same as `proxy_pass http://simple_backend:8080/;` and `proxy_pass http://simple_backend:8080;`

Need to read more about it.
