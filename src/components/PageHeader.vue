<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Sustain Hydro Logo" />
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Contact</a></li>
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
  height: 40px;
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