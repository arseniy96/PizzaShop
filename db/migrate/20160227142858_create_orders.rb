class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :orders_input
      t.string :username
      t.text :phone
      t.text :address

      t.timestamps
    end
  end
end
