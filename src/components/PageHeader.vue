<template>
  <header :class="{'scrolled': isScrolled}" class="header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/White.png" alt="Sustain Hydro Logo" />
      </div>
      <div class="nav-search-container">
        <nav class="navigation">
          <button class="menu-button" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul :class="{'open': isMenuOpen}">
            <li><router-link to="/" @click="closeMenu">Home</router-link></li>
            <li><router-link to="/technology" @click="closeMenu">Technology</router-link></li>
            <li><router-link to="/news" @click="closeMenu">News</router-link></li>
            <li class="dropdown">
              <router-link to="/about-us/company" @click="closeMenu">About Us</router-link>
              <ul class="dropdown-menu">
                <li><router-link to="/about-us/company" @click="closeMenu">Company</router-link></li>
                <li><router-link to="/about-us/leadership" @click="closeMenu">Leadership</router-link></li>
              </ul>
            </li>
            <li><router-link to="/contact-us" @click="closeMenu">Contact Us</router-link></li>
          </ul>
        </nav>
        <div class="search-container">
          <button class="search-button" @click="toggleSearchBar">
            <img src="@/assets/search-icon.png" alt="search" class="search-icon">
          </button>
          <div v-if="isSearchBarVisible" class="search-bar">
            <input type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Search..." />
            <button @click="search">Search</button>
          </div>
        </div>
      </div>
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
      isSearchBarVisible: false,
      searchQuery: ''
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
      this.isScrolled = window.scrollY > 50;
    },
    toggleSearchBar() {
      this.isSearchBarVisible = !this.isSearchBarVisible;
    },
    search() {
      if (this.searchQuery.trim()) {
        this.$router.push({ path: '/search', query: { q: this.searchQuery } });
        this.isSearchBarVisible = false;
      }
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
  font-family: 'Open Sans', sans-serif;
  background: transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0);
}

.header.scrolled {
  background: #005d7a;
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

.nav-search-container {
  display: flex;
  align-items: center;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin-right: 20px;
  position: relative;
}

.navigation a {
  text-decoration: none;
  color: #eaeef1;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #000;
}

.header.scrolled .navigation a {
  color: #fff;
}

.dropdown .dropdown-menu {
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
  background: transparent;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  min-width: 150px;
  z-index: 1000;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  color: #333;
  padding: 10px 20px;
  display: block;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background: transparent;
  color: white;
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
  background: #333;
  border-radius: 2px;
  transition: all 0.3s;
}

.header.scrolled .menu-button span {
  background: #fff;
}

.search-container {
  position: relative;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.search-bar {
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.search-bar input {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.header.scrolled .search-bar {
  border-color: #fff;
}

.header.scrolled .search-bar button {
  color: #fff;
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