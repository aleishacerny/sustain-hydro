<template>
  <div class="page">
    <div class="hero-section">
      <img src="@/assets/background.jpg" alt="Background" class="hero-image"/>
      <div class="hero-text">
        <p>Learn about the latest Hystar press releases, HyStories (our blog), and white papers</p>
      </div>
    </div>
    <div class="cards-section">
      <div class="card" v-for="(card, index) in cards" :key="index" @click="goToPage(card.link)">
        <img :src="card.image" :alt="card.title" class="card-image"/>
        <div class="card-content">
          <h2>{{ card.title }}</h2>
          <p>{{ card.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  data() {
    return {
      cards: [
        {
          title: 'Saving lives, one stem cell at a time',
          date: 'July 12, 2024',
          image: require('@/assets/background.jpg'), // Replace with actual path
          link: '/news/saving-lives'
        },
        {
          title: 'HyPilot on the move!',
          date: 'April 22, 2024',
          image: require('@/assets/background.jpg'), // Replace with actual path
          link: '/news/hypilot'
        },
        {
          title: 'A year in review - 2023',
          date: 'December 24, 2023',
          image: require('@/assets/background.jpg'), // Replace with actual path
          link: '/news/year-in-review'
        }
      ]
    };
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style scoped>
.page {
  text-align: center;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  padding: 0 20px;
  text-align: center;
}

.cards-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 10px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h2 {
  font-size: 18px;
  margin: 10px 0;
}

.card-content p {
  color: #777;
}

</style>
