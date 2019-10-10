/**
 * 비 순차적 또는 비동기 처리 로직 선언
 * setTimeout()이나 서버와의 HTTP 프로토콜 통신 처리 같은 결과를 받는 타이밍이 예측되지 않는 로직 처리 담당
 * 예재는 아래와 같다
 *
 * methods에 등록
 *
 * 예)
 * this.@store.dispatch('delayFewMinutes')
 */
export const actions = {

    /**
     * 예제
    addCounter: function(context) {
        return context.commit('addCounter');
    },

    getServerData: function(context) {
        return axios.get('http://localhost:8080/api/user').then(function(){
            //...
        });
    },

    delayFewMinutes: function(context, payload) {
        return setTimeout(function () {
            context.commit('addCounter');
        }, 1000);
    }
     */
}