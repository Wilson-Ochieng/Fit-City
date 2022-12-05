# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
    User.create(username: Faker::Name.first_name, password_digest: Faker::Internet.password)
end

5.times do
    Workout.create(date: Faker::Date.in_date_period, weight: Faker::Number.number(digits: 2), user_id: Faker::Number.between(from: 1, to: 5))
end

5.times do
    Exercise.create(name: Faker::Games::Pokemon.name, calories: Faker::Number.number(digits: 4), duration: Faker::Number.number(digits: 3).minutes, user_id:Faker::Number.between(from: 1, to: 5), workout_id: Faker::Number.between(from: 1, to: 5))
end