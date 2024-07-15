<script setup>
    
</script>

<template>
    <div class="SpotifyPlaylist">
        <div class="spotify-container">
            <iframe src="https://open.spotify.com/embed/playlist/2yHb1Q6NLjRHkIIGcRYvI8?utm_source=generator&theme=0" width="640px" height="720px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
</template>

<style>
    .SpotifyPlaylist {
        grid-area: SpotifyPlaylist; 
        width: 100%; 
        height:100%;
        max-height:100px;
    }

    .SpotifyPlaylist iframe {
        position: relative;
        width: 100%;
        height: 100%;
        min-height:100px;
        border-radius: 12px;
    }

    .spotify-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 100px;
    }
    .spotify-container iframe {
        border-radius: 12px;
    }
</style>