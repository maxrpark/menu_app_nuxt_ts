<template>
  <footer class="bg-light">
    <p>
      <span class="text-success">Made with Nuxt & Firebase, </span>
      by

      <a
        class="text-success"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/MaxCodeJourney"
      >
        Maxi Ruti, </a
      >{{ new Date().getFullYear() }}
    </p>
    <p>
      Visit my other projects
      <a
        class="text-success"
        target="_blank"
        rel="noreferrer"
        href="https://my-portfolio-blog-website.netlify.app/"
      >
        My Portfolio Website
      </a>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* Footer */
footer {
  min-height: 100px;
  display: grid;
  place-content: center;
  margin-top: 2rem;
  text-align: center;
  padding: 1rem;
}
footer a {
  text-decoration: underline;
}
footer a:hover {
  opacity: 0.7;
  letter-spacing: normal;
}
</style>
