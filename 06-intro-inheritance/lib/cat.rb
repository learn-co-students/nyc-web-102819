class Cat < Animal
  # attr_reader :name
  # attr_accessor :mood
  
  include Mammal
  
  def initialize(name, number_of_lives = 9)
    @number_of_lives = number_of_lives
    super(name)
    puts "I'm a cat"
    @mood = 'apathetic'
  end

  def self.twenty_three_and_me
    self.ancestors
  end

  # def self.ancestors
  #   puts 'what?'
  # end
end