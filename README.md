# DockerSpringReact

This is an example for using Docker for an application with Java Spring, React and PostgreSQL.

## Run on local (develop mode)

On local mode you have to run a postrgresql instance and run the folows:

backend: 

    mvnw spring-boot:run

frontend:

    npm start

After that the site is available at: http://localhost:8081

    
## Run on docker

### Create docker image for my-site:

    docker build -t my_site . --build-arg proxy_username=<username> --build-arg proxy_password=<password> --build-arg proxy_host=<host> --build-arg proxy_port=<port>

#### Run only my_site (without DB)
    docker run --name my_site -d -p 8080:8080 my_site

#### Run only DB

    docker run --name my_postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -p 5432:5432 -d postgres

### Launch all services (my_site and DB):

    docker-compose up -d
	
After that the site is available at: http://localhost:8080
    
### To stop all services:

    docker-compose down
