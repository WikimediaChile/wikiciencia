<template>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <lightbox :album="album || defecto" :src="commons" :show-index="false" v-if="!isVideo()">
      <img :src="url">
    </lightbox>
    <a :href="video" target="_blank" v-if="isVideo()" rel="noopener">
        <img :src="url">
    </a>
    <div class="caption">
      <p>{{author}} - {{license || 'CC-BY-SA 4.0'}}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'image',
  data() {
    return {
      url: "",
      commons: "",
    }
  },
  props: ['name', 'author', 'license', 'size', 'full', 'album', 'video'],
  mounted() {
    if (this.full === undefined) {
      let thumb_params = {
          f: this.name,
          w: this.size || 320
        },
        full_params = {
          f: this.name,
          w: (this.isGif() ? 320 : 1024)
        }
      let esc = encodeURIComponent;
      let thumb_query = Object.keys(thumb_params)
        .map(k => esc(k) + '=' + thumb_params[k])
        .join('&');
      let full_query = Object.keys(full_params)
        .map(k => esc(k) + '=' + full_params[k])
        .join('&');
      this.url = 'https://commons.wikimedia.org/w/thumb.php?' + thumb_query + '.jpg';
      this.commons = 'https://commons.wikimedia.org/w/thumb.php?' + full_query;
    } else {
      this.url = this.full
      this.commons = this.full
    }
  },
  methods: {
    isVideo() {
      return !!(this.full)
    },
    isGif() {
      return !!(this.name && this.name.match(/\.gif$/))
    }
  }
}
</script>
