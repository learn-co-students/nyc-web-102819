# THE DOG BREEDER

# The Dog Breeder wants to breed a bunch of dogs that can do the following stuff. 
# Below is a list of their requirements.
# How can we help them out?

# √1. I want to be able to create a cuddle-pile of dogs, each with a name and a breed
# √1a. I want to be able to see a dog's name and breed and to be able to change ONLY their name

# 2. I want every dog to be able to speak and tell me its name

# 3. I want every dog to be able to run around

# 4. I want every dog to be able to perform a trick where they speak, run around, and then rollover

# √5. I want to be able to see a list of all of the dogs in my cuddle-pile -> Dog.cuddle_pile

# 5a. I want a list of dog names

# 6. I want to be able to find puppies in my cuddle-pile by breed -> [ Dog, Dog, Dog ]

# 7. I want to be able to give my cuddle-pile a single command and get them all to speak at the same time

require 'pry'

class Dog 

  attr_reader :breed
  attr_accessor :name

  @@all = []
  
  def initialize(name, breed)
    @name = name
    @breed = breed

    @@all << self
  end

  def speak
    puts "Barf, my name is #{name}"
  end

  def self.find_by_breed(breed)
    # get all the dogs
    # filter by the breed
    # return a new array of dogs

    self.all.select do |dog|
      dog.breed == breed
    end
  end

  def self.all
    @@all
    # puts 'barf'
  end

  def self.cuddle_pile
    all
  end
end

d1 = Dog.new('TooToo', 'Multi-Poo')
d2 = Dog.new('Neikko', 'Mostly Rat')
d3 = Dog.new('Perky', 'German Shepherd')
d4 = Dog.new('Patches', 'German Shepherd')

binding.pry
'kthxbye'