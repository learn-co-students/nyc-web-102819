class Alien

  attr_accessor :species_name, :preferred_climate

  @@all = []

  def initialize(species_name, preferred_climate)
    @species_name = species_name
    @preferred_climate = preferred_climate

    @@all << self
  end

  def populations
    Population.all.select do |pop|
      pop.alien == self
    end
  end

  def planets
    self.populations.map do |pop|
      pop.planet
    end
  end


  def self.all
    @@all
  end


end