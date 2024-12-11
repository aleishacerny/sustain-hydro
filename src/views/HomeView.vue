<!-- submit button  color; technology-alignment; logo bigger+link;  email address color; linkedin icon-->
<template>
  <div class="home-page">
    <div class="background-container">
      <img src="@/assets/homepage_bg.png" alt="Background" class="background-image">
      <div class="content-overlay" style="white-space: nowrap;">
        <h1 class="title-text">DRIVING CLEAN</h1>
        <h1 class="title-text">ENERGY SOLUTIONS</h1>
        <p class="subtitle-text" style="font-family:system-ui">with Advanced Solid Oxide Fuel Cells</p>
        
        <!-- Learn More Button -->
        <button class="cta-button" @click="goToOurCompany">Learn More</button>
      </div>
    </div>

    <!-- Other content sections -->
    <div class="text-section">
      <h2>Welcome to Serenity Power</h2>
      <p>At Serenity Power, we are redefining the future of heavy-duty transportation with our groundbreaking Solid Oxide Fuel Cell (SOFC) technology. Our advanced SOFCs are designed to deliver superior efficiency, durability, and fuel flexibility, making them the ideal power solution for heavy-duty transportation. Join us in our mission to create a cleaner, greener world.</p>
    </div>

    <div class="text-section">
      <h2>Our Mission</h2>
      <p>To revolutionize heavy-duty transportation with innovative SOFC technology, reducing emissions and promoting sustainable energy solutions globally.</p>
    </div>

    <div class="video-container">
      <video class="fullscreen-video" autoplay muted loop>
        <source src="@/assets/Serenity Power Promo Video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <main class="main-content"></main>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToOurCompany() {
      this.$router.push({ name: 'Company' });
    },
  },
};
</script>

<style scoped>
/* Import League Spartan font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw; /* 防止超出页面宽度 */
  overflow-x: hidden; /* 隐藏多余内容，防止水平滚动 */
}

.background-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.title-text {
  color: white;
  font-size: 5rem; /* Adjust to your needs */
  font-family: 'League Spartan', sans-serif;
}

.subtitle-text {
  color: white;
  font-size: 1.5rem;
  font-family: sans-serif; /* Replace with a similar sans-serif */
}

.cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #075F7A;
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
  overflow: hidden;
}

.fullscreen-video {
  width: 100%;
  height: 100vh; /* Full height for desktop */
  object-fit: cover;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .video-container {
    width: 100%;
    height: auto;
  }

  .fullscreen-video {
    width: 100vw;
    height: auto;
    max-height: 50vh; /* Limits video height on mobile */
    object-fit: contain; /* Prevents cropping */
  }
}

.main-content {
  padding: 20px;
  width: 100%;
  max-width: 1000px; /* 限制主内容宽度 */
  margin: 0 auto; /* 确保内容居中 */
}

.text-section {
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px; /* 确保文本区域不会超过页面宽度 */
  margin: 0 auto; /* 居中布局 */
  font-family: Arial, sans-serif;
  color: #333;
}

.text-section h2 {
  color: #075F7A;
  font-size: 32px;
}

.text-section p {
  font-size: 18px;
  line-height: 1.6;
  margin: 10px 0;
}

/* 防止所有内容超出页面宽度 */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>