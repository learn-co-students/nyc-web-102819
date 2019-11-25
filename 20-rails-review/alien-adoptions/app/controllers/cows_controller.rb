class CowsController < ApplicationController
  def index
    @cows = Cow.all
  end

  def new
    @cow = Cow.new
    @aliens = Alien.all
  end

  def create
    cow = Cow.create(cow_params)
    redirect_to cow_path(cow)
  end

  def show
    @cow = Cow.find(params[:id])
    @alien_name = @cow.alien ? @cow.alien.name : "This cow has not been adopted yet."
    # @alien = @cow.alien ||= Alien.new
  end

  def edit
    @cow = Cow.find(params[:id])
  end

  def update
    cow = Cow.find(params[:id])
    cow.update(cow_params)
    redirect_to cow_path(cow)
  end

  def delete
    cow = Cow.find(params[:id])
    cow.destroy
    redirect_to cows_path
  end
  
  private

  def cow_params
    params.require(:cow).permit(:name, :number_of_spots, :age, :alien_id)
  end
end