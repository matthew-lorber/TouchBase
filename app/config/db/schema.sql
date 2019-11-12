drop database if exists database_development;

create database database_development;
use database_development;

create database database_test;
use database_test;

use c8uqfusf09qdnwxt;

drop table if exists temp_data;

create table temp_data
(
  id INT NOT NULL AUTO_INCREMENT,
  handle VARCHAR(25) NOT NULL,
  varA VARCHAR(25) NOT NULL,
  varX INTEGER,
  varY INTEGER,
  varB INTEGER,
  PRIMARY KEY(id)
);
select * from temp_data;
