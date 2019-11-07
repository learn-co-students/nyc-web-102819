# Intro to ActiveRecord Lecture Notes

### Learning Goals

* [ ] Define Object Relational Mapper (ORM)
* [ ] Describe how gems work and the value of shared code
* [ ] Implement ActiveRecord in their projects
* [ ] Practice creating migrations for updating the database structure
* [ ] Explain how rake works and how to run rake tasks
* [ ] Distinguish between and define "model", "class", and "table"
* [ ] Practice with ActiveRecord::Base instance and class methods
* [ ] Perform persistent CRUD actions on one model using ActiveRecord


### Important Concepts

* ruby classes are singular, tables are plural
* Aliens -> planet, name, teeth:integer, temperment:string


* Methods from ActiveRecord
  * `Model.new` - creates a new instance in local memory without persistence
  * `Model#save` - inserts or updates instance in db
  * `Model.create` - Model.new + Model\#save
  * `Model.all` - all instances
  * `Model.first` - instance with the lowest ID in the db
  * `Model.find` - also find by id
  * `Model.find_by(attribute: value)` - can find by one attribute-value pair or multiple
  * and many others!!!