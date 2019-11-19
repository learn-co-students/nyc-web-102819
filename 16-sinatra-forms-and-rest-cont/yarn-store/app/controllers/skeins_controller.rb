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
    # make a new skein
    # using data from the params
    # save it
    # redirect to the show page

    skein = Skein.create(skein_params)
    redirect "/skeins/#{skein.id}"
  end
  
  # Show
  get '/skeins/:id' do
    @skein = Skein.find(params[:id])
    erb :'skeins/show'
  end

  # Edit
  get '/skeins/:id/edit' do
    # √1. find an existing skein with the id from the params
    # √2. create a form and populate it with the db data
    # √ 3. render an erb

    @skein = find_skein
    erb :'skeins/edit'
  end

  # Update
  patch '/skeins/:id' do
    # √1. find an existing skein with the id from the params
    # √2. update the attributes of the skein with the values in the params
    # 3. redirect to show page

    skein = find_skein
    skein.update(skein_params)
    redirect "/skeins/#{skein.id}"
  end

  # Destroy
  delete '/skeins/:id' do
    skein = find_skein
    skein.destroy
    redirect '/skeins'
  end

  private 

  def find_skein
    Skein.find(params[:id])
  end
  
  def skein_params
    params[:skein]
  end
end