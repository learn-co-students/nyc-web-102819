Rails.application.routes.draw do
  resources :albums

  get '/users/new', to: 'users#new', as: 'new_user'
  post '/users', to: 'users#create'
end
