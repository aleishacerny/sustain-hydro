<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/Blue.png" alt="Sustain Hydro Logo" />
      </div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/technology">Technology</router-link></li>
          <li><router-link to="/about-us">About Us</router-link></li>
          <li><router-link to="/contact-us">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}
.logo img {
  height: 80px;
}
.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navigation li {
  margin-right: 20px;
}
.navigation a {
  text-decoration: none;
  color: #333;
}
.navigation a:hover {
  color: #000;
}
</style>
