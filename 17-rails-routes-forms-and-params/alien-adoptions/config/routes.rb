Rails.application.routes.draw do
  get '/cows', to: 'cows#index', as: 'cows'
  post '/cows', to: 'cows#create'
  get '/cows/new', to: 'cows#new', as: 'new_cow'
end
