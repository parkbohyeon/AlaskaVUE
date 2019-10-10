<template>
  <div v-on:keydown="etcSampleKey" tabindex="0" ref="etcSampleRef">
    <h1 >ETCVIEW</h1>
    <EtcSample :msg="message" :imgUrl="imgUrl" :test="test"/>
  </div>
</template>

<script>
import EtcSample from '../components/EtcSample.vue';
import {sampleApi} from "../api/sample";

export default {
  name: 'EtcView',
  components: {
    EtcSample
  },
  data(){
    return{
      message: "EtcView!!!",
      imgUrl: "http://180.182.47.142:18080/alaska/emul/img/common/logo.png",
      test: {
        test1: "test1",
        test2: "test2"
      }
    }
  },
  created:function () {
    //webc.receiveMessage("webc receiveMessage");
    //cs.sendMessage("cs sendMessage");
  },

  mounted:function () {
    logUtil.log(this.$route.path);

    this.$refs.etcSampleRef.focus();
    logUtil.log('testet');

    sampleApi.sampleAsyncGet("1");
    logUtil.log("1");
    sampleApi.sampleAsyncPost("2");
    logUtil.log("2");
    sampleApi.sampleGet("3");
    logUtil.log("3");
    sampleApi.samplePost("4");
    logUtil.log("4");

    logUtil.log("this is log level");
    logUtil.info("this is info level");
    logUtil.warn("this is warn level");
    logUtil.error("this is error level");

    logUtil.log(this.$store.state.counter);
    logUtil.log(this.$store.state.CONSTANTS);
    logUtil.log(this.$store.getters.CONSTANTS);
    logUtil.log(this.$store.getters.getDoubleCounter);

    //console.assert(one == 1, "123123123");
    //logUtil.assert(one == 2, "123123123");
  },

  destroyed:function () {
    //LogUtil.log("destoryed");
  },

  methods: {
    etcSampleKey: function(event) {
      logUtil.log(event);
      logUtil.log('keydown : ' + event.keyCode);
      logUtil.count();

      switch(event.keyCode) {
          case 40: // 40: "bottom",
              logUtil.log("bottom");
              this.$router.push('/test');
              break;
          case 37: // 37: "left",
              logUtil.log("left");
              this.$router.push('/default');
              break;
          case 39: // 39: "right"
              // history back
              logUtil.log("right");
              // self.$router.go(-1)
              break;
          case 8: // 8: "back"
              window.parent.webc.api.iframe.setFocus('iframe0');
              window.parent.webc.api.iframe.remove('iframe1');
              break;
      }

    },

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
