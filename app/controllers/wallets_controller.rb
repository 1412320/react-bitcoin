class WalletsController < ApplicationController
  def index
  end

  def show
    @user = User.find_by(auth_token: params[:id])
    @wallet = @user.wallet
    if @wallet
      render json: @wallet, status: 200
    else
      render json: { error: @wallet.errors.full_messages }, status: 401
    end
  end
end
