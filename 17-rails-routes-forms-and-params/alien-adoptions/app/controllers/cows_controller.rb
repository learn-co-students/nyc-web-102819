class CowsController < ApplicationController
  def index
    @cows = Cow.all
  end

  def new
    @cow = Cow.new
  end

  def create
    byebug
    cow = Cow.create(cow_params)
    redirect_to cows_path
  end

  private

  def cow_params
    params.require(:cow).permit(:name, :number_of_spots, :age)
  end
end