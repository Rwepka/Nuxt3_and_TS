<!--HTML-->
<template>
    <div id="app1" class="app1">
        <div class="add__student">
          <div>
            Имя студента:
            <input v-model="studentName" >
          </div>
          <div>
            Возраст студента:
            <input v-model="studentAge">
          </div>
          <div>
            Средний балл студента:
            <input v-model="studentAvg">
          </div>
          <div>
            <button @click="addStudent()" class="add__student__button">Добавить</button>
          </div>
        </div>
      <div class="student__list">
        <h1 v-bind:key="student.id" v-bind:title="student.title" v-for="(student) in studentList">{{ student.title }}</h1>
      </div>
    </div>
  </template>
  
  <!-- Стили -->
  <style lang="scss">
  .add__student {
      display: grid;
      justify-content: start;
      justify-items: end;
  }
  .add__student__button {
      left: -48px;
      position: relative;
  }
  </style>
  
  <!-- Скрипт -->
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    data(){
      return {
        studentName: "",
        studentAge: "",
        studentAvg: "",
        studentList: [{
            id: 1,
            title: 'Матвей, 19, 4.5'
          },
          {
            id: 2,
            title: 'Арсен, 19, 5'
          },
          {
            id: 3,
            title: 'Алексей, 19, 3.5'
          }
        ],
      }
    },
    methods: {
      addStudent() {
        this.studentList.push({id: this.studentList[this.studentList.length - 1]?.id + 1 || 0,
        title: `${this.studentName}, ${this.studentAge}, ${this.studentAvg}`
      })
      }
    },
  })
  </script>
  