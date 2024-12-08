
import {
  ref,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
} from "vue";

import {throttle} from 'underscore'

export function useScroll() {
  const scrollTop = ref(document.documentElement.scrollTop);
  const scrollHeight = ref(document.documentElement.scrollHeight);
  const clientHeight = ref(document.documentElement.clientHeight);

  const isBottom = ref(false);

  const scrollHandler = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    clientHeight.value = document.documentElement.clientHeight;

    if (scrollTop.value + clientHeight.value + 20 >= scrollHeight.value) {
      isBottom.value = true;
    }
    else {
      isBottom.value = false;
    }

    // console.log("滚动");
  }, 100);

  onMounted(() => {
    window.addEventListener('scroll', scrollHandler); 

  });

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
  });

  onActivated(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  onDeactivated(() => {
    window.removeEventListener("scroll", scrollHandler);
  });

  return {
    scrollTop,
    scrollHeight,
    clientHeight,
    isBottom
  }
}