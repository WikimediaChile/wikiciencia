<template>
<div id="app">
  <top></top>
  <contenido></contenido>
  <end></end>
</div>
</template>

<script>
import Top from './components/Top'
import Contenido from './components/Contenido'
import End from './components/End'

export default {
  name: 'app',
  components: {
    Top,
    Contenido,
    End
  },
  methods: {
    addCSS(src) {
      var stylesheet = document.createElement('link');
      stylesheet.href = src;
      stylesheet.rel = 'stylesheet';
      stylesheet.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(stylesheet);
    }
  }
  ,mounted() {
      this.addCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  }
}
</script>
