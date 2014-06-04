
class StocksController < ApplicationController
  respond_to :json

  def index
    respond_with Stock.all
  end
end