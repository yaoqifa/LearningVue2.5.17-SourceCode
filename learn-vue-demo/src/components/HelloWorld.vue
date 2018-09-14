<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>firstName: {{firstName}}</p>
    <p>lastName: {{lastName}}</p>
    <p>fullName: {{fullName}}</p>
    <button @click="changeLastName">change last</button>
    <button @click="change">change nested</button>

    <ul>
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {
          name: 'aaa',
          id: 1
        },
        {
          name: 'bbb',
          id: 2
        }
      ],
      firstName: 'jhs',
      lastName: '123',
      nested: {
        a: {
          b: 1
        }
      }
    }
  },
  props: {
    msg: String
  },
  computed: {
    fullName: function () {
      return this.firstName + '  ' + this.lastName
    }
  },
  methods: {
    changeLastName () {
      this.lastName += 'a'
    },
    change () {
      this.nested.a.b = 148
    }
  },
  watch: {
    nested: {
      deep: true,
      handler (newVal) {
        /* eslint-disable */
        console.log('nested: ', newVal.a.b)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
