<template>
  <div class="technologyPage">
    <BackgroundComponent
      backgroundImage="tech_bg.jpg"
      title="TECHNOLOGY"
      text="Learn about Serenity Power’s innovative Solid Oxide Fuel Cell technology. "
      titleColor="white"
      textColor="white"
      titleSize="3rem"
      textSize="1.5rem"
    />
    
    <!-- Content section -->


    <!-- Grid section -->
    <div class="content-container">
      <div class="description-container">
     <h2 >What Are Solid Oxide Fuel Cells?</h2>
     <p>SOFCs are high-efficiency electrochemical devices that convert fuel into clean electricity. 
They operate at high temperatures, using a solid ceramic electrolyte to transport oxygen ions from the air to the fuel, typically hydrogen or natural gas. This reaction produces electricity, water, and heat without combustion, resulting in lower emissions.
</p>
     <img src="@/assets/pitch.png" alt="truck" class="description-image">
      </div>
      </div>

     <h2 >How Are We Different?</h2>
     <div class="content-grid">
      <div class="grid-item" v-for="(item, index) in gridItems" :key="index">
        <div class="item-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
        <div class="item-image">
          <img :src="item.image" :alt="item.title"/>
        </div>
      </div>
    </div>
     <!-- <p>Our advanced SOFCs represent a significant leap forward compared to conventional technologies, unlocking new applications for SOFCs in transportation and portable power.</p>
     <img src="@/assets/how_different_img.png" alt="truck" class="description-image"> -->

     
    

    <div class="content-container">
      <div class="video-container">
        <video class="technology-video" autoplay muted loop>
          <source src="@/assets/tech01.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div class="description-container">
        <h2>Engineered for Transportation</h2>
        <p> Our patented SOFC technology is fuel-flexible and eliminates the need for bulky fuel processing and a pure water supply required by traditional SOFCs. This makes our stacks more compact and lighter, ideal for onboard truck use. Additionally, our cell design and materials enable rapid start-up, allowing for quick engine on/off operation.
        </p>
      </div>
    </div>
    
    <div class="content-container">
      <div class="description-container">
        <h2>SOFC Integration in Heavy Mobility</h2>
        <p>Heavy-duty transportation, including trucks, buses, and ships, are a major contributor to greenhouse gas emissions. At Serenity Power, we believe that our advanced SOFC technology can revolutionize this sector by providing clean, efficient, and reliable power solutions.        </p>
      </div>
      <div class="video-container">
        <video class="technology-video" autoplay muted loop>
          <source src="@/assets/tech02.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="content-container">
      <div class="description-container">
        <h2>Driving the Future of Transportation</h2>
        <img src="@/assets/truck.png" alt="truck"  class="description-image">
        <p>
          The fuel cell system encompasses the engine, the fuel tanks and an electric motor. As our fuel cells are fuel flexible, natural gas, green methane or hydrogen can be used to refill the tanks and fuel the stack. Oxygen from air and fuel are fed to the fuel cell engine, which uses it to make electricity. The electricity is then used by the electric motor to propel the vehicle forward.</p>
      </div>
    </div>

    <h2>Benefits of Serenity Power Technology</h2>
    <div class="content-container">
    <div class="description-container">
    <div class="text-section">
      <div class="text-block">
        <img src="@/assets/1.png" alt="truck" class="icon-img">
        <h3>Quiet </h3>
        <p>Experience a peaceful ride with our noise-free operation, eliminating cabin noise for a more comfortable driving experience.
        </p>
      </div>
      <div class="text-block">
        <img src="@/assets/2.png" alt="truck" class="icon-img">
        <h3>Sustainable</h3>
        <p>Achieve zero emissions when paired with the right fuel source, contributing to a cleaner, greener future.</p>
      </div>
      <div class="text-block">
        <img src="@/assets/3.png" alt="truck" class="icon-img">
        <h3>Customizable
        </h3>
        <p>Adaptable power systems designed to meet your specific energy needs, ensuring optimal performance for your application.
        </p>
      </div>
    </div>
    </div>
      <div class="video-container">
        <img src="@/assets/tech-display.jpg" alt="truck" class="process-img">
      </div>
    </div>

  
     <img src="@/assets/benefits.png" alt="truck" class="description-image">
     

   
    <div class="background-container">
    <img src="@/assets/future_applications_img.png" alt="Background" class="background-image">
    <div class="content-overlay">
      <h1 style="color: white; font-family: Arial, sans-serif;">Future </h1>
      <h1 style="color: white; font-family: Arial, sans-serif;">Applications</h1>
    </div>
  </div>

  <div class="text-section">
    <p>Solid Oxide Fuel Cells are a versatile and powerful technology capable of transforming numerous high-emission industries. At Serenity Power, while we are initially focusing on revolutionizing the heavy-duty transportation sector, our vision extends far beyond. We are committed to leveraging our advanced technology to drive sustainable change across various sectors:
    </p>
    </div>

    <div class="text-img-container">
      <div class="text-section">
        <h2>Power Generation</h2>
        <p>Our SOFC technology provides a sustainable, high-efficiency alternative to fossil fuels. Ideal for residential, commercial, and industrial power generation, it reduces emissions and supports clean energy solutions for both off-grid and urban locations.
    Because our SOFC technology is noise-free and air pollution-free, it can be used in densely-populated areas, where the by-product heat can also be used for space heating, hot water, or absorption chillers, bringing the full system efficiency above 90% for combined heat and power (CHP), or 60% for electricity alone.
    </p>
    </div>
    <img src="@/assets/power_generation_img.png" alt="truck" class="content-image">
    </div>

   

    <div class="text-img-container">
    <div class="text-section">
    <h2>Energy Storage</h2>
    <p>Our advanced SOFCs can operate as Solid Oxide Electrolysis Cells (SOECs), seamlessly integrating into energy storage systems. This enables efficient storage of excess renewable energy for use during low generation periods, enhancing grid stability and reliability.
    </p>
    </div>
    <img src="@/assets/energy_storage.png" alt="truck" class="content-image">
  </div>

  <div class="text-img-container">
    <div class="text-section">
    <h2>Syngas & Hydrogen Production</h2>
    <p>Our SOECs efficiently produce hydrogen and syngas frcom various fuel sources, including natural gas, biogas, and green methane. This technology supports the hydrogen economy and fosters innovations in clean fuel production and energy storage.
    </p>
    </div>
    <img src="@/assets/syngas_img.png" alt="truck" class="content-image">
  </div>

  


    <div class="background-container">
    <img src="@/assets/technology_end.png" alt="truck" class="background-image">
    <div class="content-overlay" >
      <h2 style="color: white; font-family: Arial, sans-serif; font-size: 2rem; text-align: center;">BE PART OF THE </h2>
      <h2 style="color: white; font-family: Arial, sans-serif; font-size: 2rem; text-align: center;">CLEAN ENERGY TRANSITION</h2>
      <button class="cta-button" @click="goToContact">INQUIRE NOW</button>
      </div>
    </div>
   
  </div>

