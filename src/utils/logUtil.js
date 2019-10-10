/**
 * @typeof {boolean} debug : true, false
 * @typeof {Number} debugLevel : ERROR(0), WARN(1), INFO(2), DEBUG(3)
 * @typeof {String} logPrefix : "SAMPLE"
 */
export class LogUtil {

    /**
     * 생성자
     * @typeof {boolean} debug : true, false
     * @typeof {Number} debugLevel : ERROR(0), WARN(1), INFO(2), DEBUG(3)
     * @typeof {String} logPrefix : "SAMPLE"
     */
    constructor(bool_debug, num_debugLevel, str_logPrefix) {
        this.debugMode = bool_debug;
        this.debugLevel = num_debugLevel;
        this.logPrefix = str_logPrefix;
        this.ERROR = 0;
        this.WARN = 1;
        this.INFO = 2;
        this.DEBUG = 3;

    }

    get log() {
        if(!this.isDebug(this.DEBUG)) {
            return () => { };
        }
        let logPrefix = this.logPrefix + `[${this.convertDate()}]:`;
        if (logPrefix.length) {
            return window.console.log.bind(window.console, logPrefix);
        }
        else {
            return window.console.log.bind(window.console);
        }
    }

    get info() {
        if(!this.isDebug(this.INFO)) {
            return () => { };
        }
        let logPrefix = this.logPrefix + `[${this.convertDate()}]:`;
        if (logPrefix.length) {
            return window.console.info.bind(window.console, logPrefix);
        }
        else {
            return window.console.info.bind(window.console);
        }
    }

    get warn() {
        if(!this.isDebug(this.WARN)) {
            return () => { };
        }
        let logPrefix = this.logPrefix + `[${this.convertDate()}]:`;
        if (logPrefix.length) {
            return window.console.warn.bind(window.console, logPrefix);
        }
        else {
            return window.console.warn.bind(window.console);
        }
    }

    get error() {
        if(!this.isDebug(this.ERROR)) {
            return () => { };
        }
        let logPrefix = this.logPrefix + `[${this.convertDate()}]:`;
        if (logPrefix.length) {
            return window.console.error.bind(window.console, logPrefix);
        }
        else {
            return window.console.error.bind(window.console);
        }
    }

    get count() {
        if(!this.isDebug(this.DEBUG)) {
            return () => { };
        }
        let logPrefix = this.logPrefix + `[${this.convertDate()}]:`;
        if (logPrefix.length) {
            return window.console.count.bind(window.console, logPrefix);
        }
        else {
            return window.console.count.bind(window.console);
        }
    }

    isDebug(type) {

        if((!this.debugMode) || (this.debugLevel < type)) {
            return false;
        }
        return true;
    }

    convertDate()  {
        let date = new Date();
        //let m = this.convertTime(date.getMonth()+1);
        //let d = this.convertTime(date.getDate());
        let h = this.convertTime(date.getHours());
        let i = this.convertTime(date.getMinutes());
        let s = this.convertTime(date.getSeconds());
        //return `${date.getFullYear()}-${m}-${d} ${h}:${i}:${s}`; // 날짜 포함
        return `${h}:${i}:${s}`;
//        return date.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d>9?d:'0'+d)+' '+(h>9?h:'0'+h)+':'+(i>9?i:'0'+i)+':'+(s>9?s:'0'+s); //혹시 모를 이전 브라우저 지원을 위해 남김
    }

    /**
     * 로그에 시간값 표출을 위해 제작
     * @param value
     * @returns {string}
     */
    convertTime(value) {
        let rst = value;
        return (rst>9?rst:'0'+rst);
     }
}

//
// const logUtil = /** @class */ (function () {
//
//     function LogUtil(debug, debugLevel, logPrefix) {
//         this.debugMode = debug;
//         this.debugLevel = debugLevel;
//         this.logPrefix = '';
//
//         if(logPrefix) {
//             this.logPrefix = "[" + logPrefix + "]";
//         }
//     }
//     Object.defineProperty(LogUtil.prototype, "log", {
//         get: function () {
//
//             //if (!isDebug) {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.log.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.log.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "warn", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.warn.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.warn.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//     Object.defineProperty(LogUtil.prototype, "dir", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.dir.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.dir.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "error", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.error.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.error.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "info", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.info.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.info.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "trace", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.trace.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.trace.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "count", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.count.bind(window.console, logPrefix);
//             }
//             else {
//                 return console.count.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "assert", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.assert.bind(window.console);
//             }
//             else {
//                 return console.assert.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "time", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.time.bind(window.console);
//             }
//             else {
//                 return console.time.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     Object.defineProperty(LogUtil.prototype, "timeEnd", {
//         get: function () {
//             if (!this.debugMode) {
//                 return function () { };
//             }
//             let logPrefix = this.logPrefix + `[${now()}]:`;
//             if (logPrefix.length) {
//                 return console.timeEnd.bind(window.console);
//             }
//             else {
//                 return console.timeEnd.bind(window.console);
//             }
//         },
//         enumerable: true,
//         configurable: true
//     });
//
//     function now()  {
//         let date = new Date();
//         let m = convertTime(date.getMonth()+1);
//         let d = convertTime(date.getDate());
//         let h = convertTime(date.getHours());
//         let i = convertTime(date.getMinutes());
//         let s = convertTime(date.getSeconds());
//         //return `${date.getFullYear()}-${m}-${d} ${h}:${i}:${s}`; // 날짜 포함
//         return `${h}:${i}:${s}`;
// //        return date.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d>9?d:'0'+d)+' '+(h>9?h:'0'+h)+':'+(i>9?i:'0'+i)+':'+(s>9?s:'0'+s); //혹시 모를 이전 브라우저 지원을 위해 남김
//     }
//     /**
//      * 로그에 시간값 표출을 위해 제작
//      * @param value
//      * @returns {string}
//      */
//     function convertTime(value) {
//         let rst = value;
//         return (rst>9?rst:'0'+rst);
//      }
//     return LogUtil;
// }());




