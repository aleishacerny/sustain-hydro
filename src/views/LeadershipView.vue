<template>
  <div class="team-page">
    <BackgroundComponent backgroundImage="../leadership_bg.png" title="LEADERSHIP"
      text="Get to know the people that are making the energy transition happen!"
      titleColor="white" textColor="white" titleSize="3rem" textSize="1.5rem" />
      <div class="description-container">
      <h2>At Serenity Power, our leadership team brings together a wealth of experience and expertise in fuel cell technology, engineering, and sustainable energy solutions.</h2>
      </div>

    <div class="team-container">
      <div class="team-card" v-for="member in teamMembers" :key="member.id">
        <div class="card-inner" :class="{ 'is-flipped': member.isFlipped }">
          <div class="card-front">
            <img :src="require(`@/assets/${member.photo}`)" alt="Photo" class="member-photo"
              @mouseover="flipCard(member)" @mouseleave="unflipCard(member)">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <a :href="member.linkedin" target="_blank" class="linkedin-link">
              <img src="@/assets/linkedin_profile.png" alt="linkedin" class="linkedin-link">
            </a>
          </div>
          <div class="card-back">
            <h3>{{ member.name }}</h3>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundComponent from '@/components/BackgroundComponent.vue';

export default {
  name: 'LeadershipView',
  components: {
    BackgroundComponent
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Aleisha R. Cerny',
          position: 'Chief Executive Officer',
          photo: 'Aleisha.jpg',
          linkedin: 'https://www.linkedin.com/in/aleisha-reese-cerny/',
          bio: 'A recent graduate with a Master’s degree in Materials Engineering from the University of Toronto, Aleisha has long been passionate about tangible solutions combating climate change. As a visionary leader with a strong background in engineering, clean energy technologies, and business, she is excited to lead Serenity Power in revolutionizing the heavy-duty transportation industry and driving the adoption of sustainable energy solutions.',
          isFlipped: false
        },
        {
          id: 2,
          name: 'Yvonne Liu',
          position: 'Chief Operating Officer',
          photo: 'Yvonne Liu.jpg',
          linkedin: 'https://www.linkedin.com/in/yvonne-liu-aa28b2158/',
          bio: 'Yvonne earned a Master’s degree in Mechanical Engineering from the University of Toronto, gaining a strong understanding of sustainable energy through hands-on fuel cell research. She is eager to combine her technical expertise with strategic business management to drive Serenity Power’s mission of clean energy transition and foster a culture of innovation and excellence. ',
          isFlipped: false
        },
        {
          id: 3,
          name: 'Dr. Olivera Kesler',
          position: 'Chief Technology Officer',
          photo: 'Olivera Kesler.jpg',
          linkedin: 'https://www.linkedin.com/in/olivera-kesler-566797281/',
          bio: 'Dr. Olivera Kesler is the CTO of Serenity Power, bringing over 25 years of expertise in Solid Oxide Fuel Cell technology. As a Professor at the University of Toronto and an MIT alumna, she leads our R&D efforts, ensuring our SOFCs remain at the cutting edge of innovation.',
          isFlipped: false
        },
        {
          id: 4,
          name: 'Yifei Yan',
          position: 'Director of Engineering',
          photo: 'Yifei Yan.jpg',
          linkedin: 'https://www.linkedin.com/in/yifei-yan-57b137134/',
          bio: 'Yifei is a last year PhD student working at the University of Toronto under supervision of Dr. Kesler. The project focus on making high performance metal substrate for SOFC, which has been the performance bottleneck for SOFCs from the lab.',
          isFlipped: false
        }
      ]
    };
  },
  methods: {
    flipCard(member) {
      member.isFlipped = true;
    },
    unflipCard(member) {
      member.isFlipped = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');

.team-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2卡片每行 */
  gap: 30px; /* 调整卡片间距 */
  padding: 50px;
  width: 100%;
  max-width: 900px; /* 限制宽度，避免卡片过大 */
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}

.team-card {
  perspective: 1000px;
  width: 100%; /* 设置卡片宽度为100%以适应网格 */
  max-width: 400px; /* 设置卡片最大宽度 */
  font-family: Arial, Helvetica, sans-serif;
  
}

.card-inner {
  position: relative;
  width: 100%;
  height: 400px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  font-family: Arial, Helvetica, sans-serif;
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
}

.card-front {
  background: white;
}

.card-back {
  background: #f8f8f8;
  transform: rotateY(180deg);
}

.member-photo {
  border-radius: 10%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
}

h3 {
  margin: 10px 0 5px 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1,
p {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
  /* Adjust font size as needed */
}

.linkedin-link {
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  width: 30px;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5px;
}

.linkedin-link:hover {
  text-decoration: underline;
}

.description-container {
  flex: 1;
  padding-left: 30px; /* Add space between video and text */
  padding-right: 30px;
  font-family: 'Canva Sans';
}

.description-container h2 {
  color: #005d7a;
  font-family: Arial, Helvetica, sans-serif;
}

.description-container p {
  font-family: 'Canva Sans';
}
</style>
