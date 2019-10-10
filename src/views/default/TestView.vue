<template>
    <div v-on:keydown="defaultKey">
        <div class="popup_dim">
            <div class="popup" style="width:735px; height: 551px;">
                <div class="popup_header">
                    <div class="title">알림</div>
                </div>
                <div class="popup_body">
                    <div>
                        <img alt="" :src="imgUrl">
                    </div>
                </div>
                <div class="popup_footer">
                    <div ref="defaultRef">
                        <div class="btn" tabindex="0" ><span >확인</span></div>
                        <div class="btn" tabindex="2"><span>닫기</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestView",
        data(){
            return{
                imgUrl: "http://image.itdonga.com/files/2014/02/12/01.gif",
            }
        },
        mounted:function () {
            let self = this;
            logUtil.log(this.$route.path);
            this.$refs.defaultRef.children[0].focus();
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
                    case 39: // 39: "right"
                        logUtil.log("right");
                        this.$refs.defaultRef.children[1].focus();
                        break;
                    case 37: // 37: "left",
                        logUtil.log("left");
                        this.$refs.defaultRef.children[0].focus();
                        break;
                    case 13: // 13: "enter",
                        logUtil.log("enter");
                        self.$router.go(-1);
                        break;
                }

            },

        }
    }
</script>

<style scoped>
    .popup_dim {
        position: fixed;
        width: 1280px;
        height: 720px;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        top: 0;
        left: 0;
        z-index: 1001;
    }
    .popup {
        width: 470px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        /*border: 1px solid #ffffff;*/
        background-color: #2b292c;
        padding: 32px;
        margin-right: -6px;
    }
    .btn {
        display: inline-block;
        position: relative;
        min-width: 155px;
        font-size: 18px;
        color: #988d84;
        height: 50px;
        padding: 0 15px;
        line-height: 46px;
        border: 2px solid #605751;
        background: rgba(154, 141, 130, 0.03);
        text-align: center;
        vertical-align: middle;
        margin-right: 6px;
    }
    .popup .popup_header {
        margin-bottom: 13px;
        position: relative;
        padding-top: 1px;
        padding-bottom: 28px;
    }
    .popup .popup_header .title {
        position: relative;
        font-family: "Rix고딕 EB";
        font-size: 33px;
        line-height: 34px;
        color: #fff;
        opacity: 0.75;
        text-align: center;
        letter-spacing: -1px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap
    }
    .popup .popup_body {
        margin-bottom: 38px;
    }
    .popup .popup_footer  .btn {
        margin-right: 0;
        /* transform: translate(-2px,0); */
        border: 2px solid rgba(154, 141, 130, 0.25);
    }
    :focus {
        outline: none;
        background: #f3b24c;
        color: #2a2928
    }

</style>
