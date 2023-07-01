new Vue({
  el: '#app',
  data() {
    return {
      url: 'https://fireforce.pythonanywhere.com/mangas',
      mangas: [],
      error: false,
      cargando: true,
    };
  },
  created() {
    this.fetchData(this.url);
  },
  methods: {
    fetchData(url) {
      // Consumo de la API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.mangas = data;
          this.cargando = false;
        })
        .catch(err => {
          console.error(err);
          this.error = true;
        });
    },
  },
});
