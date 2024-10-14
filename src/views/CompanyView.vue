<template>
  <div class="company-page">    
    <BackgroundComponent
      backgroundImage="../company_bg.png"
      title="ABOUT OUR COMPANY"
      text="We are a clean tech company dedicated to nex-gen SOFC technology."      
      titleColor="white"
      textColor="white"
      titleSize="3rem"
      textSize="1rem"
    />


    <div class="text-section">
    <h2>Our Story</h2>
    <p>ounded in 2023, Serenity Power is at the forefront of clean energy innovation. We specialize in developing advanced Solid Oxide Fuel Cells (SOFCs) aimed to transform the heavy-duty transportation industry by providing innovative, efficient, and environmentally friendly power solutions. Our team of experts is dedicated to creating sustainable energy solutions that meet the growing demand for cleaner, more efficient power. 
    </p>
  </div>
    

  <div class="text-section">
    <h2>Our Vision</h2>
    <p>To lead the global transition to sustainable energy in the transportation sector, reducing reliance on fossil fuels and minimizing environmental impact.
    </p>
  </div>
   

    <div class="values-section">
      <h2>Our Core Values</h2>
      <div class="values-cards">
        <div class="value-card">
          <img src="@/assets/Innovation.png" alt="Impact Icon" class="value-icon" />
          <h3>Innovation</h3>
          <p>Continuously pushing the boundaries of SOFC technology to power the future.
          </p>
        </div>
        <div class="value-card">
          <img src="@/assets/sustainability.png" alt="Drive Icon" class="value-icon" />
          <h3>Sustainability</h3>
          <p> Committed to combating climate change through clean energy solutions.       </p>
        </div>
        <div class="value-card">
          <img src="@/assets/integrity.png" alt="Empathy Icon" class="value-icon" />
          <h3>Integrity</h3>
          <p> Upholding transparency and the highest ethical standards in everything we do.
          </p>
        </div>
        <div class="value-card">
          <img src="@/assets/passion.png" alt="Agility Icon" class="value-icon" />
          <h3>Passion</h3>
          <p>Driven by our mission to create a lasting, positive impact on people and the planet.
          </p>
        </div>
        <div class="value-card">
          <img src="@/assets/truck.png" alt="Agility Icon" class="value-icon" />
          <h3>Collaboration</h3>
          <p>Building strong partnerships to accelerate clean technology advancements.
          </p>
        </div>
        <div class="value-card">
          <img src="@/assets/truck.png" alt="Agility Icon" class="value-icon" />
          <h3>Empowerment</h3>
          <p>Fostering an environment where creativity, inclusivity, and growth thrive.</p>
        </div>
      </div>
    </div>


    <div class="text-section">
    <h2>Why Choose Serenity Power?</h2>
    <p>At Serenity Power, we’re committed to driving innovation and excellence in everything we do. Here’s why you should partner with us:</p>
    <p><span class="highlight">Expertise:</span> Our team comprises experts, researchers, and engineers dedicated to advancing SOFC technology.</p>
    <p><span class="highlight">Sustainability:</span> We prioritize sustainability in our product design, manufacturing processes, and business practices.</p>
    <p><span class="highlight">Customer Focus:</span> We will work closely with our clients to understand their needs and deliver customized solutions that exceed expectations.</p>
    <p><span class="highlight">Proven Technology:</span> Our SOFCs have been rigorously researched and tested to ensure they meet the highest standards of performance and reliability.</p>
</div>

<div class="background-container">
    <img src="@/assets/company_end.png" alt="truck" class="background-image">
    <div class="content-overlay">
      <h2 style="color: white;">Let’s Build a Better Planet</h2></div>
    </div>


  </div>
</template>

<script>
import BackgroundComponent from '@/components/BackgroundComponent.vue';
export default {
  name: 'CompanyView',
  components: {
    BackgroundComponent
  }
};
</script>

<style scoped>

.company-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
            max-width: 800px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            color: #333;
        }

        .text-section h2 {
            color: #005d7a;
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
.background-container {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
  top: 0;
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