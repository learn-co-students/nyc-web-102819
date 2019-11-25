class Cow < ApplicationRecord
  belongs_to :alien, optional: true

  validates :name, uniqueness: {case_sensitive: false}, presence: true
end