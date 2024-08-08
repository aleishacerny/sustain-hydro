<template>
  <div class="technologyPage">
    <BackgroundComponent
      backgroundImage="background.jpg"
      title="We make"
      text="Technology for a greener future"
      titleColor="white"
      textColor="white"
      titleSize="3rem"
      textSize="1rem"
    />
    
    <!-- Content section -->
    <div class="content-container">
      <div class="video-container">
        <video class="technology-video" autoplay muted loop>
          <source src="@/assets/tech01.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="description-container">
        <h2>Two technological advancements engineered for transportation</h2>
        <p>Our patented SOFC technology is fuel flexible and eliminates the need for fuel processing equipment and a continuous pure water supply that is akin to traditional SOFC technology. This means our stacks are more compact and lighter enabling its use onboard a truck. 

        Our cell configuration and materials also enable rapid start-up times and operation meaning that the truck stack or engine can be turned on and off very quickly.</p>
      </div>
    </div>
    
    <div class="content-container">
      <div class="description-container">
        <h2>SOFCs Reimagined Onboard a Truck</h2>
        <p>The fuel cell system encompasses the stack/engine, the fuel tanks and an electric motor. As our fuel cells are fuel flexible, natural gas, green methane or hydrogen can be used to refill the tanks and fuel the stack. The stack feeds oxygen (from air) and fuel to generate electricity to the electric motor which propels the vehicle forward. </p>
      </div>
      <div class="video-container">
        <video class="technology-video" autoplay muted loop>
          <source src="@/assets/tech02.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <!-- Grid section -->
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
  </div>
</template>

<script>
import BackgroundComponent from '@/components/BackgroundComponent.vue';

export default {
  name: 'technologyView',
  components: {
    BackgroundComponent
  },
  data() {
    return {
      gridItems: [
        {
          title: 'Proven Flight Heritage',
          text: 'With patented technology tested and deployed on 23 satellites in orbit, our products have proven flight heritage for our customers.',
          image: require('@/assets/background.jpg'),
        },
        {
          title: 'Proven Optical Technology',
          text: 'Our SDA-compatible optical constellation provides smarter solutions to global gaps in space communications.',
          image: require('@/assets/background.jpg'),
        },
        {
          title: 'Priority Spectrum Holding',
          text: 'Our services offer a complete solution, granting operators access to Kepler’s regulatory filings, and allowing our customers to focus on the mission.',
          image: require('@/assets/background.jpg'),
        },
        {
          title: 'Full Lifecycle Satellite Operations',
          text: 'We are proud to be among the few commercial space companies that operate with vertically integrated production capabilities.',
          image: require('@/assets/background.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>

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
  padding-left: 40px; /* Add space between video and text */
  padding-right: 40px;
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
  border-radius: 10px;
}
</style>
