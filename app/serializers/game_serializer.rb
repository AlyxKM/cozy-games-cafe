class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :developer, :publisher, :desc, :tags, :image, :image2, :rating
end
