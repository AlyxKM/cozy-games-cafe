class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :bio, :icon
end
