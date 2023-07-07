<template>
    <br>
    <div class="card">
      <h1>Cuaca saat ini</h1>
      <input type="text" v-model="cityName" placeholder="&ensp;Masukkan nama kota">
      <button class="cari" @click="fetchWeatherData">Cari</button>
      <div v-if="weatherData" class="data">
          <table>
            <tr>
              <td class="name">{{ weatherData.name }}</td>
            </tr>
            <tr>
              <td class="temp">{{ Math.round(weatherData.main.temp) }}°C</td>
            </tr>
            <tr>
              <td class="desc">{{ weatherData.weather[0].description }}</td>
            </tr>
          </table>
        </div>
      <table>
        <tr>
          <td v-if="error" class="eror">{{ error }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cityName: '',
        weatherData: null,
        error: '',
      };
    },
    methods: {
      async fetchWeatherData() {
        const apiKey = '8e2cf590b56d856c9ae1506039a390a9';
  
        if (!this.cityName) {
          this.weatherData = null;
          this.error = 'Masukkan Wilayah Anda !';
          return;
        }
  
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${apiKey}`;
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const data = await response.json();
            this.weatherData = data;
            this.error = '';
          } else {
            this.weatherData = null;
            this.error = 'Terjadi kesalahan dalam memuat data cuaca';
          }
        } catch (error) {
          console.error(error);
          this.error = 'Terjadi kesalahan dalam memuat data cuaca';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import 'https://fonts.googleapis.com/css?family=Raleway';
  input[type="text"] {
    font-family: 'Raleway';
    border-radius: 30px;
    background-color: rgba(255, 255, 255);
    border-radius: 30px;
    height: 50px;
    width: 300px;
    color: black;
    background-attachment: fixed;
  }

  .card{
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    height: 500px;
    width: 560px;
    display: flex;
    align-items: center;
    color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
    opacity: 0.5;
    background: #212121;
    box-shadow: 10px 10px 20px rgb(25, 25, 25),-15px -15px 30px rgb(60, 60, 60);
    background-attachment: fixed;
  }
  .cari {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    height: 50px;
    width: 300px;
    margin-left: 3px;
    background-attachment: fixed;
  }
  
  .cari:hover {
    background-color: grey;
    background-attachment: fixed;
  }
  
  table {
  max-width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  background-color: rgb(1,0,1,1.0);
  border-radius: 15px;
  color: white;
  background-attachment: fixed;
  }
  table tr td {
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    background-attachment: fixed;
    
  }
  
  .name {
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
    letter-spacing: 2px;
    padding-top: 20px;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    background-attachment: fixed;
  }
  
  .temp {
    color: #FFF;
    display: inline-block;
    font-size: 50px;
    font-weight: 800;
    text-shadow: 0px 0px 8px rgba(0, 0, 0.7, 0);
    display: flex;
    justify-content: center;
    background-attachment: fixed;
  }
  
  .desc {
    color: #FFF;
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 300;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
    letter-spacing: 3px;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    background-attachment: fixed;
  }
  
  .eror {
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    padding-top: 20px;
  }
  </style>