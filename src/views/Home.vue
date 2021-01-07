<template>
  <div class="home">
    <Welcome msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Welcome from '@/components/common/Welcome.vue'; // @ is an alias to /src

@Options({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {}
</script>
