Rails.application.routes.draw do
  get '/cows', to: 'cows#index', as: 'cows'
  post '/cows', to: 'cows#create'
  get '/cows/new', to: 'cows#new', as: 'new_cow'
  get '/cows/:id', to: 'cows#show', as: 'cow'
  get '/cows/:id/edit', to: 'cows#edit', as: 'edit_cow'
  patch '/cows/:id', to: 'cows#update'
  delete '/cows/:id', to: 'cows#delete'

  # resources :cows

  get '/aliens', to: 'aliens#index', as: 'aliens'
  delete '/aliens/:id', to: 'aliens#delete'

end
