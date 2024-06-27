<template>
  <div class="video-container">
    <video controls>
      <source src="@/assets/test.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.video-container {
  display: flex;
  justify-content: center;  /*水平方向居中 */
  align-items: center;  /* 垂直方向居中 */
  height: 100vh;  /* 使容器高度占满视窗 */
  background-color: #f5f5f5;  /* 可选：添加背景色 */
}

video {
  max-width: 100%;  /* 确保视频宽度不超过容器宽度 */
  max-height: 80vh;  /* 确保视频高度不超过容器高度 */
}
</style>



