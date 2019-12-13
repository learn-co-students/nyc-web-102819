# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alon
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Ruining all ya songz 🎵🤡"
Album.destroy_all

puts "Making you some more songz 🤷🏻‍♂️🤖🙀"
albums = [
    {
      score: "20",
      title: "Merry Christmas",
      image: "https://media.pitchfork.com/photos/5ddbf1586133160008c6461a/1:1/w_320/mariahdeluxe.jpg",
      artist: "Mariah Carey"
    },
    {
      score: "6",
      title: "Christmas & Chill",
      image: "https://upload.wikimedia.org/wikipedia/en/0/06/Christmas_and_Chill.jpg",
      artist: "Ariana Grande"
    },
    {
      score: 0,
      title: "Michael Buble Christmas",
      image: "https://images-na.ssl-images-amazon.com/images/I/71UTGwpfwwL._SY355_.jpg",
      artist: "Michael Buble"
    },
    {
      score: 0,
      title: "Cee Lo's Magic Moment",
      image: "https://images-na.ssl-images-amazon.com/images/I/61xGTeDZdwL.jpg",
      artist: "Cee Lo Green"
    },
    {
      score: 0,
      title: "Home For Christmas",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Home_for_Christmas.png/220px-Home_for_Christmas.png",
      artist: "N'Sync"
    },
    {
      title: "Charlie Brown XMas",
      artist: "mad people",
      image: "https://images-na.ssl-images-amazon.com/images/I/71vaEND0faL._SY355_.jpg",
      score: "52"
    },
    {
      title: "Kenny G Christmas",
      artist: "Kenny G",
      image: "https://images-na.ssl-images-amazon.com/images/I/81fdTwjW7hL._SX355_.jpg",
      score: 0
    }
  ]

  albums.each do |album|
    Album.create(album)
  end