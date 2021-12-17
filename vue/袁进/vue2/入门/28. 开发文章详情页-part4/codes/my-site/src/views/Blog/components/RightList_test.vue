<template>
  <div class="right-list-test-container">
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import "@/styles/global.less";

export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "chapter 1", isSelect: false },
        {
          name: "chapter 2",
          isSelect: true,
          children: [
            { name: "chapter 2-1", isSelect: false },
            { name: "chapter 2-2", isSelect: false },
            {
              name: "chapter 2-3",
              isSelect: false,
              children: [
                { name: "chapter 2-3-1", isSelect: false },
                { name: "chapter 2-3-2", isSelect: false },
                { name: "chapter 2-3-3", isSelect: false },
              ],
            },
            { name: "chapter 2-4", isSelect: false },
          ],
        },
        { name: "chapter 3", isSelect: false },
        { name: "chapter 4", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log('1');
      // console.log(item.name);
    },
  },
};
</script>