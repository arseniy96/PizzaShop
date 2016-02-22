#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base

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
  erb :contacts
end

get '/delivery' do
  erb :delivery
end

get '/pizza' do
  erb :pizza
end

get '/cart' do
  erb :cart
end
