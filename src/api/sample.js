/**
 *  이 폴더에는 내부 구현 API가 위치함.
 *  Axios(HTTP 클라이언트 라이브러리)를 통해 비동기 및 동기 처리 Sample을 구현 한다.
 *  npm install --save axios
 *  yarn add axios
 *  1. Axios를 통한 기본 API 통신 Templete 정의(get, post)
 *  2. 비동기 처리 예제
 *  3. 동기 처리 ( async/await ) 예제
 *
 *  todo 크로스도메인 문제
 *
 *
 */

export const sampleApi = (function () {
    var headers = {

    };

    /**
     * 비동기 get 통신 방법 예제
     * @param callback
     */
    async function sampleAsyncGet(callback) {
        logUtil.log("sampleAsyncGet");
        try {
            let response = await axios({
                method: "GET",
                url: "http://10.10.78.66:18080/datapf/v1/recommendations/related/tv/series/644872",
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'utf-8',
                    'SUBS_ID': '65686257',
                    'X-Domain-ID': 'CJHV',
                    'X-SO-CODE': '43'
                },
                data:{
                    rating: '',
                    offset: '0',
                    limit: '7'
                }
            });
            logUtil.log(response);
            let response1 = await axios({
                method: "GET",
                url: "http://10.10.78.66:18080/datapf/v1/recommendations/related/tv/series/644872",
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Encoding': 'utf-8',
                    'SUBS_ID': '65686257',
                    'X-Domain-ID': 'CJHV',
                    'X-SO-CODE': '43'
                },
                data:{
                    rating: '',
                    offset: '0',
                    limit: '7'
                }
            });
            logUtil.log(response1);
            return response;
        } catch (error) {
            logUtil.log(error);
            return error;
        }


        //axios.get('http://www.naver.com',{params:{}, headers: headers}).then((result) => {
        //    logUtil.log(`function1 main :  ${result.state}`);
        //    callback();
        //});
    };

    /**
     * 비동기 post 통신 방법 예제 raw 타
     * @param callback
     */
    async function sampleAsyncPost(callback) {
        logUtil.log("sampleAsyncPost");
        try {
            let response = await axios({
                method: "POST",
                url: "http://10.10.78.66:18080/bizpf/v1/accounts/token",
                headers: {
                    'Accept': "*/*",
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'X-Client-App-Key' : '9CQQR9V1UHJF87PMRUOD6JSLG4'
                },
                data: `grantType=password&username=65686257&password=20%3Ad5%3Abf%3Aed%3Ae2%3A1c&authDomain=CJHV`

            });
            logUtil.log(response);
            return response;
        } catch (error) {
            logUtil.error(error);
            return error;
        }
    };

    /**
     * 동기 get 통신 방법 예제
     * @param callback
     */
    function sampleGet(callback) {
        logUtil.log("sampleSyncGet");

        axios({
            method: "GET",
            url: "http://10.10.78.66:18080/datapf/v1/recommendations/related/tv/series/644872",
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': 'utf-8',
                'SUBS_ID': '65686257',
                'X-Domain-ID': 'CJHV',
                'X-SO-CODE': '43'
            },
            data:{
                rating: '',
                offset: '0',
                limit: '7'
            },
            async: false,
        })
            .then((result) =>{
                logUtil.log(result);
            })
            .catch((error) => {
                logUtil.error(error);
            });
    };

    /**
     * 동기 post 통신 방법 예제
     * @param callback
     */
    function samplePost(callback) {
        logUtil.log("sampleSyncPost");
        axios({
            method: "POST",
            url: "http://10.10.78.66:18080/bizpf/v1/accounts/token",
            headers: {
                'Accept': "*/*",
                'Content-Type' : 'application/x-www-form-urlencoded',
                'X-Client-App-Key' : '9CQQR9V1UHJF87PMRUOD6JSLG4'
            },
            async: false,
            data: `grantType=password&username=65686257&password=20%3Ad5%3Abf%3Aed%3Ae2%3A1c&authDomain=CJHV`

        })
            .then((result) =>{
                logUtil.log(result);
            })
            .catch((error) => {
                logUtil.error(error);
            });
    }

    return{
        sampleAsyncGet: sampleAsyncGet,
        sampleAsyncPost: sampleAsyncPost,
        sampleGet: sampleGet,
        samplePost: samplePost
    }
})();
