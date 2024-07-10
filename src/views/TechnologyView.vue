<template>
  <div class="technologyPage">
    <div class="background-container">
      <img src="@/assets/background.jpg" alt="Background" class="background-image">
    </div>
    <div class="video-container">
      <video class="fullscreen-video" autoplay muted loop>
        <source src="@/assets/technologyVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TechnologyView',
};
</script>
<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

.technologyPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.background-container {
  position: relative;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

h1, p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 4rem;
}

p {
  font-size: 1.5rem;
}

.cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #0056b3;
}

.video-container {
  width: 100vw;
  height: auto;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  padding: 20px;
  width: 100%;
}
</style>
