class CreatePlaytimes < ActiveRecord::Migration[6.1]
  def change
    create_table :playtimes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true
      t.integer :playtime

      t.timestamps
    end
  end
end
