<template>
    <div>
      <p>{{ $t('hello') }}</p>
      <p>{{ $t('goodbye') }}</p>
  
      <button @click="setLanguage('en')">English</button>
      <button @click="setLanguage('pt')">Português</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        language: 'en', // Idioma padrão
        translations: {
          en: {
            hello: 'Hello',
            goodbye: 'Goodbye',
          },
          pt: {
            hello: 'Olá',
            goodbye: 'Adeus',
          },
          // Adicione mais idiomas conforme necessário
        },
      };
    },
    methods: {
      $t(key) {
        return this.translations[this.language][key] || key;
      },
      setLanguage(lang) {
        this.language = lang;
      },
    },
  };
  </script>
  