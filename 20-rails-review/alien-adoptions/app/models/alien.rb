class Alien < ApplicationRecord
  has_many :cows, dependent: :nullify
end