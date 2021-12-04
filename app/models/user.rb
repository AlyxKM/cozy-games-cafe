class User < ApplicationRecord
    has_many :playlists
    has_many :games, through: :playlists

    # has_secure_password
    # validates :username, :password, presence: true
    # validates :username, uniqueness: true

end
