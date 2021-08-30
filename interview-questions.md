# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: In order to fix the foreign key the user would have to add a column/foreign key with the name of animal_id to the Sightings model and to alter the table using the user should use the ALTER TABLE command. 

  Researched answer: After doing some research I realized that the AlTER TABLE command is what rails does with the generate migrations command. In order to fix the mistake the user will have to run the generate a change migration, then in the class create a method with the name 'change' and use add_column with the animal_id and with the data type of integer. Once it is complete run db:migrate.

  For example: 
    def change
      add_column :animal_id, :integer
    end

2. Which RESTful API routes must always be passed params? Why?

  Your answer: The name of the controller and the id are passed as the params. They are passed to the controller which either gets the information desired or post them which coorelates with the RESTful API update, destroy, and show because in order to update the user needs some way of getting the information because without knowing what data to maninpluate or show then there will be no way of getting the data.

  Researched answer: Their are 3 RESTful API routes that must always be passed params: update, destroy, and show. The reason they specally need params is to pass in the required information to query the database or modify the view.


Class Notes:
Restful Routes (7): edit, update, destroy, index, create, new, and show
Restful API Routes (5): update, destroy, index, create, new, and show
Restful API Routes with params (3): update, destroy, show

3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands could be model, resource, controller. The generate model will create the model or database. Generate resource sets up the migration and the model to start an active record. Generate controller generates the files for the controller.

  Researched answer: There are many rails generate commands, however the three I choose are generate model, generate resource, and generate controller. Generate model generates a new model and the active record for the migration. Generate resource generates the model, the migration and all of the routes. Generate controller generates the controller and the controller file.

Class Notes:
3 commands - model, migration, resource
  a. model generates a migration, and model class.
  b. resource - model, migration, controller, and routes
  c. migration - migration file
  d. controller - contorller, view folder

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

The name of the controller method being called by each route is student.

method="GET"    /students   - index: List of all students in the table.

method="POST"   /students   - create: Creates a new student by adding to the database.

method="GET"    /students/new - new: Creates a form for creating a new student.

method="GET"    /students/2  - show: Shows the student with the id of 2.

method="GET"    /students/edit/2    - edit: Creates a form to be able to edit the student at id 2.

method="PATCH"  /students/2      - update: Updates the student at id 2

method="DELETE" /students/2      - destroy: Deletes the student at id 2


5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to create a to do list.
2. As a user, I want to be able to update a to do list.
3. As a user, I want to be able to destroy a to do list.
4. As a developer, I want the user to be able to have clean GUI and UI/UX.
5. As a developer, I want the user to be able to click on an item and that item appears.
6. As a user, I want to be able to view the full to do list.
7. As a user, I want to be able to put a description on a to do list item.
8. As a user, I want to be able to put a due date on a to do list item.
9. As a user, I want to be able to set an alarm for the due date.
10. As a user, I want to be able to delete an alarm for the due date.
