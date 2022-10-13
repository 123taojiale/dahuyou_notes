<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <button @click="addItem">addItem</button>
    <draggable
      v-model="myArray"
      @start="drag = true"
      :force-fallback="true"
      animation="300"
      chosen-class="drag-chosen"
      ghost-class="drag-ghost"
    >
      <div v-for="(item, index) in myArray" :key="index" class="drag-item">
        {{ item.name }}
      </div>
    </draggable>
    <pre>{{ myArrayWithZIndex }}</pre>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "App",
  components: {
    draggable,
  },
  data() {
    return {
      myArray: [
        {
          name: "item1"
        },
        {
          name: "item2"
        },
        {
          name: "item3"
        },
      ],
    };
  },
  computed: {
    myArrayWithZIndex() {
      const len = this.myArray.length;
      return this.myArray.map((it, index) => {
        it.zIndex = len - index;
        return it;
      });
    },
  },
  methods: {
    addItem() {
      const len = this.myArray.length;
      this.myArray.unshift({
        name: "item" + (len + 1),
        id: len + 1,
      });
    },
  },
};
</script>

<style>
#app {
  width: 50vw;
  margin: 60px auto 0;
  color: #2c3e50;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.drag-item {
  border: 1px solid #ddd;
  padding: 20px 10px;
  cursor: pointer;
}

.drag-chosen {
  border-color: #50b0ad;
}

.drag-ghost {
  background-color: #50b0ad;
  color: #fff;
}
</style>
