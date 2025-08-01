<template>
   <div class="nav-container">
    <nav class="app-nav">
      <ul class="nav-list">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link :to="item.path" class="nav-link">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      navItems: [
        { path: '/', label: 'Home' },
        { path: '/academic', label: 'Academic' },
        { path: '/blog', label: 'Blog' },
        { path: '/illusion', label: 'Illusion'}
      ]
    }
  }
}
</script>

<style scoped>

.nav-container {
  background: 
    url('../assets/navBackground.jpg') center/cover no-repeat;
  opacity: 0.85;
  border-radius: 3px; 
  padding: 0.5rem;
  margin: 0.4rem;
  width: min-content; 
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.03) inset, 
    0 4px 30px -10px rgba(0, 0, 0, 0.4); 

  backdrop-filter: blur(6px) brightness(1.1);
  -webkit-backdrop-filter: blur(6px) brightness(1.1);
}

.nav-container:hover {
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 6px 40px -10px rgba(0, 0, 0, 0.5);
}

.app-nav {
  display:flex;
}


.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  flex-direction: row; 
  flex-wrap: nowrap;
}

.app-nav .nav-link {
  color: white !important;
  text-decoration: none !important;
  display: block;
  padding: 0.7rem;
  border-radius: 3px;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.link-text {
  display: inline-block;
  font-size: 1rem; 
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover .link-text {
  transform: scale(1.05); 
  text-shadow: 0 0 8px rgba(255,255,255,0.3);
}

.app-nav .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #f4f5f7 !important; 
}

.app-nav a.router-link-active,
.app-nav a.router-link-exact-active {
  /* No special styles - looks same as default */
  background-color: transparent;
  font-weight: normal;
}

@media (min-width: 769px) {
  .nav-container {
    width: auto;
    margin: 0.5rem;
  }
  
  .nav-list {
    flex-direction: column;
    flex-wrap: wrap;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
  }
}
</style>