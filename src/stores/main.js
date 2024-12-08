import { defineStore } from "pinia";
import {ref, computed} from 'vue';


export const useMainStore = defineStore('main', () => {
  const isLoading = ref(false);

  return {
    isLoading
  };
});