class CreateBlacklisted < ActiveRecord::Migration[7.0]
  def change
    create_table :blacklisteds do |t|
      t.string :company
      t.string :role
      t.timestamps
    end
  end
end
