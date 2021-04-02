Rails.application.routes.draw do
  devise_for :users
  # resources :users,only: [:show,:create]
  resources :categories
  resources :recipes
  resources :ingredients
  resources :sessions

  root to: "recipes#index"
end
