class TranscriptionsController < ApplicationController
  def send
    @transcription = Transcription.new(transcription_params)
  end

  private
  
  def transcription_params
    params.require(:transcription).permit(:sender_id, :recipient_id, :amount, :description)
  end
end