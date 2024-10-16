<template>
  <div class="homepage">
    <div class="background-container">
    <img src="@/assets/homepage_bg.png" alt="Background" class="background-image">
    <div class="content-overlay" style="white-space: nowrap;">
      <h1 style="color: white; font-size: 4rem; font-family: 'League Spartan', sans-serif;">DRIVING CLEAN</h1>
      <h1 style="color: white; font-size: 4rem; font-family: 'League Spartan', sans-serif;">ENERGY SOLUTIONS </h1>
    
      <p style="color: white; font-size: 3rem; font-family: 'Canva Sans'"> with Advanced Solid Oxide Fuel Cells</p>
    </div>
  </div>
   
   
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
  top: 40%;
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
.text-section {
          
          padding: 20px;
          border-radius: 10px;
          max-width: 1000px;
          margin: 0 auto;
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
    
      .text-section .highlight {
          font-weight: bold;
          color: #075F7A;
      }
</style>
