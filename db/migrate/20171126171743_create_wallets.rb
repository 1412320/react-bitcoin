class CreateWallets < ActiveRecord::Migration[5.1]
  def change
    create_table :wallets do |t|
      t.string :w_id
      t.float :balance
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
