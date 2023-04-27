FROM alpine:latest
RUN apk add git

#755 as a normal file but +x
#COPY --chmod=755 builder.sh builder
#it requires buildkit apparently. settle for chmod.
COPY builder.sh /usr/local/bin/builder.sh
RUN chmod +x /usr/local/bin/builder.sh


ENTRYPOINT [ "/usr/local/bin/builder.sh" ]


#CMD ["/bin/sh"]

