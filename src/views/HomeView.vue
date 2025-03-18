<template>
  <main class="page">
    <nav
      class="py-sm px-md"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        class="nav__logo"
        @click="resetSelection"
        style="cursor: pointer"
      />
      <div class="search-container" style="position: relative; display: flex; align-items: center">
        <div style="position: absolute; left: 10px; pointer-events: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="color: #666"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search movies..."
          @focus="isSearchFocused = true"
          @blur="setTimeout(() => (isSearchFocused = false), 200)"
          style="
            padding: 8px 12px 8px 35px;
            border-radius: 20px;
            border: 1px solid #ccc;
            width: 200px;
            outline: none;
          "
        />

        <!-- Search Results Dropdown -->
        <div
          v-if="isSearchFocused && searchQuery"
          style="
            position: absolute;
            top: 100%;
            right: 0;
            width: 250px;
            max-height: 300px;
            overflow-y: auto;
            background: white;
            border: 1px solid #eee;
            border-radius: 4px;
            z-index: 100;
            margin-top: 5px;
          "
        >
          <div
            v-for="movie in filteredMovies"
            :key="movie.id"
            @mousedown="selectMovie(movie)"
            style="
              padding: 10px;
              cursor: pointer;
              display: flex;
              align-items: center;
              border-bottom: 1px solid #eee;
            "
          >
            <img
              :src="movie.thumbnailUrl"
              :alt="movie.title"
              style="
                width: 40px;
                height: 40px;
                object-fit: cover;
                margin-right: 10px;
                border-radius: 3px;
              "
            />
            <div style="color: #666">{{ movie.title }}</div>
          </div>
          <div v-if="filteredMovies.length === 0" style="padding: 10px; color: #999">
            No movies found
          </div>
        </div>
      </div>
    </nav>
    <!-- TODOS
    1. Display the movies besides description
    2. Fix bug: Dragon Ball image doesn't work and size are not the same
    3. README must content the link to download the backend and the npm build npm start-->
    <div v-for="movie in movies" :key="movie.id">
      <div v-if="selectedMovie?.id === movie.id" class="movie-overlay">
        <div class="overlay-content">
          <h3>{{ movie.title }}</h3>
          <h1>{{ formatDuration(movie.durationInMin) }} - {{ getGenreName(movie.categoryId) }}</h1>
          <p>{{ movie.description }}</p>
          <button>Play</button>
        </div>
        <div class="overlay-picture">
          <img :src="movie.thumbnailUrl" :alt="movie.title" class="movie-thumbnail" />
        </div>
      </div>
    </div>
    <h1 style="margin: 20px">Popular movies</h1>
    <!-- Show either the filtered movies or all movies -->
    <div class="movies-container">
      <div
        v-for="movie in filteredMovies"
        :key="movie.id"
        class="movie-card"
        @click="selectMovie(movie)"
      >
        <img :src="movie.thumbnailUrl" :alt="movie.title" class="movie-thumbnail" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import moviesData from '@/../backend/db/data/movies.json'

const movies = ref([])
const selectedMovie = ref(null)
const searchQuery = ref('')
const isSearchFocused = ref(false)
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
const filteredMovies = computed(() => {
  if (!searchQuery.value.trim()) return movies.value

  const query = searchQuery.value.toLowerCase()
  return movies.value.filter((movie) => movie.title.toLowerCase().includes(query))
})

onMounted(() => {
  movies.value = moviesData
})
const selectMovie = (movie) => {
  selectedMovie.value = selectedMovie.value?.id === movie.id ? null : movie
  searchQuery.value = '' // Clear search after selection
  isSearchFocused.value = false // Hide dropdown
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
