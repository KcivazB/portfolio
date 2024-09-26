<template>
    <div class="modal">
      <div class="modal-mask">
          <div class="modal-content">
              <div class="modal-header">
                  <div class="close">
                      <button @click="$emit('close')">X</button>
                  </div>
              </div>
              <div class="modal-body">
                  <img :src="imgSrc" alt="Image" class="modal-image">
                  <p class="image-description">{{ imgDesc }}</p>
              </div>
              <div class="modal-footer"></div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import i18next from 'i18next';
  
  export default {
      name: 'ImageModal',
      props: {
        imgSrc: {
            type: String,
            required: true,
        },
        imgDesc: {
            type: String,
            required: true,
        }
      },
      data: () => ({}),
      computed: {
          currentLocale() {
              return i18next.language.split('-')[0];
          }
      },
      methods: {},
  }
  </script>
  
  <style scoped>
  .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-mask {
      position: relative;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 80%;
      max-width: 600px;
  }
  
  .modal-header {
      display: flex;
      justify-content: flex-end;
  }
  
  .close button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
  }
  
  .modal-body {
      text-align: center;
  }
  
  .modal-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 15px;
  }
  
  .image-description {
      font-size: 1rem;
      color: #555;
  }
  </style>
  