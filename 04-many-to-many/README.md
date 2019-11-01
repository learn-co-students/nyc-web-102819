# Many to Many Relationships

## Objectives

* [ ] Implement both sides of a many-to-many relationship
* [ ] Practice keeping groups of data related to classes on the class as a class variable
* [ ] Demonstrate single source of truth by not storing collections of objects on other objects
* [ ] Demonstrate single source of truth by not storing one object in multiple collections

## Deliverables

## Key Concepts

### One to many relationship
User -< Tweets

Gallery -< Exhibit -< Work

League -< Team -< Player

### Many to many relationship
Really just built out of one-to-many relationships

          Join Model

Doctor -< Appointment >- Patient

Let's see a doctor's patients
1. Pull up all the appointments
2. Look at which patient is attending that appointment
3. Write down on a seperate list


Company -< Policy >- Consumer
Artist -< Concert >- Person
Building -< KeyCard >- Person

Planet has many populations
Planet has many aliens THROUGH its populations

Planet -< Population >- Alien












