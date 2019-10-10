/**
 * WebContainer 중 CSS와의 통신부가 구현 된다.
 * 초기 구현은 WebContainer 가이드 이므로 변경 하지 않는다.
 *
 * @type {{}}
 */

export class CssAPI {

    constructor(){
    }

    /**
     * CSS 서버로 부터 전달 받은 메시지가 들어오며 STB(EPG)-> WebApp 통신을 담당한다.
     * WebContainer가 각 WebApp가 호출을 담당
     * @param data
     */
    receiveMessage(data) {

    }

    /**
     * CSS 서버로 STB로 메시지를 전달 하며 WebApp -> STB(EPG) 통신을 담당한다.
     * STB와는 정의된 규격으로 통신 CSP <--> WebApp 문서를 참조한다.
     * @param data
     */
    sendMessage(data) {

    }
}