<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/timer">Timer</router-link></li>
          <li><router-link to="/rpsgame">Rock Paper Scissors</router-link></li>
          <li><router-link to="/lokasi">Lokasi</router-link></li>
          <li><router-link to="/cuaca">Cuaca</router-link></li>
          <li><router-link to="/foto">Foto Random</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body{
  background-image: url("./assets/bg.png");
  background-position: 100cm;
  background-size: cover;
  background-attachment:fixed;
  background-position: 100%;
} 
#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

header {
  background: #A2CDB0;
  padding: 10px;
  border-radius: 23px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
@import 'https://fonts.googleapis.com/css?family=Raleway';
nav li {
  font-family: Raleway;
  font-size: large;
  display: inline-block;
  margin-right: 10px;
}

nav a {
  color: black;
  text-decoration: none;
  padding: 5px 10px;
}

nav a:hover {
  color: grey;
}
</style>
