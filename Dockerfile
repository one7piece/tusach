FROM ubuntu
RUN apt-get install zip -y
RUN mkdir /tusach
ADD ./dist /tusach/
CMD /tusach/tusach.sh
