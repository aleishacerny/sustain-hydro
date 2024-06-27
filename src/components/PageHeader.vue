<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/Blue.png" alt="Sustain Hydro Logo" />
      </div>
      <nav class="navigation">
        <button class="menu-button" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul :class="{'open': isMenuOpen}">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/technology" @click="closeMenu">Technology</router-link></li>
          <li><router-link to="/about-us" @click="closeMenu">About Us</router-link></li>
          <li><router-link to="/contact-us" @click="closeMenu">Contact Us</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* 通用样式 */
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

/* 汉堡菜单样式 */
.menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
}
.menu-button span {
  display: block;
  width: 30px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .navigation ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px; /* 根据你的需求调整 */
    right: 0;
    width: 150px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    z-index: 1000;
  }
  .navigation ul.open {
    display: flex;
    animation: slideDown 0.3s ease-in-out;
  }
  .navigation li {
    margin: 10px 0;
  }
  .menu-button {
    display: flex;
  }
  .menu-button.open span:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  .menu-button.open span:nth-child(2) {
    opacity: 0;
  }
  .menu-button.open span:nth-child(3) {
    transform: translateY(-10px) rotate(-45deg);
  }
}

/* 动画效果 */
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
