class CreateVictimZombies < ActiveRecord::Migration[5.2]
  def change
    create_table :victim_zombies do |t|
      t.integer :zombie_id
      t.integer :victim_id

      t.timestamps
    end
  end
end
