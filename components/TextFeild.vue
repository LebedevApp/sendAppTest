<template>
  <v-container>
    <v-text-field v-model="message" solo label="Message" clearable>
    </v-text-field>
    <v-btn class="ma-2" outlined color="indigo" @click="post">
      Отправить
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    async post() {
      const message = this.message;
      try {
        await fetch("/api/api", {
            'method': 'post',
            message,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>