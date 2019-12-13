class Api::V1::AlbumsController < ApplicationController
  def index
    albums = Album.all
    render json: albums, except: [:created_at, :updated_at]
    # render json: users, only: [:name, :id], include: :tweets
  end

  def create
    album = Album.create(album_params)
    render json: album, except: [:created_at, :updated_at]
  end

  private

  def album_params
    params.require(:album).permit(:title, :artist, :image, :score)
  end
end
