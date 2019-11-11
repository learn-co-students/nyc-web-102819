class VictimZombie < ActiveRecord::Base
  belongs_to :victim
  belongs_to :zombie
end