class Zombie < ActiveRecord::Base
  has_many :victim_zombies
  has_many :victims, through: :victim_zombies
end