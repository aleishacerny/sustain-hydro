<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-left">
        <img class="logo" src="" alt="sustain hydro Logo" />
        <p class="slogan">Paving the Way to Zero CO<sub>2</sub> Cement.</p>
        <p class="privacy"><a href="#">Privacy Policy</a></p>
        <p>&copy; 2024 sustain hydro Corporation. All Rights Reserved.</p>
      </div>
      <div class="footer-links">
        <div class="link-section">
          <ul>
            <li><a href="#">Paving the Way</a></li>
            <li><a href="#">Why the Plus</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">How We Do It</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-right">
        <address>
          100 Great Oaks Blvd,<br />
          Suite 120<br />
          San Jose, CA 95119
        </address>
        <p>669.267.6400</p>
        <p><a href="mailto:info@sustain hydroglobal.com">info@sustain hydroglobal.com</a></p>
        <div class="social-links">
          <p>Stay Connected</p>
          <a href="#"><img src="" alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
};
</script>

<style scoped>
.footer {
  background-color: #002346;
  color: white;
  padding: 40px 0;
  font-size: 14px;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-left,
.footer-right,
.footer-links {
  display: flex;
  flex-direction: column;
}

.footer-left {
  max-width: 300px;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.slogan {
  font-size: 16px;
  margin: 10px 0;
}

.privacy {
  margin-top: 10px;
}

.privacy a {
  color: #97c0ff;
  text-decoration: none;
}

.footer-links {
  display: flex;
  gap: 40px;
}

.link-section ul {
  list-style: none;
  padding: 0;
}

.link-section li {
  margin-bottom: 10px;
}

.link-section a {
  color: white;
  text-decoration: none;
}

.link-section a:hover {
  text-decoration: underline;
}

.footer-right address {
  font-style: normal;
  line-height: 1.5;
  margin-bottom: 20px;
}

.footer-right p {
  margin: 5px 0;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-links p {
  margin: 0;
}

.social-links a img {
  width: 24px;
}
</style>