// window.LogUtil = {
//     DEBUG: true,
//     DEBUG_LEVEL: 4,
//     LOG_PREFIX: "[SAMPLE]",
//
//     /**
//      * console.log 사용
//      *
//      */
//     get log(): Function {
//         if (this.DEBUG && this.DEBUG_LEVEL > 3) {
//             // Convert args to a normal array
//             let args = Array.prototype.slice.call(arguments);
//             console.log.apply(console, this.convertArgs(args));
//         }
//     },
//
//     /**
//      * console.info 사용
//      */
//     info: function() {
//
//         if (this.DEBUG && this.DEBUG_LEVEL > 2) {
//             // Convert args to a normal array
//             let args = Array.prototype.slice.call(arguments);
//             console.info.apply(console, this.convertArgs(args));
//         }
//     },
//
//     /**
//      * console.warn 사용
//      */
//     warn: function() {
//         if (this.DEBUG && this.DEBUG_LEVEL > 1) {
//             let args = Array.prototype.slice.call(arguments);
//             console.warn.apply(console, this.convertArgs(args));
//         }
//     },
//
//     /**
//      * console.err 사용
//      */
//     err: function() {
//         if (this.DEBUG && this.DEBUG_LEVEL > 0) {
//             let args = Array.prototype.slice.call(arguments);
//             console.error.apply(console, this.convertArgs(args));
//         }
//     },
//
//     /**
//      * time사용
//      */
//     time: function(value) {
//         if (this.DEBUG && this.DEBUG_LEVEL > 0) {
//             console.time(value);
//         }
//     },
//
//     timeEnd: function(value) {
//         if (this.DEBUG && this.DEBUG_LEVEL > 0) {
//             console.timeEnd(value);
//         }
//     },
//
//     now: function() {
//         let date = new Date();
//         let m = this.convertTime(date.getMonth()+1);
//         let d = this.convertTime(date.getDate());
//         let h = this.convertTime(date.getHours());
//         let i = this.convertTime(date.getMinutes());
//         let s = this.convertTime(date.getSeconds());
//         //return `${date.getFullYear()}-${m}-${d} ${h}:${i}:${s}`; // 날짜 포함
//         return `${m}-${d} ${h}:${i}:${s}`;
// //        return date.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d>9?d:'0'+d)+' '+(h>9?h:'0'+h)+':'+(i>9?i:'0'+i)+':'+(s>9?s:'0'+s); //혹시 모를 이전 브라우저 지원을 위해 남김
//     },
//
//     /**
//      * 로그 PREFIX 정보
//      * @param value
//      * @returns {*}
//      */
//     convertArgs: function(value) {
//         let rst = value;
//         rst.unshift(`${this.LOG_PREFIX}[${this.now()}][${this.callerName()}]\n:`);
//         // Convert args to a normal array
//         //let args = Array.prototype.slice.call(arguments);
//
//         // Prepend log prefix log string
//         return rst;
//     },
//
//     /**
//      * 로그에 시간값 표출을 위해 제작
//      * @param value
//      * @returns {string}
//      */
//     convertTime: function(value) {
//         let rst = value;
//         return (rst>9?rst:'0'+rst);
//     },
//
//     /**
//      * 호출 경로를 추적 기능을 제공
//      * @returns {string}
//      */
//     callerName: function () {
//         try {
//             throw new Error();
//         } catch (e) {
//             try {
//                 console.log(e);
//                 return e.stack.split('at ')[4].trimEnd();
//                 //return e.stack.split('at ')[3].split(' ')[0];
//             } catch (e) {
//                 return '';
//             }
//         }
//     },
//
//     setDebugMode: function(boolean) {
//         this.DEBUG = boolean;
//     },
//
//     setDebugLevel: function(number) {
//         this.DEBUG_LEVEL = number;
//     }
// }