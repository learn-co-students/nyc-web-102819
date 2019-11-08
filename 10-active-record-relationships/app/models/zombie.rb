class Zombie < ActiveRecord::Base
  has_many :victims
end