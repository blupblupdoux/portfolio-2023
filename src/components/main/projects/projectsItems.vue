<template>
    <div class="project-item">
      <h3 class="project-item-title">{{ project.title }}</h3>

      <a :href="project.website" target="_blank" class="project-item-link">{{ project.website }}</a>
  
      <div class="project-item-date">{{ project.date }}</div>
  
      <div class="project-item-description">
        <p> {{ project.description }}</p>
      </div>

      <div class="project-stack">
        <div v-for="techno in project.stack" class="project-stack-techno">{{ techno }}</div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
        project: {
            type: Object
        }
    },
  }
  </script>
  
  
  <style scoped>
  
  .project-item {
    border: 1px solid #2f2e41;
    border-radius: 10px;
    padding: 2% 4%;
    margin-bottom: 4%;
  }
  
  .project-item-title {
    font-weight: bold;
  }
  
  .project-item-date, .project-item-link {
    font-style: italic;
    font-size: 0.8rem;
  }

  .project-item-link {
    text-decoration: underline;
  }
  
  .project-item-description {
    margin-top: 1rem;
    margin-bottom: .5rem;
  }
  
    .project-stack {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: .5rem;
    }

    .project-stack-techno {
        background-color: #3d6240;
        border-radius: 15px;
        padding: .2rem .7rem;
        color: white;
        margin-right: .5rem;
        margin-top: .5rem;
    }

  </style>