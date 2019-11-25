# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Destroying ya cowz'
Cow.destroy_all

puts 'Making ya cowz 🐄'
17.times do
  Cow.create(
    name: Faker::Name.first_name, 
    number_of_spots: (0...99).to_a.sample, 
    age: (0...20).to_a.sample
  )
end

puts 'Destroying ya alienz'
Alien.destroy_all

puts "Making ya 'lienz 👽"

37.times do 
  Alien.create(
    name: Faker::Name.first_name,
    planet: Faker::Space.galaxy,
    age: rand(1000)
  )
end
