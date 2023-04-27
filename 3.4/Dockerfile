FROM alpine:latest
RUN apk add git

#755 as a normal file but +x
#COPY --chmod=755 builder.sh builder
#it requires buildkit apparently. settle for chmod.
COPY builder.sh builder.sh
RUN chmod +x builder.sh


ENTRYPOINT [ "./builder.sh" ]


#CMD ["/bin/sh"]

