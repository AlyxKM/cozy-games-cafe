class Playtime < ApplicationRecord
  belongs_to :user
  belongs_to :game
end
