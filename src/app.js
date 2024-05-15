// 이제 plus 함수는 직접 접근이 불가능합니다.
// console.log(obj.plus(2, 3));

// 모듈 시스템
// import { plus } from './plus.js'
// console.log(plus(3, 3));

import './styles.css';
import tiger from './tiger.png';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${tiger}"/>`;
})
