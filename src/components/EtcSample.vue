<template>
  <div class="hello">
    <h2>ETCSample</h2>
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" :src="imgUrl">
    <h3>디폴트 컴포넌트와 커먼 컴포넌트를 제외한 나머지 컴포넌트</h3>
  </div>
</template>

<script>
  export default {
    name: 'EtcSample',
    props: {
      msg:{
        String,
        default(){return "ETC샘플"}
      },
      imgUrl: {
        String,
        default(){return "../assets/images/sample.png"}
      },
      test: {
        Object,
        default(){return {}}
      }
    },
    created:function () {

    },

    mounted:function () {

    },
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
