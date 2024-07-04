import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', () => {
  const counter = ref(0);

  const increment = () => counter.value++;
  const decrement = () => counter.value--;

  return { counter, increment, decrement };
});
