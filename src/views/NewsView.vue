<template>
  <div class="company-page">    
    <BackgroundComponent
      backgroundImage="news_bg.png"
      title="NEWSROOM"
      text="Stay informed about the latest advancements, partnerships, & achievements at Serenity Power"      
      titleColor="white"
      textColor="white"
      titleSize="3rem"
      textSize="1.5rem"
      titleFontFamily="League Spartan"
    />
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
import BackgroundComponent from '@/components/BackgroundComponent.vue';

export default {
  name: 'NewsView',
  components: {
    BackgroundComponent
  },
  data() {
    return {
      cards: [
        {
          title: 'Saving lives, one stem cell at a time',
          date: 'July 12, 2024',
          image: require('@/assets/news1.jpg'), // Replace with actual path
          link: '/news/saving-lives'
        },
        {
          title: 'HyPilot on the move!',
          date: 'April 22, 2024',
          image: require('@/assets/news2.jpg'), // Replace with actual path
          link: '/news/hypilot'
        },
        {
          title: 'A year in review - 2023',
          date: 'December 24, 2023',
          image: require('@/assets/news3.jpg'), // Replace with actual path
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

.team-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
