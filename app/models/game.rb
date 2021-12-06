class Game < ApplicationRecord
    has_many :playtimes
    has_many :users, through: :playtimes

    validates :title, :image, :developer, :publisher, :desc, :tags, presence: true
    validates :title, uniqueness: true
end
