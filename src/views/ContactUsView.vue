<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Interested in learning more about our game-changing PEM electrolysers? We'd love to hear from you!</h1>
    </div>
      <form class="global-reach-form" @submit.prevent="submitGlobalForm">
        <h2>Global Reach</h2>
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" v-model="globalForm.firstName" required />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" v-model="globalForm.lastName" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="globalForm.email" required />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" v-model="globalForm.phone" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Company</label>
            <input type="text" v-model="globalForm.company" required />
          </div>
          <div class="form-group">
            <label>Inquiry</label>
            <textarea v-model="globalForm.inquiry" required></textarea>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Topic</label>
            <select v-model="globalForm.topic" required>
              <option value="general">General</option>
              <option value="hydrogen">Hydrogen</option>
              <option value="media">Media</option>
              <option value="supplier">Supplier</option>
              <option value="vehicle_sales">Vehicle Sales</option>
            </select>
          </div>
          <div class="form-group">
            <label>Region</label>
            <select v-model="globalForm.region" required>
              <option value="north_america">North America</option>
              <option value="europe">Europe</option>
              <option value="australia">Australia</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        fullName: '',
        email: '',
        phone: '',
        company: '',
        hearAbout: '',
        message: '',
      },
      globalForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiry: '',
        topic: '',
        region: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle contact form submission
      console.log(this.contactForm);
    },
    submitGlobalForm() {
      // Handle global reach form submission
      console.log(this.globalForm);
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  color: #333;
}

.contact-header {
  background-image: url('@/assets/background.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  padding: 50px;
  color: #fff;
  text-align: left;
}

.contact-forms {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
}

.contact-form, .global-reach-form {
  background: rgba(255, 255, 255, 0.9); /* White background with transparency */
  padding: 20px;
  border-radius: 10px;
  max-width: 1000px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.form-row {
  display: flex;
  gap: 40px;
}

.form-group {
  flex: 1;
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input, .form-group textarea, .form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>
