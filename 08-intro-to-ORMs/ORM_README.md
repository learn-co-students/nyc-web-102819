## Intro to ORM

## SWBATs

* [ ] Follow code that is organized into different files
* [ ] Define Object Relational Mapper (ORM)
* [ ] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [ ] Implement HEREDOCs to be saved in variables to be executed by SQL driver
* [ ] Perform persistent CRUD actions on a model
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases
* [ ] Explain to a peer all the things that happen when we call `Tweet.all` (your answer should include when SQL is fired & when Ruby objects are created)

## Object Relational Mapper (ORM)

* design pattern/architecture that maps
  * ruby classes/objects to tables in a db
  * instances to rows in a table
  * attributes to columns
* Ruby classes are singular, db tables are plural
* attributes of an instance are represented as columns in the table


## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

#### Authors

| id | name            |
|----|-----------------|
| 1  | Mitch Albom     |
| 2  | Kurt Vonnegot   |
| 3  | JK Rowling      |


#### Books

| id | title                 | author_id |
|----|-----------------------|-----------|
| 1  | Tuesday with Morrie   | 1         |
| 2  | Slaughterhouse 5      | 2         |
| 3  | Small Annoying Wizard | 3         |



Q: Write the SQL to find all books written by a certain author given the author's id.

 author_id = 1

```sql
SELECT *
FROM books
WHERE author_id = 1;
```


Q: Write the SQL to find all books written by a certain author given the author's name.


2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name.

#### Authors

| id | name            |
|----|-----------------|
| 1  | Mitch Albom     |
| 2  | Kurt Vonnegot   |
| 3  | JK Rowling      |
| 4  | Neil Gaiman     |
| 5  | Terry Pratchett |


#### Books

| id | title                 |
|----|-----------------------|
| 1  | Tuesday with Morrie   |
| 2  | Slaughterhouse 5      |
| 3  | Small Annoying Wizard |
| 4  | Good Omens            |


#### Book_Authors

| id | author_id | book_id |
|----|-----------|---------|
| 1  | 1         | 1       |
| 2  | 3         | 3       |
| 3  | 2         | 2       |
| 4  | 4         | 4       |
| 5  | 5         | 4       |

good_omens.authors = [<#Neil Gaiman>, <#Terry Pratchett>]

Q: Write the SQL to find all books written by a certain author given their name
author = Neil Gaiman

```sql

```


3. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?




# CRUD REVIEW
What are the four ways we can interact with data?

* Create  
SQL: 
Ruby: 


* Read  
SQL: 
Ruby: 


* Update  
SQL: 
Ruby: 


* Destroy  
SQL: 
Ruby: 
