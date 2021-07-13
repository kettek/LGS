<script>
  import Action from './Action.svelte'
  export let workout

</script>

<style>
</style>

<div class="Workout">
  {#each workout.actions as action}
    <Action action={action}></Action>
  {/each}
</div>