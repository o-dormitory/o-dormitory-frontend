<script setup lang="ts">
import { useCounterStore } from '../../stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="counter-be">
    <Button
      icon="pi pi-minus"
      @click="counterStore.decrement"
    />
    <b>{{ counterStore.counter }}</b>
    <Button
      icon="pi pi-plus"
      @click="counterStore.increment"
    />
  </div>
</template>

<style lang="scss" scoped>
.counter-be {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
