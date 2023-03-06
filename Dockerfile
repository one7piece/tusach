FROM ubuntu:22.04
RUN apt-get update && apt-get install -y zip
RUN mkdir /tusach
COPY ./dist/. /tusach/
CMD /tusach/tusach.sh config.json
 
