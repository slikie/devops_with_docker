FROM alpine:latest
RUN apk add git

#755 as a normal file but +x
COPY --chmod=755 builder.sh builder

ENTRYPOINT [ "./builder" ]


CMD ["/bin/sh"]

