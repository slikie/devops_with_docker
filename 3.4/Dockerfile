FROM alpine:latest
RUN apk add git

WORKDIR /mydir


#755 as a normal file but +x
#COPY --chmod=755 builder.sh builder
#it requires buildkit apparently. settle for chmod.
COPY builder.sh builder.sh
RUN chmod +x builder.sh


ENTRYPOINT [ "/mydir/builder.sh" ]


#CMD ["/bin/sh"]

