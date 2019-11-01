require 'pry'
require 'date'

require_relative './booking.rb'
require_relative './customer.rb'
require_relative './location.rb'

albert = Customer.new("Albert", 37, "al@al.com")
steve = Customer.new("Steve", 13, "ste@al.com")
gertrude = Customer.new("Gertrude", 50, "gertie@al.com")


main_street = Location.new("Beautiful Home in Sunny Downtown", "432 Main Street, LA", true)
moms_basement = Location.new("Cozy Bed and Breakfast", "17 Lennox Ave, Boston", false)
haunted_house = Location.new("Breath Taking Resort with Beautiful Hilltop View", "1 Transylvania Ave, Salem", true)


# :date, :duration, :customer, :location
booking1 = Booking.new("11/1/2019", 15, albert, moms_basement)
booking2 = Booking.new("12/13/2019", 4, steve, haunted_house)
booking3 = Booking.new("12/5/1945", 10, gertrude, haunted_house)
booking4 = Booking.new("7/12/2020", 8, albert, main_street)
booking5 = Booking.new("3/8/2007", 20, steve, main_street)


booking1.customer_rating = 4
booking1.location_rating = 5

booking2.location_rating = 2

booking3.customer_rating = 5
booking3.location_rating = 3

booking4.customer_rating = 2

booking5.customer_rating = 5
booking5.customer_rating = 1



binding.pry

