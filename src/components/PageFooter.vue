<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="left-section">
        <div class="contact-info">
          <h3>Get in touch</h3>
          <p>Veritasveien 5<br>1363 Høvik<br>Norway</p>
          <a href="mailto:info@hystar.com" style="color: aqua;">info@hystar.com</a>
        </div>
        <div class="social-media">
          <h3>Follow us</h3>
          <div class="social-icons">
            <a href="#"><img src="@/assets/linkedin.png" alt="linkedin" class="icon"></a>
          </div>
        </div>
      </div>
      <div class="right-section">
        <img src="@/assets/White.png" alt="hystar logo" class="logo">
        <a href="#" class="privacy-policy">privacy policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #093b4c;
  color: white;
  padding: 20px;
  text-align: left;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px 20px;
}

.left-section {
  display: flex;
  flex-direction: column;
}

.right-section {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.contact-info h3,
.social-media h3 {
  margin-bottom: 10px;
}

.social-icons a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

.logo {
  max-width: 200px;
  margin-bottom: 20px;
}

.icon {
  max-width: 20px;
}

.privacy-policy {
  color: #7eb5c1;
  text-decoration: none;
  margin-left: 50px;
  margin-top: 100px;
}

.footer-bottom {
  margin-left: 20px;
  text-align: left;
}

.footer-bottom p {
  margin: 0;
}
</style>