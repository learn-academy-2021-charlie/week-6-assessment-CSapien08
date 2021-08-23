# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: In order to fix the foreign key the user would have to alter the table. The name of the foreign key would be number_of_sightings and the key would be apart of the Animal model.

  Researched answer: To add a foreign key to an exisiting table you would use the ALTER TABLE command. The Key would be a part of the Animanl model because an Animal has_many sighitings so in order to access the number of sightings for that Animal it would need to know which animal it is.


2. Which RESTful API routes must always be passed params? Why?

  Your answer: The name and values

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands could be generate model, generate resource and generate controller. The 

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

The name of the controller method being called by each route is student.

method="GET"    /students   - This would GET all of the students from the database       

method="POST"   /students   -

method="GET"    /students/new

method="GET"    /students/2  

method="GET"    /students/edit/2    

method="PATCH"  /students/2      

method="DELETE" /students/2      





5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I want to be able to create a to do list.
2. As a user, I want to be able to update a to do list.
3. As a user, I want to be able to destroy a to do list.
4. As a developer, I want the user to be able to have clean GUI.
5. As a developer, I want the user to be able to click on an item and that item appears.
6. As a user, I want to be able to view the full to do list.
7. As a user, I want to be able to put a description on a to do list item.
8. As a user, I want to be able to put a due date on a to do list item.
9. As a user, I want to be able to set an alarm for the due date.
10. As a user, I want to be able to delete an alarm for the due date.
