class AddProducts < ActiveRecord::Migration
  def change
    Product.create :title => 'Pepperoni',
                   :description => 'This is pizza Pepperoni',
                   :price => 400,
                   :size => 30,
                   :is_spicy => false,
                   :is_veg => false,
                   :is_best_offer => true,
                   :path_to_image => '/images/pizza1.jpg'

    Product.create :title => 'Veg',
                   :description => 'This is Veg pizza',
                   :price => 350,
                   :size => 30,
                   :is_spicy => false,
                   :is_veg => true,
                   :is_best_offer => true,
                   :path_to_image => '/images/pizza3.jpg'

    Product.create :title => 'SpicyPizza',
                   :description => 'This is Spicy pizza',
                   :price => 450,
                   :size => 30,
                   :is_spicy => true,
                   :is_veg => false,
                   :is_best_offer => true,
                   :path_to_image => '/images/pizza2.jpg'
  end
end
