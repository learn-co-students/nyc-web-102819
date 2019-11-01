class Customer

  attr_accessor :name, :age, :email

  @@all = []

  def initialize(name, age, email)
    @name = name
    @age = age
    @email = email

    @@all << self
  end

  def self.all
    @@all
  end

   def longest_booking
    self.bookings.max_by do |booking|
      booking.duration
    end
  end

  def bookings
    # gimme all the bookings
    # i will SELECT all the ones that belong to this instance
    #   select gives a smaller subset of an array

    Booking.all.select do |booking|
      booking.customer == self
    end
  end

  def locations
    # get all of my bookings first
    # then ask each one to tell me its location
    my_locations = self.bookings.map do |booking|
      booking.location
    end

    # if there are multiple instances of the same locations, remove them
    my_locations.uniq
  end

  def addresses
    self.locations.map do |loc|
      loc.address
    end
  end

  # let's do ratings
end