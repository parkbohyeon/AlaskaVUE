import Vue from 'vue';
import Router from 'vue-router';
import EtcView from '../views/EtcView';
import DefaultView from '../views/default/DefaultView';
import TestView from '../views/default/TestView';

Vue.use(Router);

export const router = new Router({
    mode : 'history',
    routes : [
        {
            name:'root',
            path:'/',
            component:EtcView
        },
        {
            name:'index',
            path:'/index.html',
            component:EtcView
        },
        {
            name:'default',
            path:'/default',
            component:DefaultView
        },
        {
            name:'test',
            path:'/test',
            component:TestView
        }
    ]
});

/**
 * 네비게이션 가드를 사용하여
 * package.json에서 정의한 name(Project Name)이 경로에 들어있는지 확인한 후
 * 라우팅을 /name 다음 주소로 설정함.
 */
const npm_package_name = require('../../package.json').name;

router.beforeEach((to, from, next) => {
    // to : 이동할 url
    // from : 현재 url
    logUtil.log('npm_package_name : ' + npm_package_name);
    logUtil.log('to.path : ' + to.path);
    if(to.path.indexOf(`/${npm_package_name}`) !== -1){
        let paths = to.path.split(`/${npm_package_name}`);
        let path = paths[paths.length-1];
        next({ path: path });
    }else{
        next();
    }
});

export default router
