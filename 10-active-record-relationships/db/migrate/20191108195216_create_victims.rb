class CreateVictims < ActiveRecord::Migration[5.2]
  def change
    create_table :victims do |t|
      t.string :name
      t.integer :speed
      t.integer :zombie_id

      t.timestamps
    end
  end
end
