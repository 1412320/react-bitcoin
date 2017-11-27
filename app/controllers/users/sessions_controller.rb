class Users::SessionsController < Devise::SessionsController
  def create
    @user = User.find_by(wallet_id: params[:user][:wallet_id])
    if (@user.valid_password?(params[:user][:password]))
      render json: @user, status: 201
    else
      render json: {errors: @user_session.errors.full_messages}, status: 401
    end
  end

end
