<template>
  <main @scroll="onScroll">
    <topNavigationBar />
    <rotatingImage />
  </main>
</template>

<script setup lang="ts">
import topNavigationBar from '@/components/topNavigationBar/index.vue';
import rotatingImage from '@/components/rotatingImage/index.vue';

let scrollTimeout: any = null;

let lastScrollTop = 0; // 上次滚动的位置
const scrollToNextPage = () => {
  window.scrollBy({
    top: window.innerHeight, // 滚动到下一页（视口的高度）
    behavior: 'smooth', // 平滑滚动
  });
}

const scrollToPreviousPage = () => {
  window.scrollBy({
    top: -window.innerHeight, // 滚动到上一页（视口的高度）
    behavior: 'smooth', // 平滑滚动
  });
}

const onScroll = (e: Event) => {
  const target = e.target as HTMLElement;
  const currentScrollTop = target.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // 向下滚动
    console.log('Scrolling down, go to next page...');
    scrollToNextPage();  // 跳转到下一页
  } else {
    // 向上滚动
    console.log('Scrolling up, go to previous page...');
    scrollToPreviousPage();  // 跳转到上一页
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

</script>

<style scoped>
main {
  height: 100vh;
  /* 或者设置为固定的高度 */
  overflow-y: auto;
  /* 确保可以滚动 */
}
</style>
