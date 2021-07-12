// Just a sample of attempting to plot out the data types and structure
// so that we can connect features and capability to definitions.
// Names of all these can be considered placeholders
//
// Also allows us to determine how much information is data vs logic determined
// IE:
//  having a repeat attribute for workout: 'daily', 'weekly'... 
//  vs 
//  storing new instance of workout on each schedule day
//
// Depending on how much relational vs complete doc storage we use,
// some of these nested objects might be able to be replaced with
// shorter ID types. Depends on how we want to query
// IE:
//  workout stores ID to exercise, rather than the complete exercise information


// Thinking of the information that would nice to have
// when referencing a specific User without storing all their
// information. 
// I'm thinking by including the username we can avoid
// querying the User's information itself in a lot of simple cases.
// Something like having a link to user's profile where the label
// can be their username and the ID can be used for retrieval
interface UserID {
  id: string;
  username: string;
};

interface GroupID {
  id: string;
  name: string;
};

interface Group extends GroupID {
  name: string;
  users: UserID[];
  admins: UserID[]; // for permitting group schedule editing, etc.
  schedules: Schedule[];
};

// Will need to figure out how to only allow
// querying certain fields, so that user can
// define which information is present to others vs themselves
interface User extends UserID {
  height: number;
  weight: number;

  groups: GroupID[];
  goals: Goal[];
  schedule: Schedule;
};

interface Goal {
  startDate: string;
  targetDate: string;
  wasCompleted: boolean;
};

interface WorkoutGoal extends Goal {
  targetWorkout: Workout;
};

interface BodyGoal extends Goal {
  startWeight: number;
  targetWeight: number;
}

type Schedule = {
  datetime: string;
  regimen: Regimen;
}

// I think if we define a set of workouts
// we can encode "pyramids" and "drop sets"
// as ordered workouts
type Regimen = {
  workouts: Workout[];
  creator: UserID;
};

interface ExerciseID {
  id: string;
  name: string;
}

// Allows us to decouple any particular exercise from reps/sets
interface Exercise extends ExerciseID {
  type: ExerciseType;          // maybe rename this one
  description: string;
  targetedAreas: PeoplePart[]; // allow filtering exercises, also might be able to highlight parts of a lil pic of person
  demonstration?: string;      // possibility of internal/external ref to an image/video of the exercise
  creator: UserID;             // if someone wants to view all of a user's created exercises
};

enum ExerciseType {
  CARDIO = "cardio",
  WEIGHT = "weighties",
};

enum PeoplePart {
  ARM = "arm",
  ELBOW = "eblow",
  SHELMDORS = "shelmdors",
};

// A workout(?) can be thought of as a qualified exercise, attaching
// specific numbers to a more general exercise
type Workout = {
  exercise: Exercise;
  repetitions: number;
  sets: number;
  order: number;             // could be inherent to array order, otherwise need some way of defining order

  weight?: number | null;    // some workouts won't need this one
  distance?: number | null;  // meters?
  duration?: number | string; // are we storing # of minutes here or something els?

  creator: UserID;
};

// Depending on how we store data,
// we might want separate listing docs that contain
// whole lists of groups and users
type Groups = GroupID[];
type Users = UserID[];
type Exercises = ExerciseID[];