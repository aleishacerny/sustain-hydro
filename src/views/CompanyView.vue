<template>
  <div class="company-page">
    <!-- Top Section with Background Image and Text -->
    <div class="background-container">
      <img src="@/assets/background.jpg" alt="Background" class="background-image">
      <div class="background-text">
        <h1>Leadership</h1>
        <p>Get to know the people that make the energy transition happen! We are a diverse, international, and multidisciplinary team with experience ranging from communication to mechanical engineering.
        </p>
      </div>
    </div>

    <!-- Our Values Section -->
    <div class="values-section">
      <h2>Our Values</h2>
      <div class="values-cards">
        <div class="value-card">
          <img src="@/assets/email-icon.png" alt="Impact Icon" class="value-icon" />
          <h3>Impact</h3>
          <p>Take initiative to move the needle, breaking industry paradigms by prioritizing excellent results over process.</p>
        </div>
        <div class="value-card">
          <img src="@/assets/email-icon.png" alt="Drive Icon" class="value-icon" />
          <h3>Drive</h3>
          <p>Have passion and determination for your everyday work. Solve hard problems to achieve Kepler's mission of building Internet in Space.</p>
        </div>
        <div class="value-card">
          <img src="@/assets/email-icon.png" alt="Empathy Icon" class="value-icon" />
          <h3>Empathy</h3>
          <p>Create a foundation of support and trust. Place your personal bias aside to prioritize understanding the diverse perspectives of those you interact with.</p>
        </div>
        <div class="value-card">
          <img src="@/assets/email-icon.png" alt="Agility Icon" class="value-icon" />
          <h3>Agility</h3>
          <p>Adapt for the opportunities tomorrow brings. Focus on rapid cycles of learning to manifest new ideas and make little bets towards achieving Kepler's mission.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyView'
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

.company-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.background-container {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-text {
  text-align: center;
  padding: 20px;
}

.values-section {
  padding: 50px 20px;
  background: #f8f9fa;
}

.values-section h2 {
  text-align: center;
  margin-bottom:25px;
}

.values-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.value-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 5px;
  width: 22%;
  text-align: center;
  position: flex;
}

.value-card img.value-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
}

.value-card h3 {
  margin-bottom: 15px;
  color: #4FC6E6;
}

.value-card p {
  margin-bottom: 10px;
  color: #666;
}

@media (max-width: 768px) {
  .values-cards {
    flex-direction: column;
    align-items: center;
  }

  .value-card {
    width: 80%;
  }
}
</style>