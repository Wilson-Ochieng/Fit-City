class WorkoutsController < ApplicationController
    before_action :authorize, :current_user
    before_action :authorize, only: [:show, :create, :update, :destroy]

    # GET /workouts
    def index        
        if session[:user_id]
            workouts = show_workouts
            render json: workouts, include: [:exercise]
        end
    end

    # POST /workouts
    def create
        workout = Workout.new(workout_params)
        workout.user = @current_user
        if workout.valid?
            workout.save
            render json: {workout: workout}, status: :created
        else
            render json: { errors: workout.errors.full_messages }, status: :unauthorized
        end
    end

    # GET /workouts/:id
    def show
        if session[:user_id]
            workout = find_workout
            render json: {workout: workout}
        end
    end

    # PATCH /workouts/:id 
    def update
        workout = Workout.find(params[:id])
        if workout[:user_id] == session[:user_id]
            workout.update(workout_params)
            render json: {workout: workout}, status: :accepted
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    # DELETE /workouts/:id
    def destroy
        if session[:user_id]
            workout = find_workout
            workout.destroy
            head :no_content
        end
    end

    private

    def show_workouts
        @current_user.workouts.order("date DESC")
    end

    def find_workout
        @current_user.workouts.find(params[:id])
    end

    def workout_params
        params.permit(:id, :user_id, :date, :weight, exercise: [:name, :calories, :duration])
    end

    def authorize
        render json: { errors: ['Not authorized'] }, status: :unauthorized unless session.include? :user_id
    end

end
