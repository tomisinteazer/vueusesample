<template>
  <section class="max-w-full">

    <Sidebar />


    <div class="custom-cursor-ii " :style="`transform: translate3d(${x - 17}px, ${y - 17}px, ${0}px)`">
    </div>

    <RouterView />






  </section>

</template>


<script setup>
import Sidebar from './components/Sidebar.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};



// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage(
  'my-storage',
  {
    name: 'Apple',
    color: 'red',
  },
)
</script>





<style>
.custom-cursor-ii {

  height: 35px;
  transition: all .1s ease-out;
  width: 35px;
  filter: invert(1);

}



.custom-cursor,
.custom-cursor-ii {
  border-radius: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  position: absolute;
  z-index: 10000000;
}
</style>