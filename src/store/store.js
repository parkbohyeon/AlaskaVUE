import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from "./mutations";
import { actions } from "./actions";
import constants from "../assets/data/constants";

Vue.use(Vuex);

/**
 * Vue의 상태관리를 담당함
 * 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리
 * 컴포넌트 간 데이터 전달 및 이벤트 통신 등의 여러 컴포넌트의 공통 데이터 상태를 관리함
 *
 * @type {Store<{counter: number}>}
 */
export const store = new Vuex.Store({

    /**
     * component 간 공유될 data를 관리
     * 예)
     * this.$store.state.CONSTANTS;
     */
    state: {
        counter: 1,
        CONSTANTS: constants
    },
    /**
     * 각 컴포넌트에서 Vuex의 데이터를 접근할 때 중복된 코드를 반복호출 하게 될 때 여기서 정의 해 중복을 없앤다.
     * 데이터 호출에 관련된 중복 공통 로직이 정의 됨
     * 예)
     * this.$store.getters.CONSTANTS
     */
    getters: {
        CONSTANTS: state => {
            return state.CONSTANTS;
        },
        getDoubleCounter: state => {
            return state.counter * 2;
        }
    },
    mutations: mutations,
    actions: actions
});
