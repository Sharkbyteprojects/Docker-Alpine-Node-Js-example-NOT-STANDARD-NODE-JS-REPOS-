FROM alpine:3.7
USER root
RUN apk add nodejs
WORKDIR /
COPY ./startweb.js ./startweb.js
EXPOSE 80
CMD ["node", "startweb.js"]