import {ActionAerobic, ActionAnaerobic, ActionFlexibility, ActionRest, ActionGroup } from './Action'

interface Workout {
  actions: (ActionAerobic|ActionAnaerobic|ActionFlexibility|ActionRest|ActionGroup)[]
}

export default Workout