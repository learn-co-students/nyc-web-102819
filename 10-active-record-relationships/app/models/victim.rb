class Victim < ActiveRecord::Base
  has_many :victim_zombies
  has_many :zombies, through: :victim_zombies
end