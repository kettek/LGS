export default interface ActionID {
  id: string, // id is a UUID.
}

export interface ActionAnaerobic extends ActionID {
  type: 'anaerobic'
  exercise?: string
  repetitions?: number
  weight?: number
}
export function isActionAnaerobic(action: ActionID): action is ActionAerobic {
  return (action as ActionAnaerobic).type === 'anaerobic'
}

export interface ActionAerobic extends ActionID {
  type: 'aerobic'
  exercise?: string
  distance?: number      // Distance, for obvious things.
  duration?: number      // Duration, such as time taken for a lap.
  repetitions?: number   // Repetitions, for things like box jumps.
  weight?: number        // Weight for things like weighted jogging
}
export function isActionAerobic(action: ActionID): action is ActionAerobic {
  return (action as ActionAerobic).type === 'aerobic'
}

export interface ActionFlexibility extends ActionID {
  type: 'flexibility'
  exercise?: string
  repetitions?: number
  duration?: number
}
export function isActionFlexibility(action: ActionID): action is ActionFlexibility {
  return (action as ActionFlexibility).type === 'flexibility'
}

export interface ActionRest extends ActionID {
  type: 'rest'
  duration?: number
}
export function isActionRest(action: ActionID): action is ActionRest {
  return (action as ActionRest).type === 'rest'
}

export interface ActionGroup extends ActionID {
  type: 'group'
  actions: (ActionAerobic|ActionAnaerobic|ActionFlexibility|ActionRest|ActionGroup)[]
}
export function isActionGroup(action: ActionID): action is ActionGroup {
  return (action as ActionGroup).type === 'group'
}