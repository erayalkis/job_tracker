class DeleteBlacklisteds < ActiveRecord::Migration[7.0]
  def change
    drop_table :blacklisteds
  end
end
