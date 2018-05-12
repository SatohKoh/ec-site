Rails.application.routes.draw do
  resources :products
  root 'static_pages#home'
  get '/brand', to: 'static_pages#brand'
  get '/about', to: 'static_pages#about'
  get '/contact', to: 'static_pages#contact'
  get '/old', to: 'static_pages#old'
  get '/new', to: 'static_pages#new'
  get '/genmaiYukihotaka', to: 'static_pages#genmaiYukihotaka'
  get '/hakumaiYukihotaka', to: 'static_pages#hakumaiYukihotaka'
  get '/hakumaiChugoku', to: 'static_pages#hakumaiChugoku'
  get '/hakumaiShimaneNita', to: 'static_pages#hakumaiShimaneNita'
  get '/hakumaiShimaneHonki', to: 'static_pages#hakumaiShimaneHonki'
  get '/hakumaiTottoriKohu', to: 'static_pages#hakumaiTottoriKohu'
  get '/privacy', to: 'static_pages#privacy'

  resources :products do
    post :pay, on: :member
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
