class Shop < ApplicationRecord
  belongs_to :merchant
  has_many :products
  has_many :adverts

  include HomemadeInstanceMethods::Shop

  geocoded_by :address
  after_validation :geocode

  acts_as_taggable_on :tags

end
