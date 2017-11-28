class TranscriptionsController < ApplicationController
  def create
    @transcription = Transcription.new(transcription_params)
    @transcription.sender_id = Wallet.find_by(w_id: @transcription.sender_id).id
    @transcription.recipient_id = Wallet.find_by(w_id: @transcription.recipient_id).id
    if (@transcription.save)
      render json: @transcription, status: 201
    else
      render json: { error: @transcription.errors.full_messages }, status: 401 
    end
  end

  def newest
    @transcription = Transcription.last(5)
    if (@transcription)
      render json: @transcription, status: 201
    else
      render json: { error: @transcription.errors.full_messages }, status: 401 
    end
  end

  private
  
  def transcription_params
    params.require(:transcription).permit(:sender_id, :recipient_id, :amount, :description)
  end
end