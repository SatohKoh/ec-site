Rails.application.routes.draw do
  resources :products
  root 'static_pages#home'
  get '/old', to: 'static_pages#old'
  get '/new', to: 'static_pages#new'
  get '/hokkaido', to: 'static_pages#hokkaido'
  get 'products/1'

  resources :products do
    post :pay, on: :member
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
