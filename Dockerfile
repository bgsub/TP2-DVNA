# Damn Vulnerable NodeJS Application

FROM node:carbon
LABEL MAINTAINER "Subash SN"

WORKDIR /app

COPY . .

RUN echo "Host geoserver" && node -v && chmod +x /app/entrypoint.sh \
	&& npm install
	
EXPOSE 80

CMD ["bash", "/app/entrypoint.sh"]