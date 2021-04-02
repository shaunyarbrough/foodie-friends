class UsersController < ApplicationController

  def signup
  end

  def show
  end

  def find
    @user = User.find_by(id: params[:id])
  end
end
