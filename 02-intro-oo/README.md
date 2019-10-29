# Intro to Object Orientation

## SWBATs

* [ ] Define object in programming domain
* [ ] Explain the concept of sending messages
* [ ] Create a class and instantiate an instance of the class
* [ ] Explain the difference between a class and an instance
* [ ] Pass arguments to new by defining an initialize method in class
* [ ] Create instance methods
* [ ] Call methods on the implicit or explicit self
* [ ] Define attribute readers and writers using attr_ macros
* [ ] Get more practice with array compositions (each, map, select/filter)
* [ ] Explain the need for variable scope and why it's important to not utilize global variables

## Notes
  - class and instances are different
  - provides properties for instances
  - classes are sorta like a blueprint for instances
  - clases are a template for instances
  - classes define what an instance is an what it can do
  - classes are instance/object factories


## Deliverables

Write an implementation of a bank account that meets the following requirements:

*  [x] can show me all the bank accounts that have been created
*  [x] can print the balance of the account
*  [x] can deposit money into the account
*  [x] can withdraw money from the account
*  [x] keeps track of the account number
*  [ ] keeps track of the customer id of the account
*  [x] balance
*  [ ] make a class method for deposit


## Discussion Questions

* What's the difference between a class and an instance?
  * class defines the rules for an instance - blueprint, template, object factory
  * instance has to follow the rules - state and behavior - set by the class
* What is the difference between a local variable and an instance variable?
  * it's all a matter of scope
* What is `self` in a class method?
  * the class
* What is `self` in an instance method?
  * the instance
* attr_* macros
  * getter and setter methods
  * defines part of the interface for our class

## Links

* more on class and instance variables - <https://mixandgo.com/learn/how-to-avoid-the-ruby-class-variable-problem>