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

      await fetch("/api/api", {
        'method': 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({message: message}),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('is send? ('+data.success+') message: ' + data.message);
        });
    },
  },
};
</script>
