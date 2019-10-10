# AlaskaVue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

## Project structure
```text
.
+-- config                                      Vue 설정 모듈
+-- public
|   +-- favicon.ico
|   +-- index.html
+-- src
|   +-- main.js
|   +-- App.vue
|   +-- assets      
|   |   +-- data          
|   |   |   +-- constants                       config 상수
|   |   |   |   +-- constants.default.js            기본 config  
|   |   |   |   +-- ....       
|   |   |   +-- constants.js                    config 통합 파일
|   |   |   +-- ...          
|   |   +-- images          
|   +-- components                              컴포넌트
|   |   +-- default                                 공통 컴포넌트 
|   |   +-- common                                  유사 컴포넌트
|   |   +-- ...                                     그 외 컴포넌트
|   +-- routes                                  라우터
|   +-- views                                   페이지
|   |   +-- default                                 공통 페이지 
|   |   +-- common                                  유사 페이지
|   |   +-- ...                                     그 외 페이지
|   +-- api                                     내부 구현 API
|   +-- lib                                     static 라이브러리
|   +-- utils                                   유틸리티
+-- .env.[MODE]                                 MODE별 환경변수   
+-- babel.config.js     
+-- package.json
+-- vue.config.js       Vue 설정 모듈을 가져와서 BUILD_TYPE별로 설정 
+-- README.md
```

<br>

## Build
개발환경, 배포환경에 따라 별도로 build 설정을 구성할 수 있는 webpack을 빌드툴로 사용한다. 
- /package.json 
    name 속성으로 라우터 네비게이션 가드로 사용한다.
    ```
    "name": "AlaskaVue",
    ```
    name(Project Name)이 경로에 들어있는지 확인한 후 라우팅을 /name 다음 주소로 설정한다.
    
- /.env.*  
    .env 파일을 이용하여 모드별(PROVIDER) 환경변수를 설정할 수 있다.
    ```
    BUILD_TYPE=dev                      // 빌드 타입
    ```
    
- /config/vue.*.js  
  Vue config의 configureWebpack 설정을 이용하여 build 시 코드를 난독화하거나 build 후 zip 파일로 압축하는 등의 기능을 사용한다. 코드를 난독화하면 보안성을 높일 수 있고 배포파일을 압축하면 배포 시 전송시간을 단축할 수 있다. 
    ```
    // production 모드로 설정하면 압축 + 난독화가 자동으로 수행된다.
    ...
    configureWebpack: {
        mode: "production"
    },
    ...
    ```
    ```
    // dist 폴더 압축
    ...
    configureWebpack: {
        plugins: [
            new ZipPlugin({
                path: __dirname + '/../distZip',
                filename: fileName,
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        ]
    }
    ...
    ```
  
  <br>

## Constants
config 상수 파일 설정
1. 고유 key 값을 정한 후 /src/assets/data/constants/ 위치에 constants.[key].js 파일을 생성한다.  

    > 주의 /src/assets/data/constants/constants.*.js의 모든 키값은 동일해야 한다.
2. /src/assets/data/constants.js 에 해당 config를 추가한다.
3. config 상수는 vuex store.state.CONSTANTS에 저장한다.




"# AlaskaVue" 
