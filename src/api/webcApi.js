import router from '../router/index'
import EtcView from "../views/EtcView";
/**
 * WebContainer 중 Web Iframe간 통신부가 구현 된다.
 * 초기 구현은 WebContainer 가이드 이므로 변경 하지 않는다.
 *
 * @type {{}}
 */
export class WebcAPI {

    /**
     * 생성자
     */
    constructor(){}

    /**
     * WebContainer 부터 전달 받은 메시지가 들어오며 다른 iframe -> 현재 iframe 통신을 담당한다.
     * WebContainer가 각 WebApp가 호출을 담당
     * @param data
     */
    get receiveMessage() {
        logUtil.log("sampleHelloVue Hello World");

        let tdata = data;
        logUtil.log(tdata);

        if(tdata.focus === true) {
            let startId = tdata.id;
            logUtil.log(startId);
            router.push(EtcView);
            this.setFocus(startId);
        }
    }

    /**
     * WebApp iframe -> 타 webApp iframe 통신을 담당한다.
     * id는 선 구현된 WebApp인 경우 WebContainer를 통해 획득 가능 하며 data는 타 webApp에서 정의한 형식에 맞추어 전달한다.
     * @param id
     * @param data
     */
    sendMessage(id, data) {
        window.parent.webc.api.iframe.sendMessage(id, data);
    }

    /**
     * 포커스
     * @param id
     */
    setFocus(id) {
        window.parent.webc.api.iframe.setFocus(id);
    }
}