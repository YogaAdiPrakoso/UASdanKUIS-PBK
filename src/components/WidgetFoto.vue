<template>
    <br>
    <div class="photo-widget">
      <h2 class="judul">{{ title }}</h2>
      <img :src="photoUrl" :alt="title" />
      <button @click="getRandomPhoto">Foto Terbaru</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
  
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import 'https://fonts.googleapis.com/css?family=Raleway';

  .photo-widget {
  position: relative;
  height: 550px;
  width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);
  cursor: pointer;
  color: white;
  font-family: 'Raleway';
  background-attachment: fixed;
  }  
  .photo-widget button {
    font-family: 'Raleway';
    font-size: medium;
    margin-top: 10px;
    border-radius: 10px;
    height: 35px;
    width: 200px;
    border-color: grey;
    background-attachment: fixed;
  }
  </style>