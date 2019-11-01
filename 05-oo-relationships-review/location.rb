class Location

  attr_accessor :name, :address, :animal_friendly

  @@all = []

  def initialize(name, address, animal_friendly)
    @name = name
    @address = address
    @animal_friendly = animal_friendly

    @@all << self
  end

  def bookings
    Booking.all.select do |booking|
      booking.location == self
    end
  end

  def customers
    self.bookings.map do |booking|
      booking.customer
    end.uniq
  end

  # find the longest booking ever for a location
  # what type of method: instance
  # 1. grab all the bookings for that location
  # 2. grab all the durations from those bookings
  # 3. sort them
  # 4. grab the top one

  def longest_booking
    # returns the longest booking OBJECT not just the duration
    # sorted_bookings = self.bookings.sort_by do |booking|
    #   booking.duration
    # end

    # sorted_bookings[0]

    self.bookings.max_by do |booking|
      booking.duration
    end
  end


  # find the average guest age
  # 1. get all customers for this location
  # 2. collect ages from customers
  # 3. average the array

  def average_guest_age
    customer_ages = self.customers.map do |cust|
      cust.age
    end

    sum = customer_ages.inject do |acc, age|
      acc + age
    end

    sum / customer_ages.length.to_f
  end

  def self.all
    @@all
  end

end