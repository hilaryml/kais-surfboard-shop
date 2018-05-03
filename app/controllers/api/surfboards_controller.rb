class Api::SurfboardsController < ApplicationController

  def index
    render json: Surfboard.order(:skill_level).to_json(include: [:categories])
  end

end
