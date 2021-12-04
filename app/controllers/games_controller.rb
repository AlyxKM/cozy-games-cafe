class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end

    def show
        game = Game.find_by(id: params[:id])
        if game
        render json: game
        else
        render json: {error: "Game not found"}, status: :not_found
        end
    end

end
