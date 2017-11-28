class Transcription < ApplicationRecord
  belongs_to :sender, class_name: 'Wallet', foreign_key: 'sender_id'
  belongs_to :recipient, class_name: 'Wallet', foreign_key: 'recipient_id'
end
