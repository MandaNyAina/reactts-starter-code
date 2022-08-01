FROM node:17-bullseye as dev-stage

ARG project_name

WORKDIR /var/www/${project_name}

COPY . .

EXPOSE 3000