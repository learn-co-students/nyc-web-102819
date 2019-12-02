Rails.application.routes.draw do
  resources :books

  post '/cart', to: 'cart#add_to_cart', as: 'cart'
  delete '/cart', to: 'cart#remove_from_cart'
  delete '/empty_cart', to: 'cart#empty_cart'
end
