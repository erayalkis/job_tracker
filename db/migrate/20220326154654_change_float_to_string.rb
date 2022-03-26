class ChangeFloatToString < ActiveRecord::Migration[7.0]
  def change
    change_column :jobs, :pay, :string
  end
end
