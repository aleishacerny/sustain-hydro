<template>
  <div>
    <div class="video-container">
      <video autoplay muted loop playsinline class="fullscreen-video">
        <source src="@/assets/test.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <main class="main-content">
      <!-- 你的主要内容 -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden; /* 防止水平滚动 */
}

.video-container {
  position: relative;
  width: 100vw; /* 全视口宽度 */
  height: 100vh; /* 全视口高度 */
  overflow: hidden; /* 确保视频不会溢出 */
}

.fullscreen-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保视频覆盖整个容器 */
  transform: translate(-50%, -50%);
}

.main-content {
  padding-top: 200px; /* 与 header 高度相同 */
}
</style>
