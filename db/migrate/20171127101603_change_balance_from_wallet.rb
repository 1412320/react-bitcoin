class ChangeBalanceFromWallet < ActiveRecord::Migration[5.1]
  def change
    change_column :wallets, :balance, :float, :default => 1000.00
  end
end
