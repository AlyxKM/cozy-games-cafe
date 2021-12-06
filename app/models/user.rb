class User < ApplicationRecord
    has_many :playtimes
    has_many :games, through: :playtimes

    # has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true

end
