# One to Many Relationships

## Objectives

* [ ] Implement one object to many objects relationship
  * [ ] One object has many objects
  * [ ] One object belongs to another object
* [ ] Demonstrate the concept of Entity Relationship Diagram (ERD)
* [ ] Practice passing custom objects as arguments to methods
* [ ] Demonstrate single source of truth
* [ ] Infer type of method (class or instance) through naming conventions (`.` methods vs `#` methods)  
* [ ] Recognize a single point of entry for an application

## Deliverables


* Create a _User_ class. The class should have these methods:
  * [x] `User#initialize` which takes a username
  * [x] `User#username` reader method
  * [x] `User#tweets` that returns an array of Tweet instances
  * [ ] `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection  
  * [ ] `User.print_tweets` that prints the message of each tweet to the screen in a _pretty_ way (be creative)
  * [ ] `User#like_tweet` that accepts as a tweet instance as a parameter
  * [ ] `User#liked_tweets` that returns a collection of all the tweets this user has liked
<br>  

* Create a _Tweet_ class. The class should have these methods:
	* [ ] `Tweet#initialize` which takes a message and a user
	* [ ] `Tweet#message` that returns a string
	* [ ] `Tweet#user` that returns an instance of the user class
	* [ ] `Tweet.all` that returns all the Tweets created.
	* [ ] `Tweet#username` that returns the username of the tweet's user
	* [ ] `Tweet#likers` that returns a collection of all the Users who have liked this tweet

## Key Concepts

* _Domain_ - the part of the real world we're trying to build in our application
* _Domain Model_ - is our representation of the whole domain in our code - classes, methods, variables
* _Model_ - classes that represent abstract or concrete objects in our domain (e.g., Dog), they hold data and behavior

## Discussion Questions

1. What is a one-many-relationship? How would we draw that in an ERD?
2. What does _Single Source of Truth_ mean?
3. What is a model? Domain? Domain model?
4. What is the relationship between a class and an instance?