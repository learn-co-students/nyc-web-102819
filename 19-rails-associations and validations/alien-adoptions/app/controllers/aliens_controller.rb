class AliensController < ApplicationController
  def index
    @aliens = Alien.all
  end

  def delete
    alien = Alien.find(params[:id])
    alien.destroy
    redirect_to aliens_path
  end
end