# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  content    :text
#  read       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord
	belongs_to :user, class_name: "user", foreign_key: "user_id"
end
