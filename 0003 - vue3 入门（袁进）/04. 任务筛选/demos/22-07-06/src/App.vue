<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model="newTodoRef"
        @keyup.enter="addNewTodo"
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
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
        <li
          v-for="item in filteredTodoListRef"
          :key="item.id"
          :class="{ completed: item.completed }"
        >
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              @click="item.completed = !item.completed"
              :checked="item.completed"
            />
            <label>{{ item.title }}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web" />
        </li>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{ remainTodoListRef.length }}</strong> item{{
          remainTodoListRef.length === 1 ? "" : "s"
        }}
        left</span
      >
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a :class="{ selected: visibleRef === 'all' }" href="#/all">All</a>
        </li>
        <li>
          <a :class="{ selected: visibleRef === 'active' }" href="#/active"
            >Active</a
          >
        </li>
        <li>
          <a
            :class="{ selected: visibleRef === 'completed' }"
            href="#/completed"
            >Completed</a
          >
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" v-show="completedTodoListRef.length > 0">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { todosRef } from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import useFilterTodo from "./composition/useFilterTodo";

export default {
  name: "App",
  setup() {
    // window.todosRef = todosRef;
    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilterTodo(todosRef),
    };
  },
};
</script>
