<template>
    <div class="projects">
      <link rel="stylesheet" href="./app.css"> 
      <h2 style="color:rgb(240, 136, 192)">Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h3 style="font-size: larger;color: deeppink;">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'ADIS PIZZERIA', description: 'A website for a pizza shop .' },
          { id: 2, title: 'ARN Beauty', description: 'A website for a beauty brand' },
          // Add more projects here
        ],
      };
    },
  };
 
  </script>
  