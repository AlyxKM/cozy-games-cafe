class PlaytimeSerializer < ActiveModel::Serializer
  attributes :id, :playtime
  has_one :user
  has_one :game
end
