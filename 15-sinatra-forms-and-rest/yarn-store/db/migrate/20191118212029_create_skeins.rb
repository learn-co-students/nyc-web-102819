class CreateSkeins < ActiveRecord::Migration
  def change
    create_table :skeins do |t|
      t.string :colorway
      t.string :material
      t.integer :length
      t.string :gauge
      t.timestamps
    end
  end
end
