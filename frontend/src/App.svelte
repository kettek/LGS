<script lang="ts">
	import 'ress/ress.css'
	import { v4 as uuidv4 } from 'uuid'
	import Workout from './components/Workout.svelte'
	import User from './models/User'

	// Temporary data for testing.
	let user = new User([
		{
			actions: [
				{
					id: uuidv4(),
					type: 'flexibility',
					exercise: 'downward doggos'
				},
				{
					id: uuidv4(),
					type: 'flexibility',
					exercise: 'dophiln'
				},
				{
					id: uuidv4(),
					type: 'group',
					actions: [
						{
							id: uuidv4(),
							type: 'flexibility',
							exercise: 'tbag',
						},
						{
							id: uuidv4(),
							type: 'flexibility',
							exercise: 'sacflip'
						}
					]
				},
				{
					id: uuidv4(),
					type: 'aerobic',
					exercise: 'dunno',
					distance: 10, // presume meters?
					duration: 30,
				},
				{
					id: uuidv4(),
					type: 'rest',
				},
				{
					id: uuidv4(),
					type: 'anaerobic',
					exercise: 'dunno again',
					weight: 50, // presume kgs?
				},
				{
					id: uuidv4(),
					type: 'rest',
				},
			]
		}
	])
</script>

<main>
	User
	{#each user.workouts as workout }
		<Workout workout={workout}></Workout>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>