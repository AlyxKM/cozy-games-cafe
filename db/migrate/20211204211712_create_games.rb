class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :developer
      t.string :publisher
      t.text :desc
      t.string :tags
      t.string :image
      t.string :image2
      t.integer :rating

      t.timestamps
    end
  end
end
