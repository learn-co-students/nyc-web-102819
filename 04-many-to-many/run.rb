require 'pry'
require_relative "./planet.rb"
require_relative "./population.rb"
require_relative "./alien.rb"


pluto = Planet.new("Pluto", 456)
titan = Planet.new("Titan", 7860)
tattoine = Planet.new("Tattoine", 104258)
earth = Planet.new("Earth", 8567)

predator = Alien.new("Predator", "tropical?")
ewok = Alien.new("Ewok", "the forest moon of Endor")
wookies = Alien.new("Wookie", "arctic")

pop1 = Population.new(6729530, earth, predator)
pop2 = Population.new(412892, tattoine, wookies)
pop3 = Population.new(221434, tattoine, predator)
pop4 = Population.new(47302, titan, ewok)
pop5 = Population.new(12367, pluto, wookies)


binding.pry
