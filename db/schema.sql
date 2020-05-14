DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
-- id: an auto incrementing int that serves as the primary key.
  id int NOT NULL AUTO_INCREMENT,

-- burger_name: a string.
  name VARCHAR(30) NOT NULL,

-- devoured: a boolean.
  devoured BOOLEAN,
  PRIMARY KEY(id)
);