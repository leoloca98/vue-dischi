/*

Descrizione:
-   Attraverso una chiamata ajax all’API di boolean:
    https://flynn.boolean.careers/exercises/api/array/music
    avremo a disposizione una decina di dischi musicali.
-   Utilizzando vue, stampiamo a schermo una card per ogni album.

BONUS:
-   Ordinare i dischi per anno di uscita.
-   Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

*/

console.log('Vue Ready', Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        albums: [],
        genres: [],
        selected: '',
    },
    computed: {
        mostRecent() {
            return this.albums
                .sort((b, a) => new Date(a.year) - new Date(b.year));
        },
    },
    methods: {},
    created() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                this.albums = res.data.response;
                for (let i = 0; i < this.albums.length; i++) {
                    if (!this.genres.includes(this.albums[i].genre)) {
                        this.genres.push(this.albums[i].genre);
                    }
                }
                console.log(this.genres);
            });
    },
});
