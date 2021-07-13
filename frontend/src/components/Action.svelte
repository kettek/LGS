<script>
  import { isActionAnaerobic, isActionAerobic, isActionFlexibility, isActionRest, isActionGroup } from '../models/Action'

  export let action
</script>

<div class="Action -{action.type}">
  {#if isActionAerobic(action)}
    <div>aerobic</div>
  {:else if isActionAnaerobic(action)}
    <div>anaerobic</div>
  {:else if isActionFlexibility(action)}
    <div>flexibility</div>
  {:else if isActionRest(action)}
    <div>rest</div>
  {:else if isActionGroup(action)}
    <div>group
      {#each action.actions as action}
        <svelte:self action={action}/>
      {/each}
    </div>
  {/if}
</div>

<style>
  .Action.-anaerobic {
    background: red;
  }
  .Action.-aerobic {
    background: blue;
  }
  .Action.-flexibility {
    background: yellow;
  }
  .Action.-rest {
    background: green;
  }
  .Action.-group {
    background: pink;
    padding: .5em;
  }
</style>

