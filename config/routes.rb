Rails.application.routes.draw do
  root 'wallets#index'
  devise_for :users, controllers: { 
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :wallets, only: [:show]

end
