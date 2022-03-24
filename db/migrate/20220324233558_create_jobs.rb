class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :role, null: false
      t.string :company, null: false
      t.string :link, null: false
      t.float :pay, null: false
      t.string :status, default: "NEW"
      t.timestamps
    end
  end
end
