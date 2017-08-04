<template>
<header id="header_wrapper" class="navbar-fixed-top">
  <div class="container">
    <div class="header_box">
      <div class="logo"><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_for_e-Science_Photo_Competition_v2_without_text.svg/125px-Logo_for_e-Science_Photo_Competition_v2_without_text.svg.png" alt="logo"></a></div>
      <nav class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
          <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav" @click="doCollapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div id="main-nav" class="navbar-collapse navStyle" :class="{collapse: collapse}">

          <scrollactive ref="scrollactive" class="nav navbar-nav" :alwaysTrack="true" :offset="80">
            <ul class="nav navbar-nav" id="mainNav">
              <li><a href="#hero_section" class="scroll-link scrollactive-item">Wiki Ciencia</a></li>
              <li><a href="#que-es" class="scroll-link scrollactive-item">¿Qué es?</a></li>
              <li><a href="#reglas" class="scroll-link scrollactive-item">Reglas</a></li>
              <li><a href="#categorias" class="scroll-link scrollactive-item">Categorías</a></li>
              <li><a href="#participa" class="scroll-link scrollactive-item">Participa</a></li>
            </ul>
          </scrollactive>
        </div>
      </nav>
    </div>
  </div>
</header>
</template>
<script>
export default {
  name: 'Top',
  data() {
    return {
      collapse: false
    }
  },
  methods: {
    doCollapse() {
      this.collapse = !this.collapse
    }
  },
  mounted() {
    this.doCollapse()
  }
}
</script>
