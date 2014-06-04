class StocksController < ApplicationController
  respond_to :json

  def index
    respond_with Stock.all
  end

  def destroy
   respond_with Stock.destroy(params[:id])
  end
end