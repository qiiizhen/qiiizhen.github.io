<template>
  <div class="blog-post">
    <h3 id="blog1-head">Moist Memory</h3>
    <div class="post-content">
      <p>终于在暑假下定决心开始做个人博客。我向来是个三分钟热度的人，也不知道此行能够坚持多久（笑）。不过，尝试一下也无妨。</p>
      <p>本站使用Vue框架，技艺不精，各位见笑。</p>
      <p id="blog1-ending">记于2025/7/28</p>
    </div>
    <router-link to="/blog" class="back-link">← Back to Blog</router-link>
  </div>
</template>

<script>
export default {
  name: 'MoistMemory'
}
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.post-content {
  margin: 2rem 0;
  line-height: 1.6;
}

.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #666;
  text-decoration: none;
}

.back-link:hover {
  color: #333;
  text-decoration: underline;
}

#blog1-ending {
  text-align: right;
}
</style>