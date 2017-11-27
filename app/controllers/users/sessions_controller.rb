class Users::SessionsController < Devise::SessionsController
  skip_before_action :authenticate_user!
  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    @user = User.find_by(wallet_id: params[:user][:wallet_id])
    if (@user.valid_password?(params[:user][:password]))
      session[:auth_token] = @user.auth_token
      render json: @user, status: 201
    else
      render json: {errors: @user_session.errors.full_messages}, status: 401
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end
  # If you have extra params to permit, append them to the sanitizer.
end
