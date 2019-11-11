class DropZombieIdFromVictims < ActiveRecord::Migration[5.2]
  def change
    remove_column :victims, :zombie_id, :integer
  end
end
