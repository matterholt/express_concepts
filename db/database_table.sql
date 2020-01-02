/*
connect 
*/
CREATE TABLE users (
  user_ID SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  user_pass TEXT NOT NULL,
  username TEXT NOT NULL,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  user_role TEXT);

INSERT INTO users (email, user_pass,username,firstname,lastname, user_role) 
VALUES ('pOne@example.com', '123','player1','player','one', 'D1'), 
       ('pTwo@example.com','123','player2','player','two','D1'),
       ('pThree@example.com','abc','player3','player','there','V2'),
       ('pFour@example.com','abc','player4','player','four','V2');

CREATE TABLE projects (
    project_ID SERIAL PRIMARY KEY,
    dev_code VARCHAR(50) NOT NULL,
    part_develop VARCHAR(50) NOT NULL,
    production BOOLEAN DEFAULT FALSE
);

INSERT INTO projects ( dev_code, part_develop)
VALUES('XYZ', 'FRSUB' ),('TBH', 'RRSUB' ),('XYZ', 'ARM' );

CREATE TABLE link_user_project (
    link_ID SERIAL PRIMARY KEY,
    member SERIAL REFERENCES users(user_ID) ON DELETE CASCADE ,
    project_code SERIAL REFERENCES projects(project_ID) ON DELETE CASCADE
);
/*
project 1 == XYZ frsub
user 4 (V2) on project xyz frsub 
user 2 (designer) on project xyz frsub 

project 2 == TBH rrsub
user 1 (designer) on project TBH rrsub
user 3 (V2) on project THB rrsub

project 3 == XYZ arm
user 2 (designer) on project XYZ arm
user 3 (v2) on project XYZ arm
user 1 (designer) on project XYZ arm
user 4 (v2) on project XYZ arm
*/

INSERT INTO link_user_project(member,project_code ) 
VALUES (4,1),(2,1),(1,2),(3,2),(2,3),(3,3),(1,3),(4,3);


CREATE TABLE feaRequest (
    request_ID SERIAL PRIMARY KEY,
    version_name VARCHAR(10) NOT NULL,
    base_on  VARCHAR(10),
    weight_kg REAL,
    purpose TEXT,
    changelog  TEXT,
    submitDateTime  TIMESTAMP DEFAULT CURRENT_TIMESTAMP(2),
    perform_analysis TEXT,
    project_code SERIAL REFERENCES projects(project_ID) ON DELETE CASCADE,
    requester SERIAL REFERENCES users(user_ID) ON DELETE CASCADE
);

INSERT INTO feaRequest 
(version_name, base_on, weight_kg, purpose, changelog, perform_analysis, project_code, requester)
VALUES 
( 'v01r01', 'v01r00', 34.6, 'to make better', 'bead on front , hole on side', 'stiffness', 1, 2),
( 'v02r01', 'v01r56', 32.1, 'to make better', 'bead on front , hole on side', 'dura', 2, 2),
( 'v01r00', 'v00r00', 22.1, 'improve performance', 'bead on front , hole on top', 'static', 3, 2),
( 'v02r00', 'v01r00', 20.1, 'improve performance', 'hole on side', 'stiff', 3, 1);

CREATE TABLE results (
    analysis_id SERIAL PRIMARY KEY,
    analysis_perform TEXT,
    judgement VARCHAR(50), 
    published BOOLEAN DEFAULT FALSE,
    publish_dateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP(2),
    checked BOOLEAN DEFAULT FALSE,
    request_ID SERIAL REFERENCES feaRequest(request_ID) ON DELETE CASCADE
);

INSERT INTO results (analysis_perform, request_ID)
VALUES ('stiff', 1),('dura',2),('static',3);