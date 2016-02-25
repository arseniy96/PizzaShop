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

before do
  @pizza = Product.all
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
  erb :cart
end
