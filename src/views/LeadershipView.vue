<template>
  <div class="team-page">
    <BackgroundComponent backgroundImage="../background.jpg" title="Leadership"
      text="Get to know the people that make the energy transition happen! We are a diverse, international, and multidisciplinary team with experience ranging from communication to mechanical engineering."
      titleColor="white" textColor="white" titleSize="3rem" textSize="1rem" />
      
    <div class="team-container">
      <div class="team-card" v-for="member in teamMembers" :key="member.id">
        <div class="card-inner" :class="{ 'is-flipped': member.isFlipped }">
          <div class="card-front">
            <img :src="require(`@/assets/${member.photo}`)" alt="Photo" class="member-photo"
              @mouseover="flipCard(member)" @mouseleave="unflipCard(member)">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <a :href="member.linkedin" target="_blank" class="linkedin-link">LinkedIn</a>
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
          photo: 'aleisha.jpeg',
          linkedin: 'https://www.linkedin.com/in/aleisha-reese-cerny/',
          bio: 'Aleisha has over 20 years of experience in the tech industry...',
          isFlipped: false
        },
        {
          id: 2,
          name: 'Yvonne Liu',
          position: 'Chief Operating Officer',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/janesmith',
          bio: 'Yvonne is a skilled operations manager with a background in...',
          isFlipped: false
        },
        {
          id: 3,
          name: 'Olivera Kesler',
          position: 'Chief Technology Officer',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/michaeljohnson',
          bio: 'Olivera leads the technology team with a focus on innovation...',
          isFlipped: false
        },
        {
          id: 4,
          name: 'Yifei Yan',
          position: 'Head of Engineering',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/emilydavis',
          bio: 'Yifei has a strong background in engineering and project management...',
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
.team-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.team-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  gap: 100px;
  padding: 50px;
  width: 100%;
}

.team-card {
  perspective: 1000px;
  width: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 400px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
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
}

h1,
p {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3rem;
  /* Adjust font size as needed */
}

.linkedin-link {
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
}

.linkedin-link:hover {
  text-decoration: underline;
}
</style>
