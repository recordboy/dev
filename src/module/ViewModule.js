/**
 * ViewModule.js
 * 화면 전환 모듈
 */

/** IMPORT */
import { router } from '../router/index.js';

/** MODULE */
const ViewModule = {

    /** 페이지 리스트 */
    pageData: [
        { idx: 0, name: '환영합니다', path: 'front'},
        { idx: 1, name: '정보 입력',  path: 'user-info'}
    ],

    /** 페이지 이동 */
    nextPage: function(path) {
        this.pageData.forEach((item) => {
            if (item.path === path) {
                console.log('페이지 이동: ', path);
                router.push({ path: path })
            }
        });
    }
}

export {
    ViewModule
}