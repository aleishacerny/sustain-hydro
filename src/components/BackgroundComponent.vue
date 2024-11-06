<template>
  <div class="background-container">
    <img :src="backgroundImage" alt="Background" class="background-image">
    <div class="content-overlay">
      <h1 :style="{ color: titleColor, fontSize: titleSize, fontFamily: titleFontFamily }">{{ title }}</h1>
      <p :style="{ color: textColor, fontSize: textSize, fontFamily: subtitleFontFamily}">{{ text }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BackgroundComponent',
  props: {
    backgroundImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Default Title'
    },
    text: {
      type: String,
      default: 'Default Text'
    },
    titleColor: {
      type: String,
      default: '#FFFFFF'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    titleSize: {
      type: String,
      default: '4rem'
    },
    textSize: {
      type: String,
      default: '1.5rem'
    },
    titleFontFamily: {
      type: String,
      default:  'League Spartan'
    },
    subtitleFontFamily: {
      type: String,
      default: 'sans-serif'
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
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
  text-align: center; /* Keep this for the title */
  width: 100%; /* Ensure the paragraph takes full width */
}

.content-overlay p{
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center; /* Keep this for the title */
  width: 80%; /* Ensure the paragraph takes full width */
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
</style>