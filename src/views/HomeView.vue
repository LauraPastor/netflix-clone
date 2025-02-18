<template>
  <main class="page">
    <nav class="py-sm px-md">
      <img src="@/assets/img/logo.png" alt="logo" class="nav__logo" />
    </nav>
    <!-- TODOS 1. when click logo the description dissapear
    2. Description should look like screenshot
    3. Add a filter with genres
    4. Add a search bar
    5. Display the movies in a grid
    6. Fix bug: Dragon Ball image doesn't work-->
    <div v-for="movie in movies" :key="movie.id" class="movie-description">
      <div v-if="selectedMovie?.id === movie.id" class="movie-overlay">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.description }}</p>
      </div>
    </div>
    <p>Popular movies</p>
    <div class="movies-container">
      <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="selectMovie(movie)">
        <img :src="movie.thumbnailUrl" :alt="movie.title" class="movie-thumbnail" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moviesData from '@/../backend/db/data/movies.json' // Adjust path if needed

const movies = ref([])
const selectedMovie = ref(null)

onMounted(() => {
  movies.value = moviesData
})
const selectMovie = (movie) => {
  selectedMovie.value = selectedMovie.value?.id === movie.id ? null : movie
}
</script>

<style lang="css" scoped>
.page {
  height: 100%;
  background-image: var(--gradient-bg), url('@/assets/img/hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.nav__logo {
  height: 40px;
  margin: 20px;
}

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 15px;
  padding: 20px;
}

.movie-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.movie-thumbnail {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.movie-card:hover .movie-thumbnail {
  transform: scale(1.05);
}

.movie-overlay {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 130px;
  text-align: left;
  border-radius: 0 0 8px 8px;
}
.movie-description {
  position: relative;
}
.movie-overlay h3 {
  margin: 0;
  font-size: 25px;
}

.movie-overlay p {
  margin: 5px 0 0;
  font-size: 20px;
}
</style>
