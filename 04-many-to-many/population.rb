class Population

  attr_accessor :size, :planet, :alien

  @@all = []

  def initialize(size, planet, alien)
    @size = size
    @planet = planet
    @alien = alien

    @@all << self
  end


  def self.all
    @@all
  end


end