<template>
  <div id="app">
    <div class="layout-container">

      <div class="sidebar">
        <Header />
        <Nav />
      </div>
      
      <header class="mobile-header">
        <Header />
      </header>

      <main class="content">
        <div class="content-wrapper">  
          <router-view />
        </div>
      </main>
      
      <nav class="mobile-nav">
        <Nav />
      </nav>
      <footer class="footer">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.layout-container {
  display: grid;
  grid-template-areas:
    "sidebar content"
    "footer footer";
    grid-template-columns: 200px 1fr;
  margin-left: 3rem;
  gap: 8rem;
  padding:1rem;
  padding-right: 7rem;

}

.sidebar {
  grid-area: sidebar;
  width: 200px; 
  border-left: 60px;
}

.content-wrapper {
  max-width: 1200px; 
  width: 100%;
  margin: 0 auto;
}

.content {
  background-color:rgba(143, 143, 135, 0.075);
  border-radius: 3px;
  grid-area: content;
  flex: 1;
  padding: 1rem;
  min-width: 0;
  max-width:calc(100%-200px);
}

.footer{
  grid-area: footer;
  padding: 1rem;
  text-align:center;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1; 
}

.mobile-header,
.mobile-nav {
  display: none; 
}

@media (max-width: 768px) {
  .layout-container {
    display: flex;
    flex-direction: column;
    gap:1rem;
  }

  .sidebar{
    display: none;
  }
   .mobile-header {
    display: block;
    order:1;
    text-align: left;
    width:fit-content
  }
  
  .mobile-nav {
    display: block;
    order: 2; 
  }
  
  .content {
    order: 3;
  }
}

Footer {
  order:4;
  margin-top: auto;
}
</style>
