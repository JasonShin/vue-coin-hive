<template lang="html">
<div style="padding-top: 50px">
  <h1>DEMO vue-coin-hive Vue.js Component</h1>

  <p>
    <vue-coin-hive v-model="value" v-on:found='this.found' v-bind:start='this.startMiner'></vue-coin-hive>
    <strong>{{ leftChars }}</strong>
  </p>

  <p>
    {{ value }}
  </p>
</div>
</template>

<script>

import Component from '../src/Component.vue'

export default {
  components: {'vue-coin-hive': Component},
  data () {
    return {
      value: 'My Input Value',
      leftChars: 0,
      startMiner: true,
    }
  },
  mounted () {

  },
  methods: {
    found (x) {
      console.log('found miner! ', x)
    },
    accepted(x) {
      console.log('accepted miner! ', x)
    }
  }
}
</script>
