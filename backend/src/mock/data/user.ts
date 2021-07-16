import { v4 as uuidv4 } from 'uuid';
import User from '../../shared/classes/User';
import { ActionType } from "../../shared/enums/actionType";

// Temporary data for testing.
export let user = new User([
		{
			actions: [
				{
					id: uuidv4(),
					actionType: ActionType.FLEXIBILITY,
					exercise: 'downward doggos'
				},
				{
					id: uuidv4(),
					actionType: ActionType.FLEXIBILITY,
					exercise: 'dophiln'
				},
        // Temporarily removed due to laziness of not wnating to implement group
				// {
				// 	id: uuidv4(),
				// 	actionType: 'group',
				// 	actions: [
				// 		{
				// 			id: uuidv4(),
				// 			type: 'flexibility',
				// 			exercise: 'tbag',
				// 		},
				// 		{
				// 			id: uuidv4(),
				// 			type: 'flexibility',
				// 			exercise: 'sacflip'
				// 		}
				// 	]
				// },
				{
					id: uuidv4(),
					actionType: ActionType.AEROBIC,
					exercise: 'dunno',
					distance: 10, // presume meters?
					duration: 30,
				},
				{
					id: uuidv4(),
					actionType: ActionType.REST,
          exercise: "Play HOTS"
				},
				{
					id: uuidv4(),
					actionType: ActionType.ANAEROBIC,
					exercise: 'dunno again',
					weight: 50, // presume kgs?
				},
				{
					id: uuidv4(),
					actionType: ActionType.EAT,
          exercise: "eatin scroats"
				},
			]
		}
	])