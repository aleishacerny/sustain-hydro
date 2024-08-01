<template>
  <div class="contact-page">
    <div class="background-container">
      <img src="@/assets/background.jpg" alt="Background" class="background-image">
      <div class="background-text">
        <h1>Leadership</h1>
        <p>Get to know the people that make the energy transition happen! We are a diverse, international, and multidisciplinary team with experience ranging from communication to mechanical engineering.
        </p>
      </div>
    </div>
      <form class="global-reach-form" @submit.prevent="submitForm">
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
      const { firstName, lastName, email, phone, company, inquiry, topic, region } = this.globalForm;

      const mailtoLink = `mailto:info@hystar.com?subject=Inquiry from ${firstName} ${lastName}&body=
        First Name: ${firstName}%0D%0A
        Last Name: ${lastName}%0D%0A
        Email: ${email}%0D%0A
        Phone: ${phone}%0D%0A
        Company: ${company}%0D%0A
        Inquiry: ${inquiry}%0D%0A
        Topic: ${topic}%0D%0A
        Region: ${region}%0D%0A`;

      window.location.href = mailtoLink;
    }
  }
};
</script>

<style scoped>
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-text {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0); /* 半透明的黑色背景 */
  padding: 20px;
  border-radius: 10px;
}
.contact-page {
  padding: 0px;
  color: #333;
  width: 100%;
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
