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

    def create
        game = Game.create(game_params)
        if game.valid?
            render json: game, status: :ok
        else
            render json: game.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        game = Game.find_by(id: params[:id])
        if game.update(rating: params[:rating])
            render json: event, status: :ok
        else
          render json: event.errors, status: :unprocessable_entity
        end
    end

    def destroy
        Game.find(params[:id]).destroy
    end

    private

    def game_params
        params.permit(:title, :image, :developer, :publisher, :desc, :tags)
    end

end
