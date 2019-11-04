class Animal
  attr_reader :name
  attr_accessor :mood
  
  def initialize(name)
    # binding.pry
    puts "I'm an animal"
    @name = name
    @mood = 'nervous'
  end

  def speak
    puts 'just a plain animal here. sorry.'
  end
end