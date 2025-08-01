<template>
  <header class="app-header">
    <div class="header-content">
      <h1>{{ siteTitle }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    siteTitle: {
      type: String,
      default: "Qi"
    }
}
}
</script>

<style scoped>
.app-header {
  color: black; /* Text will be fully opaque */
  padding: 1rem;
  margin: 0.4rem;
  border-radius: 3px;
  position: relative; /* Needed for absolute positioning of pseudo-element */
  z-index: 1; /* Ensure text stays above the background */
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.03) inset, 
    0 4px 30px -10px rgba(0, 0, 0, 0.4);
}

.app-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/headerBackground.jpg') center/cover no-repeat;
  opacity: 0.8;
  border-radius: 3px;
  z-index: -1; 
  backdrop-filter: blur(6px) brightness(1.1);
  -webkit-backdrop-filter: blur(6px) brightness(1.1);
}

.header-content {
  max-width: 1400px;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 26px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 400;
}
</style>