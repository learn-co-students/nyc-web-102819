class Booking

  attr_accessor :date, :duration, :customer, :location, :customer_rating, :location_rating

  @@all = []

  def initialize(date, duration, customer, location)

    @date = date
    @duration = duration
    @customer = customer
    @location = location

    @customer_rating = nil
    @location_rating = nil
    
    @@all << self
  end

  def self.all
    @@all
  end

end