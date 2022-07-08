<template>
  <pre style="position: absolute; top: 1rem; left: 1rem">
<div>todoListRef 长度：{{todoListRef.length}}</div>
<div>filteredList 长度：{{filteredList.length}}</div>
<div>activeNum：{{activeNum}}</div>
<div>completedNum：{{completedNum}}</div>
<div>hashRef: {{ hashRef }}</div>
<div>editingTodoRef.value.title: {{ editingTodoRef?.title }}</div>
  </pre>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        @keyup.enter="addTodo"
        v-model="newTodoRef"
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main" v-show="todoListRef.length > 0">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        :checked="handleSelectAll('get')"
        @change="handleSelectAll('set', $event.target.checked)"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list" v-for="item in filteredList" :key="item.id">
        <li
          :class="{
            completed: item.completed,
            editing: editingTodoRef === item,
          }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="item.completed" />
            <label @dblclick="handleEditing(item)">{{ item.title }}</label>
            <button class="destroy" @click="removeTodo(item)"></button>
          </div>
          <input
            class="edit"
            value="Rule the web"
            v-model="item.title"
            @blur="handleEditDone(item)"
            @keyup.enter="handleEditDone(item)"
            @keyup.esc="handleCancelEdit(item)"
          />
        </li>
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <!-- <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label>Taste JavaScript</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web" />
        </li> -->
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer" v-show="todoListRef.length > 0">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{ activeNum }}</strong> item{{
          activeNum === 1 ? "" : "s"
        }}
        left</span
      >
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a :class="hashRef === '' ? 'selected' : ''" href="#/">All</a>
        </li>
        <li>
          <a :class="{ selected: hashRef === 'active' }" href="#/active"
            >Active</a
          >
        </li>
        <li>
          <a :class="{ selected: hashRef === 'completed' }" href="#/completed"
            >Completed</a
          >
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button
        class="clear-completed"
        v-show="completedNum > 0"
        @click="removeAllCompleted"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import useTodoList from "./compositions/useTodoList.js";
import useNewTodo from "./compositions/useNewTodo.js";
import useFilterList from "./compositions/useFilterList.js";
import useEditTodo from "./compositions/useEditTodo.js";

const todoListRef = useTodoList().todoListRef;

// window.todoListRef = todoListRef; // 测试

export default {
  name: "TodoMVC",
  setup() {
    return {
      todoListRef,
      ...useNewTodo(todoListRef),
      ...useFilterList(todoListRef),
      ...useEditTodo(todoListRef),
    };
  },
};
</script>
