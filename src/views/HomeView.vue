<template>
  <div class="homepage">
    <div class="background-container">
    <img src="@/assets/homepage_bg.png" alt="Background" class="background-image">
    <div class="content-overlay" style="white-space: nowrap;">
      <h1 style="color: white; font-size: 4rem; font-family: 'League Spartan', sans-serif;">DRIVING CLEAN</h1>
      <h1 style="color: white; font-size: 4rem; font-family: 'League Spartan', sans-serif;">ENERGY SOLUTIONS </h1>
    
      <p style="color: white; font-size: 2rem; font-family: 'Canva Sans'"> with Advanced Solid Oxide Fuel Cells</p>
    </div>
  </div>
   
    <h2>Welcome to Serenity Power</h2>
    <div class = "content-container">
    <p>At Serenity Power, we are redefining the future of heavy-duty transportation with our groundbreaking Solid Oxide Fuel Cell (SOFC) technology. Our advanced SOFCs are designed to deliver superior efficiency, durability, and fuel flexibility, making them the ideal power solution for heavy-duty transportation. Join us in our mission to create a cleaner, greener world.
    </p>
    </div>

    <h2>Our Mission</h2>
    <div class = "content-container">
    <p>To revolutionize heavy-duty transportation with innovative SOFC technology, reducing emissions and promoting sustainable energy solutions globally.</p>
    </div>

    <div class="video-container">
      <video class="fullscreen-video" autoplay muted loop>
        <source src="@/assets/Serenity Power Promo Video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <main class="main-content">
     

    </main>
  </div>
</template>

<script>


export default {
  name: 'HomePage',

};
</script>

<style scoped>

.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.background-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0; /* Ensure it sticks to the top */
  left: 0;
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
.content-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  margin: 30px 0;
}
</style>
