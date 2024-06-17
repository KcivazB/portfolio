<template>
    <div id="Palbro" class="min-h-screen flex bg-gray-900 text-white p-4 pt-20 lg:p-10 overflow-y-auto">
      <div class="container-projects w-full">
        <!-- Back Button -->
        <router-link to="/" class="absolute top-4 left-4 bg-gray-800 hover:bg-gray-700 text-white py-2 p-4 rounded-lg text-sm">
          Back
        </router-link>
  
        <div class="project-card bg-gray-950 shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-3">
          <div class="project-title text-3xl font-bold text-center mb-4">PalBro - A Palworld Companion</div>
          <div class="project-definition text-sm p-4 bg-gray-800 rounded-md">
            <p class="mb-2">Welcome to the world of PalBro, an innovative companion app for Palworld fans.</p>
            <p>Inspired by the Pokédex, PalBro enhances the gaming experience with detailed info on every Pal.</p>
          </div>
          <ul class="list-disc text-sm pl-6 mt-4">
            <li>Comprehensive Pal Database: Access names, numbers, stats, attacks, descriptions, drops, and spawn points.</li>
            <li>Capture Tracking: Track captures bonuses for each Pal up to 10.</li>
            <li>Management of Pals: List obtained and obtainable Pals based on your collection.</li>
            <li>Breeding and Combinations: Discover combinations to obtain new species.</li>
            <li>Item Search: Find which Pals drop the items you need.</li>
            <li>Multi-Game Handling: Track progression across multiple game servers using the gamepad icon in the top bar.</li>
          </ul>
          <div class="text-sm mt-4 p-4 bg-gray-800 rounded-md">
            <div class="font-semibold mb-2">Development and Innovation:</div>
            <p>PalBro is developed to provide an intuitive and powerful tool for Palworld players, seamlessly integrating into their gaming routine.</p>
          </div>
        </div>

        <div class="embed-card bg-gray-950 shadow-md rounded-lg p-6 flex justify-center items-center lg:col-span-3">
          <iframe src="https://palbro.virgilebaisnee.fr" frameborder="0" class="iframed rounded-md"></iframe>
        </div>
        
        <div class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
          <div class="text-2xl font-semibold mb-4">Back-end Technologies</div>
          <div class="flex">
            <img src="/icons/Node.js.png" class="tech-icon w-12 mx-auto">
          </div>
        </div>
        <div class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
          <div class="text-2xl font-semibold mb-4">Front-end Technologies</div>
          <div class="flex">
            <img src="/icons/React.png" class="tech-icon w-12 mx-auto">
          </div>
        </div>
        <!-- <div class="technology-card shadow-md rounded-lg p-6 mb-6 lg:mb-0 lg:col-span-1">
          <div class="text-2xl font-semibold mb-4">Other Technologies</div>
          <div>
            <ul class="list-disc text-sm pl-6">
                <li>Modern UI/UX Design</li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Palbro',
  }
  </script>
  
  <style scoped>
  .tech-icon {
    height: auto;
  }
  
  .iframed {
    width: 100vw;
    height: 60vh;
  }
  
  /* LARGE SCREENS */
  @media (min-width: 1024px) {
    .container-projects {
      display: grid;
      padding-top: 0%;
      margin-left: 5%;
      margin-right: 5%;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 15px;
      grid-template-areas: 
          "Project Project Project Embed Embed Embed Back"
          "Project Project Project Embed Embed Embed Front"
          "Project Project Project Embed Embed Embed Other";
    }
  
    .project-card {
      grid-area: Project;
    }
    .technology-card:nth-child(2) {
      grid-area: Back;
    }
    .technology-card:nth-child(3) {
      grid-area: Front;
    }
    /* .technology-card:nth-child(4) {
      grid-area: Other;
    } */
    .embed-card {
      grid-area: Embed;
      min-height: 50vh;
    }
    .iframed {
      width: 100%;
      height: 100%;
    }
  }
  </style>
  