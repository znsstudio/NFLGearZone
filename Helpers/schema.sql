DROP DATABASE IF EXISTS gearzonedb;
CREATE DATABASE gearzonedb;

USE DATABASE gearzonedb;

DROP DATABASE IF EXISTS gearzonedb;
CREATE DATABASE gearzonedb;

USE gearzonedb;

CREATE TABLE Team(
id int NOT NULL AUTO_INCREMENT,
title VARCHAR (255) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE Hat(
id int NOT NULL AUTO_INCREMENT,
title VARCHAR (255) NOT NULL,
image VARCHAR (255) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE Person(
id int NOT NULL AUTO_INCREMENT,
	firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

