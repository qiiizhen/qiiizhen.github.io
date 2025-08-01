<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>Last update in July 2025 &nbsp; Visitors: {{ visitCount }}</p>
      <div class="social-links">
        <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      visitCount:0,
      socialLinks: [
        { name: 'Linkedin', url: 'https://www.linkedin.com/in/qi-zhen-07436a2b3/' },
        { name: 'Github', url: 'https://github.com/qiiizhen' },
        { name: 'Instagram', url: 'https://www.instagram.com/yankei_kelly?igsh=MTlvdTRhcGh5ZDVoZg%3D%3D&utm_source=qr' }
      ]
    };
  },
    mounted(){
      fetch("http://localhost:3001/api/visit") 
      .then((res) => res.json())
      .then((data) => {
        this.visitCount = data.visits;
      })
      .catch(err => console.error("Visitor fetch failed:", err));
    }
}

</script>

<style scoped>
.app-footer {
  /* background-color: #35495e; */
  color: black;
  padding: 1rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  margin-top: 0.5rem;
}

.social-links a {
  color: black;
  margin: 0 0.5rem;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>