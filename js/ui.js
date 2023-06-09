import { playerScore, tieScore, aiScore, isMuted } from "./app.js";
import { btn } from "./sounds.js";

let typingTimeout; // 타잎 메세지 중지를 위한 타임아웃 변수

// 페이지 로드가 완료되면 프리로더를 숨깁니다.
window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader-wrapper');
    preloader.style.display = 'none';
});

/**
 * 메시지를 화면에 표시합니다.
 * @param {string} message - 표시할 메시지
 */
function displayMessage(message) {
    const messageBoard = document.querySelector('.message-board');
    typeMessage(message, messageBoard);
}

/**
 * 로딩 인디케이터를 표시합니다.
 */
function showLoadingIndicator() {
    clearTimeout(typingTimeout);
    const loadingIndicator = document.querySelector('.loading-indicator');
    const messageBoard = document.querySelector('.message-board');
    typeMessage("통신중...", messageBoard);

    loadingIndicator.style.display = 'flex';
}

/**
 * 로딩 인디케이터를 숨깁니다.
 */
function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'none';
}

/**
* 점수판을 업데이트합니다.
*/
function updateScoreboard() {
    const playerScoreElement = document.getElementById('player-score-value');
    const tieScoreElement = document.getElementById('tie-score-value');
    const aiScoreElement = document.getElementById('ai-score-value');

    playerScoreElement.innerText = playerScore;
    tieScoreElement.innerText = tieScore;
    aiScoreElement.innerText = aiScore;
}

/**
* 문자 타이핑하는 함수
*/
function typeMessage(message, element) {
    const typingDelay = 100; // 각 글자가 출력되는 딜레이
    let charIndex = 0;

    function type() {
        if (charIndex < message.length) {
            element.textContent = message.substr(0, charIndex + 1);
            charIndex++;
            typingTimeout = setTimeout(type, typingDelay);
        }
    }

    type();
}

// 모바일뷰 최적화
window.addEventListener('DOMContentLoaded', function () {
    const crtElement = document.getElementById('crt');
    if (window.innerWidth < 480) {
        crtElement.style.filter = 'none'; // 모바일에서는 필터를 제거
    } else {
        crtElement.style.filter = 'url(#SphereMapTest)'; // 기본 필터 적용
    }
});


const gameRulesLink = document.querySelector('.game-rules-link');
const gameRulesContainer = document.querySelector('.game-rules-container');
const backButton = document.querySelector('.back-button');
const gameMenu = document.querySelector('.game-menu');
const game = document.querySelector('.game');
const gameStart = document.querySelector('.game-start');
const menu = document.querySelector('.menu');
const title = document.querySelector('.title');

title.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isMuted) {
        btn.play();
    }
    game.style.display = 'none';
    menu.style.display = 'block';
    title.classList.remove('animation');
});

gameStart.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isMuted) {
        btn.play();
    }
    game.style.display = 'block';
    menu.style.display = 'none';
    title.classList.toggle('animation');
});

gameRulesLink.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isMuted) {
        btn.play();
    }
    gameRulesContainer.classList.toggle('show');
    gameMenu.style.display = 'none';
});

backButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isMuted) {
        btn.play();
    }
    gameMenu.style.display = 'block';
    gameRulesContainer.classList.remove('show');
});

const muteButtonXMark = document.querySelector('.fa-volume-xmark');
const muteButtonHigh = document.querySelector('.fa-volume-high');

/**
 * 소리를 킵니다.
 */
function mute() {
    muteButtonHigh.style.display = 'none';
    muteButtonXMark.style.display = 'block';
}

/**
 * 음소거를 합니다
 */
function unmute() {
    muteButtonHigh.style.display = 'block';
    muteButtonXMark.style.display = 'none';
}

//스티키 노트
document.getElementById('sticky').addEventListener('click', fly);
function fly(event) {
    event.target.classList.toggle("fly");
}

export { typingTimeout, displayMessage, showLoadingIndicator, hideLoadingIndicator, updateScoreboard, typeMessage, mute, unmute };