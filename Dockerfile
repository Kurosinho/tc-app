FROM alpine

COPY css images node_modules scripts styles templates tree \ 
    favicon.ico go.mod go.sum main.go package-lock.json package.json postcss.config.js tailwind.config.js /

RUN go build
CMD [ "./tc-app" ]