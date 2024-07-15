<script setup>
    
</script>

<template>
      <div class="Contact">
        <div class=" text-2xl font-bold">{{ $t('contact_header') }}</div>
        <div class="contact-details">
          <p class="italic font-thin px-2 py-2">{{$t('contact_details')}}</p>
          <a href="mailto:virgile.baisnee@live.com" class="px-5 py-2 text-lg font-bold hover-highlighted-text">virgile.baisnee@live.com</a>
        
          <p class="italic font-thin px-2 py-2">{{ $t('contact_discord') }}</p>

          <div>
              <a href="https://discord.com/users/540535438385872896" class="px-5 text-lg font-bold hover-highlighted-text">Discord</a>
          </div>
        </div>
      </div>
</template>

<style>
  .Contact { 
    grid-area: Contact;
  }
</style>