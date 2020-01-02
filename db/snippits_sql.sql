/*
know what the user id is and want to see what projects they are on.

1) return data from that has member column = :id
 link_user_project

2) join at project_code combine table SIMPLE!

3) only return the id of the join table
*/
SELECT * from link_user_project, projects 
 WHERE project_code = project_ID

/*    
select specific user 3 project that they are working on 
*/
SELECT dev_code,part_develop,email, username ,user_role
FROM link_user_project
INNER JOIN projects on projects.project_ID  = link_user_project.project_code
INNER JOIN users on users.user_ID = link_user_project.member
WHERE link_user_project.member = 3;

/*    
project detail page
the things that should be displayed
- all project info, BY ID
- all users that are on the project (   username TEXT NOT NULL,
, firstname,user_role and email)
- fea request list, name, status, judgement, able to link to the request.

- member
*/
SELECT 
username,
firstname,
email,
dev_code,
part_develop,
user_role
FROM link_user_project
INNER JOIN projects on projects.project_ID  = link_user_project.project_code
INNER JOIN users on users.user_ID  = link_user_project.member
WHERE link_user_project.project_code = 3;