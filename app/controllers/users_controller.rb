class UsersController < ApplicationController
  before_action :find_user, only: [:index,:show]
  def signup
  end

  def show
  end

  def find
    @user = User.find_by(id: params[:id])
  end
end
