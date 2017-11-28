Rails.application.routes.draw do
  root 'wallets#index'
  devise_for :users, controllers: { 
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  resources :wallets, only: [:show]
  resources :transcriptions, only: [:create]
  get '/transcriptions/newest', to: 'transcriptions#newest'
  get '/transcriptions/all', to: 'transcriptions#all'
end
