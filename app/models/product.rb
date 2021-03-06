class Product < ApplicationRecord
  include PgSearch::Model

  has_many :product_categories, dependent: :destroy
  has_many :categories, through: :product_categories
  has_many :stocks, dependent: :destroy
  has_many_attached :images

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :small_description, presence: true
  validates :categories, presence: true

  def find_first_price
    @product_prices = []
    self.stocks.each do |stock|
      @product_prices << stock.price_cents
    end
    return @product_prices.sort!.first.to_f / 100
  end


  pg_search_scope :global_search,
    against: [ :name, :long_description, :small_description ],
    associated_against: {
      categories: [ :name]
    },
    using: {
      tsearch: { prefix: true }
    }
end
