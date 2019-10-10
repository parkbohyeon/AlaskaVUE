/**
 * Vuex의 state 값을 변경하는 로직
 * 안에 정의된 로직들이 순차적으로 일어나야 각 컴포넌트의 반영 여부를 제대로 추적할 수 있음
 * commit을 통해서 제어됨
 *
 * Getter 차이
 *  1. 인자를 받아 Vuex에 전달 가능
 *  2. computed가 아닌 methods에 등록
 *
 *  Action 차이
 *  1. Mutations는 동기적 로직을 정의
 *  2. Action은 비동기적 로직을 정의
 *
 *  예) 사용 예
 *  this.@store.commit('addCounter')
 */
export const mutations = {
    /**
     * 예제
    addCounter: function(state, payload) {
        logUtil.log(payload);
        return state.counter++;
    }
     */
}