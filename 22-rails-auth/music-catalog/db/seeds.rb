# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
User.destroy_all

tony = User.create(username: 'tony', password: '123')
amala = User.create(username: 'amala', password: '123')

10.times do 
  Album.create(
    title: Faker::Music.album,
    artist: Faker::Music.band,
    user: tony
  )
end

10.times do 
  Album.create(
    title: Faker::Music.album,
    artist: Faker::Music.band,
    user: amala
  )
end