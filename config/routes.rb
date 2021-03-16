Rails.application.routes.draw do
  resources :users
  resources :categories
  resources :recipes
  resources :ingredients
  resources :sessions
  post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
