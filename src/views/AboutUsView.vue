<template>
  <div class="team-page">
    <div class="background-container">
      <img src="@/assets/background.jpg" alt="Background" class="background-image">
    </div>
    <div class="team-container">
      <div class="team-card" v-for="member in teamMembers" :key="member.id">
        <div class="card-inner">
          <div class="card-front">
            <img :src="require(`@/assets/${member.photo}`)" alt="Photo" class="member-photo">
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
export default {
  name: 'TechnologyView',
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Aleisha R. Cerny',
          position: 'Chief Executive Officer',
          photo: 'aleisha.jpeg',
          linkedin: 'https://www.linkedin.com/in/aleisha-reese-cerny/',
          bio: 'Aleisha has over 20 years of experience in the tech industry...'
        },
        {
          id: 2,
          name: 'Yvonne Liu',
          position: 'Chief Operating Officer',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/janesmith',
          bio: 'Yvonne is a skilled operations manager with a background in...'
        },
        {
          id: 3,
          name: 'Olivera Kesler',
          position: 'Chief Technology Officer',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/michaeljohnson',
          bio: 'Olivera leads the technology team with a focus on innovation...'
        },
        {
          id: 4,
          name: 'Yifei Yan',
          position: 'Head of Engineering',
          photo: 'background.jpg',
          linkedin: 'https://www.linkedin.com/in/emilydavis',
          bio: 'Yifei has a strong background in engineering and project management...'
        }
      ]
    };
  }
};
</script>
<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

.team-page {
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

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
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

.team-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
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
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
}

h3 {
  margin: 10px 0 5px 0;
}

p {
  margin: 0 0 15px 0;
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
