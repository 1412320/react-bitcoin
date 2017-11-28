class Wallet < ApplicationRecord
  validates_uniqueness_of :w_id
  belongs_to :user, primary_key: 'id'
  has_many :sent_transcription, class_name: 'Transcription', foreign_key: 'sender_id'
  has_many :received_transcription, class_name: 'Transcription', foreign_key: 'recipient_id'
end
