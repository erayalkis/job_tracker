class Job < ApplicationRecord
  validates_inclusion_of :rating, in: 1..10
end