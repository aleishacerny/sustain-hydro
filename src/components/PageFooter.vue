<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-left">
        <img class="logo" src="@/assets/White.png" alt="sustain hydro Logo" />
        <p class="slogan">Paving the Way to Zero CO<sub>2</sub> Cement.</p>
        <p class="privacy"><a href="#">Privacy Policy</a></p>
        <p>&copy; 2024 sustain hydro Corporation. All Rights Reserved.</p>
      </div>
      <div class="footer-right">
        <address>
          55 St George Street,<br />
          Suite 620<br />
          Toronto ON, M5S 1A4
        </address>
        <p>Phone number: 778-918-1654</p>
        <p><a href="mailto:contact@serenitypower.ca">contact@serenitypower.ca</a></p>
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
  background-color: #0D62AD;
  color: white;
  padding: 40px 0;
  font-size: 16px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column;
}

.footer-left {
  max-width: 300px;
}

.logo {
  width: 100px;
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

.footer-right {
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
  flex-grow: 1; /* Allow to grow to fill available space */
}

.footer-right address {
  font-style: normal;
  line-height: 1.5;
  margin-bottom: 20px;
}

.footer-right p {
  margin: 5px 0;
}
</style>
