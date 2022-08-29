FROM node:14.17.0 as frontend

ARG proxy_username
ARG proxy_password
ARG proxy_host
ARG proxy_port

WORKDIR /frontend
COPY frontend .

RUN npm config set proxy http://${proxy_username}:${proxy_password}@${proxy_host}:${proxy_port}
RUN npm config set https-proxy http://${proxy_username}:${proxy_password}@${proxy_host}:${proxy_port}

RUN npm ci
RUN npm run test:coverage
RUN npm run build

FROM maven:3.8.6-jdk-11 as backend
WORKDIR /backend
COPY backend .
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static

ARG proxy_username
ARG proxy_password
ARG proxy_host
ARG proxy_port

RUN mvn -Dhttp.proxyUsername=${proxy_username} \
	  -Dhttp.proxyPassword=${proxy_password} \
	  -Dhttp.proxyHost=${proxy_host} \
	  -Dhttp.proxyPort=${proxy_port} \
	  -Dhttps.proxyUsername=${proxy_username} \
	  -Dhttps.proxyPassword=${proxy_password} \
	  -Dhttps.proxyHost=${proxy_host} \
	  -Dhttps.proxyPort=${proxy_port} \
	  clean verify
	  
FROM openjdk:14-jdk-alpine
COPY --from=backend /backend/target/backend-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080
RUN adduser -D user
USER user
CMD [ "sh", "-c", "java -Dserver.port=$PORT -Djava.security.egd=file:/dev/./urandom -jar app.jar" ]
