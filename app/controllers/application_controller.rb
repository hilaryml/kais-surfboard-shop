class ApplicationController < ActionController::API

  def index
    render json: Surfboard.all
  end

end
