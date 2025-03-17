<template>
  <main class="page">
    <nav class="py-sm px-md">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        class="nav__logo"
        @click="resetSelection"
        style="cursor: pointer"
      />
    </nav>
    <!-- TODOS
    1. Add a search bar
    2. Display the movies besides description
    3. Fix bug: Dragon Ball image doesn't work
    4. README must content the link to download the backend and the npm build npm start-->
    <div v-for="movie in movies" :key="movie.id">
      <div v-if="selectedMovie?.id === movie.id" class="movie-overlay">
        <div class="overlay-content">
          <h3>{{ movie.title }}</h3>
          <h1>{{ formatDuration(movie.durationInMin) }} - {{ getGenreName(movie.categoryId) }}</h1>
          <p>{{ movie.description }}</p>
        </div>
        <div class="overlay-picture">
          <img :src="movie.thumbnailUrl" :alt="movie.title" class="movie-thumbnail" />
        </div>
      </div>
    </div>
    <h1>Popular movies</h1>
    <div class="movies-container">
      <div v-for="movie in movies" :key="movie.id" class="movie-card" @click="selectMovie(movie)">
        <img :src="movie.thumbnailUrl" :alt="movie.title" class="movie-thumbnail" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moviesData from '@/../backend/db/data/movies.json'

const movies = ref([])
const selectedMovie = ref(null)
const genreMapping = {
  1: 'Anime',
  2: 'Action',
  3: 'Thriller',
}
const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) {
    return `${mins}m`
  } else if (mins === 0) {
    return `${hours}h`
  } else {
    return `${hours}h ${mins}m`
  }
}

onMounted(() => {
  movies.value = moviesData
})
const selectMovie = (movie) => {
  selectedMovie.value = selectedMovie.value?.id === movie.id ? null : movie
}
const resetSelection = () => {
  selectedMovie.value = null
}
const getGenreName = (categoryId) => {
  return genreMapping[categoryId] || 'Unknown'
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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex: row;
  width: 100%;
}
.overlay-content {
  text-align: left;
  padding: 60px 0 0 60px;
  width: 50%;
}
.overlay-picture {
  width: 50%;
}
.movie-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.movie-overlay h3 {
  margin: 0;
  font-size: 60px;
  width: 50%;
  padding-bottom: 10px;
}
.movie-overlay h1 {
  margin: 0;
  font-size: 30px;
  padding-bottom: 60px;
}

.movie-overlay p {
  margin: 5px 0 0;
  font-size: 20px;
  margin-right: 25px;
}
</style>
