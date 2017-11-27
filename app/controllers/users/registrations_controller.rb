class Users::RegistrationsController < Devise::RegistrationsController
  def create
    @user = User.new(user_params)
    p user_params
    if (@user.save)
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
