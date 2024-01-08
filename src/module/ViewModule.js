/** IMPORT */
import { router } from '../router/index.js';

/** MODULE */
const ViewModule = {

    /** 패널 인덱스 */
    pageIdx: 0,
    pageBeforeIdx: 0,


    pageState: '',

    /** 패널 리스트 */
    pageData: [
        { idx: 0, name: '환영합니다', path: 'front'},
        { idx: 1, name: '정보 입력',  path: 'user-info'}
    ],

    /** 다음 패널 이동 */
    nextPage: function() {
        if (ViewModule.pageIdx >= ViewModule.pageData.length - 1) {
            return;
        }

        ViewModule.pageIdx++;
        chechPageState();

        this.pageData.forEach((item, idx) => {
            if (ViewModule.pageIdx === idx) {
                router.push({ path: item.path })
            }
        });
        ViewModule.pageBeforeIdx = ViewModule.pageIdx;
    },

    /** 이전 패널 이동 */
    prevPage: function() {
        if (ViewModule.pageIdx <= 0) {
            return;
        }

        ViewModule.pageIdx--;
        chechPageState();

        this.pageData.forEach((item, idx) => {
            if (ViewModule.pageIdx === idx) {
                router.push({ path: item.path })
            }
        });
        ViewModule.pageBeforeIdx = ViewModule.pageIdx;
    },
    
    /** 패널 이동 */
    showPage: function(path) {
        this.pageData.forEach((item) => {
            if (item.path === path) {
                console.log('페이지 이동: ', path);
                router.push({ path: path })
            }
        });
    },
}

/** LOCAL FUNCTION */
function chechPageState() {
    if (ViewModule.pageIdx > ViewModule.pageBeforeIdx) {
        ViewModule.pageState = 'next';
    } else {
        ViewModule.pageState = 'prev';
    }
    console.log(ViewModule.pageState);
}

export {
    ViewModule
}