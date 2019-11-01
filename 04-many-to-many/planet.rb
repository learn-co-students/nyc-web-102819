class Planet

  attr_accessor :name, :mass

  @@all = []

  def initialize(name, mass)
    @name = name
    @mass = mass

    @@all << self
  end

  def populations
    Population.all.select do |pop|
      pop.planet == self
    end
  end


  # Let's see a planet's aliens
  # 1. Pull up all the populations for THIS planet
  # 2. Look at which alien is attending that population for each population
  # 3. Record in a separate list

  def aliens
    self.populations.map do |pop|
      pop.alien
    end
  end


  def self.all
    @@all
  end


end