class AddAlienIdToCows < ActiveRecord::Migration[6.0]
  def change
    add_column :cows, :alien_id, :integer
  end
end
