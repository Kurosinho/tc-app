FROM alpine:3.17

WORKDIR /tc-app

RUN apk add go

ADD css /tc-app/css
ADD images /tc-app/images 
ADD node_modules /tc-app/node_modules 
ADD scripts /tc-app/scripts 
ADD styles /tc-app/styles 
ADD templates /tc-app/templates 
ADD tree /tc-app/tree 

COPY favicon.ico go.mod go.sum main.go package-lock.json package.json postcss.config.js tailwind.config.js /tc-app/

RUN go build
CMD [ "./tc-app" ]