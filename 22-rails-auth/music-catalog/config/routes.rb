Rails.application.routes.draw do
  root to: 'welcome#index'
  
  resources :albums

  get '/signup', to: 'users#new', as: 'signup'
  get '/users/:id', to: 'users#show', as: 'user'
  post '/users', to: 'users#create'

  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
