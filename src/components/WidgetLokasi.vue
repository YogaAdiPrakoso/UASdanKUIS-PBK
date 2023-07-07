<template>
    <br>
    <div class="location-widget">
      <h2>Lokasi Anda</h2>
      <div v-if="latitude && longitude">
        <p>Lintang : {{ latitude }}</p>
        <p>Bujur : {{ longitude }}</p>
      </div>
      <div v-else>
        <p>Mencari Lokasi Anda...</p>
      </div>
  
      <div class="location-input">
        <label for="latitude">Negara</label><br>
        <input type="text" id="latitude" v-model="inputLatitude" />
      </div>
      <div class="location-input">
        <label for="longitude">Kota/Wilayah</label><br>
        <input type="text" id="longitude" v-model="inputLongitude" />
      </div>
  
      <button @click="fetchLocationDetails">Cari Lokasi</button>
  
      <div v-if="foundLocation">
        <h3>Detail Lokasi</h3>
        <p>{{ foundLocation.components.country }}</p>
        <p>{{ foundLocation.components.city }}</p>
        <p>{{ foundLocation.components.street }}</p>
        <p>Kode Post: {{ foundLocation.components.postcode }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
        inputLatitude: '',
        inputLongitude: '',
        foundLocation: null,
      };
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },
    methods: {
      getPosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      async fetchLocationDetails() {
        try {
          const apiKey = '92591005a7b94008909d59a64b6d2a49';
          const latitude = this.inputLatitude || this.latitude;
          const longitude = this.inputLongitude || this.longitude;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            latitude + ',' + longitude
          )}&key=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (data.results && data.results.length > 0) {
            const location = data.results[0];
            this.foundLocation = location;
            console.log('Location:', location);
            // Lakukan sesuatu dengan data lokasi yang ditemukan
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import 'https://fonts.googleapis.com/css?family=Raleway';
  .location-widget {
    position: relative;
    height: 550px;
    width: 580px;
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

  button {
    font-family: 'Raleway';
    font-size: medium;
    margin-top: 20px;
    border-radius: 30px;
    height: 35px;
    width: 150px;
    border-color: black;
    background-attachment: fixed;
  }
  
  .location-input input {
    width: 200px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-attachment: fixed;
  }
  
  .location-input button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
    background-attachment: fixed;
  }
   h3,p,label{
    display: flex;
    justify-content: center;
    margin-top: 1%;
    background-attachment: fixed;
   }
  </style>
  