class JobsController < ApplicationController

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
  end

  def create
    @job = Job.new(job_params)
    
    if @job.save
      render json: @job
    else
      render json: @job.errors.full_messages
    end
  end

  def update
    @job = Job.find(params[:id])

    if @job.update(job_params)
      render json: @job
    else
      render json: @job.errors.full_messages
    end
  end

  def destroy
    @job = Job.find(params[:id])

    if @job.destroy
      render json: @job 
    else
      render json: @job.errors.full_messages
    end
  end

  private

  def job_params
    params.require(:job).permit(:role, :company, :link, :pay)
  end

end