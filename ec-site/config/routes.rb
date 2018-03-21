Rails.application.routes.draw do
  root 'static_pages#home'
  get '/old', to: 'static_pages#old'
  get '/new', to: 'static_pages#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