</template>

<script>
import BackgroundComponent from '@/components/BackgroundComponent.vue';

export default {
  name: 'technologyView',
  components: {
    BackgroundComponent
  },
  methods: {
    goToContact() {
      this.$router.push({ name: 'ContactUs' }); // Assumes that 'OurCompany' is the route name
    },
  },
  data() {
    return {
      gridItems: [
        {
          title: 'Higher Efficiency:',
          text: 'Our SOFCs convert more fuel into electricity with less waste heat, delivering lower operational costs and a reduced environmental footprint compared to low-temperature fuel cells.',
          image: require('@/assets/higher_efficiency_icon.png'),
        },
        {
          title: 'Fuel Flexibility',
          text: 'Compatible with hydrogen, natural gas, and green methane, our technology offers a versatile solution for transportation without relying solely on the hydrogen economy.',
          image: require('@/assets/fuel_flexibility_icon.png'),
        },
        {
          title: 'Rapid Start-Up',
          text: 'Our SOFCs feature faster start-up and shut-down times, ideal for applications requiring frequent cycling, such as heavy-duty transportation.',
          image: require('@/assets/rapid_startup_icon.png'),
        },
        {
          title: 'Compact Design',
          text: 'By eliminating fuel processing equipment, our SOFCs are more compact and lightweight, allowing seamless integration into vehicles without sacrificing power or efficiency.',
          image: require('@/assets/compact_design_icon.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

.technologyPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}


h1, p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3rem; /* Adjust font size as needed */
}


h2 {
  font-size: 2rem; /* Adjust font size as needed */
  margin-bottom: 20px;
}

p {
  font-size: 1rem; /* Adjust font size as needed */
  line-height: 1.5;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
  margin: 30px 0;
}

.video-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.technology-video {
  width: 100%;
  height: auto;
  max-width: 500px; /* Adjust max width as needed */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.description-container {
  flex: 1;
  padding-left: 30px; /* Add space between video and text */
  padding-right: 30px;

}

.description-container h2 {
      color: #005d7a;
  }

  .description-container p{
      font-family:'Canva Sans';
  }

.process-img {
  width: 500px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: contain; /* 图片等比例缩小并显示全图 */
}

.text-split-img {
  width: 150vh;
  height: 70vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* 图片等比例缩小并显示全图 */
}

.icon-img {
    width: 60px;  /* 固定宽度 */
    height: auto;  /* 高度自适应 */
    align-items: center;
    justify-content: center;
    padding-left: 50px;
}

.main-content {
  padding: 20px;
  width: 100%;
}

.content-grid {
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
}

.grid-item {
  display: flex;
  align-items: stretch;
  justify-content: space-between; /* Ensure items are spaced between */
  padding: 20px;
  background: rgba(255, 255, 255, 0.8); /* Set a white background with opacity */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
}

.item-text h3 {
  margin: 0;
  font-size: 1.5rem;
}

.item-text p {
  margin: 0;
  font-size: 1rem;
}

.item-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers its container */
  border-radius: 5px;
}

.background-container {
  width: 150vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
}



.background-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}




.description-image {
  width: 100%;
  height: 100%;

}

.content-overlay {
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.content-overlay h2 {
      font-size: 30px;
      color: white;
      line-height: 1.6;
      margin: 10px 0;
      font-family: Arial, Helvetica, sans-serif;
  }

.content-overlay p {
      font-size: 20px;
      color: white;
      line-height: 1.6;
      margin: 10px 0;
      font-family: Arial, Helvetica, sans-serif;
  }

.content-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-section {
    padding: 10px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #333;
}

.text-section h2 {
    color: #005d7a;
    font-size: 32px;
    text-align: center;
}

.text-img-container {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-wrap: wrap; /* 在必要时允许内容换行 */
  text-align: left; /* 保证文本内容左对齐 */
  gap: 5px; /* 设置文本部分和图片之间的间距 */
  height: 100%; /* 让容器高度占满父级（如果有特定高度要求） */
  margin-bottom: 10px;
}

.content-image {
  width: 100vh; /* 设置固定宽度 */
  height: 60vh; /* 设置固定高度 */
  object-fit: cover; /* 保持图片比例，填充容器，裁剪超出部分 */
  border-radius: 8px; /* 可选：为图片添加圆角 */
}



.text-section p {
    font-size: 18px;
    line-height: 1.6;
    margin: 10px 0;

}

.cta-button {
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #075F7A;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.text-section .highlight {
    font-weight: bold;
    color: #075F7A;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: left; /* 水平居中对齐 */
  text-align: left; /* 文本居中对齐 */
}

.text-block h3 {
  position: flex; /* 使 h3 脱离文档流 */
  left: 80%; /* 水平居中 */
  align-items: center; /* 水平居中对齐 */
  transform: translate(15%, 30%); /* 调整到真正的中心点 */
  margin: 0; /* 去除默认的外边距 */
}

h2,h3{
  color:#005d7a;
}

p {
  font-family: 'Canva Sans', Arial, sans-serif;
  }

</style>