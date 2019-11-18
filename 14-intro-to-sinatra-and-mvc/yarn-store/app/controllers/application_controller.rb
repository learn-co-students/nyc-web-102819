require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/skeins' do
    @skeins = Skein.all
    erb :index
  end

  get '/skeins/:id' do
    @skein = Skein.find(params[:id])
    erb :show
  end
end
