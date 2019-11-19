class SkeinsController < ApplicationController

  # Index
  get '/skeins' do
    @skeins = Skein.all
    erb :'skeins/index'
  end

  # New
  get '/skeins/new' do 
    erb :'skeins/new'
  end
  
  # Create
  post '/skeins' do
    binding.pry
    # make a new skein
    # using data from the params
    # save it
    # redirect to the show page

    skein = Skein.create(params)
    redirect "/skeins/#{skein.id}"
  end
  
  # Show
  get '/skeins/:id' do
    @skein = Skein.find(params[:id])
    erb :'skeins/show'
  end



end