class AddRatingToJobs < ActiveRecord::Migration[7.0]
  def change
    add_column :jobs, :rating, :integer
  end
end
