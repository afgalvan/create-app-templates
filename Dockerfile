FROM openjdk:8-jdk-alpine
COPY ./src/ /usr/src
WORKDIR /usr/
RUN mkdir -p out/production/[project_name]
RUN apk --update add openjdk8-jre
RUN javac $(find ./src/* | grep .java) -d out/production/[project_name]
CMD ["java", "edu.unicesar.purpose.main.Main"]
