<script setup>
    
</script>

<template>
      <div class="Contact ">
        <div class=" text-2xl font-bold">{{ $t('contact_header') }}</div>
        <div class="contact-details">
          <p class="italic font-thin px-2 py-2">{{$t('contact_details')}}</p>
          <a href="mailto:virgile.baisnee@live.com" class="px-5 py-2 text-lg font-bold hover-highlighted-text">virgile.baisnee@live.com</a>
          <p class="px-5 text-lg">France</p>

          <p class="italic font-thin px-2 py-2">{{$t('contact_socials')}}</p>
          <div class="links-holder">
            <div>
              <a href="https://github.com/ZavickB" class="px-5 text-lg font-bold hover-highlighted-text">GitHub</a>
            </div>
            <div>
              <a href="https://linkedin.com/in/virgile-baisn%C3%A9e-808517163" class="px-5 text-lg font-bold hover-highlighted-text">LinkedIn</a>
            </div>
            <div>
              <a href="https://discord.com/users/540535438385872896" class="px-5 text-lg font-bold hover-highlighted-text">Discord</a>
            </div>
          </div>
        </div>
      </div>
</template>

<style>
  .Contact { grid-area: Contact; }
</style>