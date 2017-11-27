class Users::RegistrationsController < Devise::RegistrationsController
  def create
    @user = User.new(user_params)
    
    if (@user.save)
      @wallet = Wallet.create(w_id: @user.wallet_id, user: @user)
      render json: @user, status: 201
    else
      render json: { errors: @user.errors.full_messages }, status: 401 
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
