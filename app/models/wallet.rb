class Wallet < ApplicationRecord
  validates_uniqueness_of :w_id
  belongs_to :user
end
