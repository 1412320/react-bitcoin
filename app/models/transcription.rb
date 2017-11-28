class Transcription < ApplicationRecord
  belongs_to :sender, class_name: 'Wallet', foreign_key: 'sender_id'
  belongs_to :recipient, class_name: 'Wallet', foreign_key: 'recipient_id'
  after_create :tranfer

  def tranfer
    self.sender.update(balance: self.sender.balance - self.amount)
    self.recipient.update(balance: self.recipient.balance + self.amount)
  end
end
