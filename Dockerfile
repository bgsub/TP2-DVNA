# Damn Vulnerable NodeJS Application
FROM node:18

WORKDIR /app

COPY . .

RUN echo "Host geoserver" && node -v && chmod +x /app/entrypoint.sh \
	&& npm install

CMD ["bash", "/app/entrypoint.sh"]