<template>
    <div v-on:keydown="defaultKey" tabindex="0" ref="defaultRef">
        <h1>이 폴더에는 디폴트 뷰(페이지)가 위치함</h1>
    </div>
</template>

<script>
    export default {
        name: "DefaultView",
        mounted:function () {
            logUtil.log(this.$route.path);
            this.$refs.defaultRef.focus();
        },
        methods: {
            defaultKey: function(event) {
                let self = this;
                logUtil.log(event);
                logUtil.log('keydown : ' + event.keyCode);
                logUtil.count();

                switch(event.keyCode) {
                    case 8: // 8: "back"
                        self.$router.go(-1);
                        break;
                }

            },

        }
    }
</script>

<style scoped>

</style>
