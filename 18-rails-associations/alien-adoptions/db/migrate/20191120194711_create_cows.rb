class CreateCows < ActiveRecord::Migration[6.0]
  def change
    create_table :cows do |t|
      t.string :name
      t.integer :number_of_spots
      t.integer :age

      t.timestamps
    end
  end
end
