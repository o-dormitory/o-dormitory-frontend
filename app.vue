<script setup lang="ts">
import { useCounterStore } from "./stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div class="counter-be">
    <button @click="counterStore.decrement">Decrement</button>
    <b>{{ counterStore.counter }}</b>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<style lang="scss">
.counter-be {
  display: flex;
  flex-direction: row;
}
</style>
