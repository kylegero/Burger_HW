DROP DATABASE IF EXISTS hamburgers_db;

CREATE DATABASE hamburgers_db;
USE hamburgers_db;

CREATE TABLE hamburgers(
id INT NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 0, 
PRIMARY KEY (id)
);