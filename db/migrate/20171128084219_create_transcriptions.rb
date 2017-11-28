class CreateTranscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :transcriptions do |t|
      t.string :sender_id
      t.string :recipient_id
      t.text :description
      t.float :amount

      t.timestamps
    end
  end
end
