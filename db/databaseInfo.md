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

A) create database via sql file
psql -f ./folder/db/database.sql fea_tracker -U adminV2

b) accessing datbase via ownder
psql -d fea_tracker -U v2admin



question:
what data that would like to document

    The main focus is the FEA request, that being the request would be sent to the V2 group and will be validated. The data that is captured is as fallows



example of how to create the database structure see 'database_table.sql'

## perform a join

see sql snippets
