<template>
  <div class="team-page">
    <div class="background-container">
      <img src="@/assets/background.jpg" alt="Background" class="background-image">
      <div class="content-overlay">
      </div>
    </div>
    <div class="team-container">
      <div class="team-card" v-for="member in teamMembers" :key="member.id">
        <img :src="member.photo" alt="Photo" class="member-photo">
        <h3>{{ member.name }}</h3>
        <p>{{ member.position }}</p>
        <a :href="member.linkedin" target="_blank" class="linkedin-link">LinkedIn</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutUsView',
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'John Doe',
          position: 'CEO',
          photo: '@/assets/john_doe.jpg',
          linkedin: 'https://www.linkedin.com/in/johndoe'
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'CTO',
          photo: '@/assets/jane_smith.jpg',
          linkedin: 'https://www.linkedin.com/in/janesmith'
        },
        {
          id: 3,
          name: 'Michael Johnson',
          position: 'CFO',
          photo: '@/assets/michael_johnson.jpg',
          linkedin: 'https://www.linkedin.com/in/michaeljohnson'
        },
        {
          id: 4,
          name: 'Emily Davis',
          position: 'COO',
          photo: '@/assets/emily_davis.jpg',
          linkedin: 'https://www.linkedin.com/in/emilydavis'
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

.background-container {
  position: relative;
  width: 100%;
  height: 50vh; /* Adjust the height as needed */
  overflow: hidden;
  margin-top: 80px; /* Adjust according to your header height */
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

.team-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.team-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
