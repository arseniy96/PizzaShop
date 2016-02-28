#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Contact < ActiveRecord::Base
  validates :username, presence: true
  validates :email, presence: true
  validates :message, presence: true
end

class Order < ActiveRecord::Base
  validates :username, presence: true
  validates :phone, presence: true
  validates :address, presence: true
end

before do
  @pizza = Product.all
  @orders = Order.all
end

get '/' do
	erb :index
end

get '/about' do
  erb :about
end

get '/contacts' do
  @c = Contact.new
  erb :contacts
end

post '/contacts' do
  @c = Contact.new params[:client]
  if @c.save
    erb "<h3>You message has been sent<h3>"
  else
    @error = @c.errors.full_messages.first
    erb :contacts
  end
end

get '/delivery' do
  erb :delivery
end

get '/pizza' do
  erb :pizza
end

post '/cart' do
  @orders_input = params[:orders_input]
  @items = parse_orders_input @orders_input

  if @items.length == 0
    return erb "Your cart is empty"
  end

  @items.each do |item|
    item[0] = @pizza.find(item[0])
  end

  erb :cart
end

def parse_orders_input orders_input
  arr = []
  s1 = orders_input.split(/,/)
  s1.each do |x|
    s2 = x.split(/=/)
    s3 = s2[0].split(/_/)
    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]

    arr.push arr2
  end
  return arr
end

post '/order' do
  @order = Order.new params[:order]
  if @order.save
    erb :order
  else
    @error = @order.errors.full_messages.first
  end
end

get '/login' do
  erb :login
end

post '/admin' do
  if params[:login] == 'admin' && params[:password] == 'admin'
    erb :admin
  else
    @error = 'Access Denied'
    erb :login
  end
end
