# Notes for the database

After it is installed the first is to create the database or also known as to initialize it. To do that we use the command and SQL DDL (data definition lang). \* skipping over the create superuser and going right to the meat and potatoes.

List of commands that could be helpful
fire up the postgres -> psql postgres -> (default user, default table)
fire up with specific creds -> psql -d postgres -U me -> -d
figure out where you at -> \connifno
list of user in database -> \du
list of tables in database -> \dt
get the details of table => \d (name)

## !! SOME DOWN FALL OF USING POSTGRES

to recap
GETTING START BUILDING POSTGRESQL,

1. create user
2. sign in by psql -d postgres -U (name)
3. create database, CREATE DATABASE (name)
4. connect to database \c (name of db),
5. create table, CREATE TABLE (name) -> build schema,

question:
what data that would like to document

    The main focus is the FEA request, that being the request would be sent to the V2 group and will be validated. The data that is captured is as fallows

table name: projects

| schema name | schema type | Type |
| ----------- | ----------- | ---- |
| project_id  | serial      | 111  |
| code        | varchar(50) | XYZ  |
| part        | varchar(50) | SUB  |

table name: fearequest

| schema name | schema type    | Type            |
| ----------- | -------------- | --------------- |
| feaReq_id   | serial         | 111             |
| vername     | varchar(50)    | V01R00          |
| baseon      | varchar(50)    | V00R00          |
| date        | date           | 19-19-12-4:00   |
| description | varchar(250)   | "Make it better |
| completed   | boolean        | default false   |
| weight      | int            | 35              |
| design_id   | foreignK(user) | 11              |
| project     | foreignK(proj) | 12              |

table name: user
name varchar(80)
role varchar(80)
password varchar(250)
