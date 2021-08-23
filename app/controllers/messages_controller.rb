class MessagesController < ApplicationController
    before_action :set_user, only:[:create]

    def create
        @user.bui       
    end 

    private 
    def set_user
        @user = User.find_by_id(params[:id])
    end 
end
