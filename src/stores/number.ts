import { defineStore } from "pinia";

export const useNumberStore = defineStore("number", {
  state: () => ({
    numbers: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  }),
});