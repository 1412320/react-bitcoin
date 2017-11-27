class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :wallet, dependent: :destroy
  validates :auth_token, uniqueness: true
  validates :wallet_id, uniqueness: true
  before_create :create_wallet_id, :create_auth_token

  def create_wallet_id
    begin
      self.wallet_id = SecureRandom.uuid
    end while self.class.exists?(wallet_id: wallet_id)
  end

  def create_auth_token
    begin 
      self.auth_token = SecureRandom.hex(10)
    end while self.class.exists?(auth_token: auth_token)
  end
end
