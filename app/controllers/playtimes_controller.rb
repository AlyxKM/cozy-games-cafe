class PlaytimesController < ApplicationController

    def index
        playlist = Playtime.all
        render json: playlist
    end

    def show
        playlist = current_user.playtimes.find_by(id: params[:user_id])
        if playlist
            render json: playlist
            else
            render json: {error: "Playlist not found"}, status: :not_found
        end
    end

    def create
        playlist = current_user.playtimes.create(playlist_params)
        if playlist.valid?
            render json: playlist, status: :ok
        else
            render json: playlist.errors.full_messages, status: :unprocessable_entity
        end
    end

    
    def destroy
        Playtime.find(params[:id]).destroy
    end

    private

    def playlist_params
        params.permit(:game_id)
    end
end
