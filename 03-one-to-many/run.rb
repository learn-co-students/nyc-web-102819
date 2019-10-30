require 'pry'
require_relative 'tweet'
require_relative 'user'

u1 = User.new('coffee dad')
u2 = User.new('tea mom')

u1.post_tweet("I love coffee☕️")
u1.post_tweet("I also love doodads")
u2.post_tweet("Coffee sucks. Duh.🍵")

binding.pry