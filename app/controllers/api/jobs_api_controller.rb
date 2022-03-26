class Api::JobsApiController < ApplicationController

  def active 
    @jobs = Job.where(status: "ACTIVE")
    render json: @jobs
  end

end