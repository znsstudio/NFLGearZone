DROP DATABASE IF EXISTS gearzonedb;
CREATE DATABASE gearzonedb;

USE gearzonedb;

CREATE TABLE person (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  lastname VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  address VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE team (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);