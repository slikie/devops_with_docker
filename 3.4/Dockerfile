FROM docker:latest
RUN apk add git

WORKDIR /mydir


COPY builder.sh /mydir/builder
RUN chmod +x builder

#CMD ["/bin/sh"]

ENTRYPOINT ["/bin/sh", "./builder"]



