<template>
  <ul class="blog-container">
    <li v-for="item in banners" :key="item.id">
      <img :src="item.midImg" alt="" />
      <h2>{{ item.title }}</h2>
      <h3>{{ item.description }}</h3>
    </li>
  </ul>
</template>

<script>
import { getBanners } from "@/api/banners.js";

export default {
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    this.banners = await getBanners();
  },
};
</script>

