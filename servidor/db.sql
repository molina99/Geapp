create database geapp;

create table geapp(
	id serial not null primary key,
	user_name varchar(100),
	latitud varchar(255),
	longitud varchar(255),
	fecha date
);