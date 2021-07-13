import Workout from './Workout'

export default class User {
  workouts: Workout[]

  constructor(workouts: Workout[]) {
    this.workouts = workouts
  }
}