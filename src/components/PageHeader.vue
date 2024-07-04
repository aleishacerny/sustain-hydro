<template>
  <header :class="{'scrolled': isScrolled}" class="header">
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
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Adjust the scroll distance as needed
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style scoped>
.header {
  background: transparent; /* Initially no background */
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transition */
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0);
}

.header.scrolled {
  background: #4FC6E6; /* Blue color when scrolled, slightly transparent */
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
  height: 60px;
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
  color: #333; /* Initially dark text */
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #000; /* Darker on hover */
}

.header.scrolled .navigation a {
  color: #fff; /* White text when scrolled */
}

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
  background: #333; /* Dark bars */
  border-radius: 2px;
  transition: all 0.3s;
}

.header.scrolled .menu-button span {
  background: #fff; /* White bars when scrolled */
}

@media (max-width: 768px) {
  .navigation ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
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
