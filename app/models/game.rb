class Game < ApplicationRecord
    has_many :playlists
    has_many :users, through: :playlists
end
