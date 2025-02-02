import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref(false);

  const toggleSidebar = () => {
    console.log('hit');
    isOpen.value = !isOpen.value;
  };

  return { isOpen, toggleSidebar };
});