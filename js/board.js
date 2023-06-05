import * as gpt from "./chatgpt-interface.js";


/**
 * 게임 보드에서 사용자의 클릭 이벤트를 처리하여 게임 진행을 제어합니다.
 */
document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];
    const loadingIndicator = document.querySelector('.loading-indicator');

    let gameBoard = [[1, -1, -1], [-1, 1, 1], [1, 0, -1]]; // 게임판 2d array

    let currentPlayer = 'X';
    let gameEnded = false;

    // 보드판에서 user는 1, ai는 -1로 표현합니다.
    const user = 1;
    const ai = -1;

    /**
    * 게임 보드를 생성합니다.
    */
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => {
                if (!gameEnded && gameBoard[i][j] === 0) {
                    cell.innerText = currentPlayer;
                    gameBoard[i][j] = user;
                    checkForWin();
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

                    const userInput = {
                        role: 'user',
                        content: `User INPUT: action: start, board:${JSON.stringify(gameBoard)}.`
                    };

                    if (!gameEnded) {
                        makeAIMove(userInput);
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    }
                }
            });
            board.appendChild(cell);
            cells.push(cell);
        }
    }

    /**
     * 승자를 확인합니다.
     */
    function checkForWin() {
        // 가로 확인
        for (let i = 0; i < 3; i++) {
            if (gameBoard[i][0] !== 0 && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
                gameEnded = true;
                announceWinner(gameBoard[i][0]);
                return;
            }
        }

        // 세로 확인
        for (let j = 0; j < 3; j++) {
            if (gameBoard[0][j] !== 0 && gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j]) {
                gameEnded = true;
                announceWinner(gameBoard[0][j]);
                return;
            }
        }

        // 대각선 확인
        if (gameBoard[0][0] !== 0 && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
            gameEnded = true;
            announceWinner(gameBoard[0][0]);
            return;
        }
        if (gameBoard[0][2] !== 0 && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
            gameEnded = true;
            announceWinner(gameBoard[0][2]);
            return;
        }

        // 비겼는지 확인
        if (!gameBoard.flat().includes(0)) {
            gameEnded = true;
            announceTie();
            return;
        }
    }

    /**
     * 승자를 알립니다.
     * @param {number} player - 승리한 플레이어 (1: 사용자, -1: AI)
     */
    function announceWinner(player) {

        const messageBoard = document.querySelector('.message-board');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                gameBoard[Math.floor(a / 3)][a % 3] === player &&
                gameBoard[Math.floor(b / 3)][b % 3] === player &&
                gameBoard[Math.floor(c / 3)][c % 3] === player
            ) {
                // 승리한 셀을 하이라이트 처리합니다.
                cells[a].classList.add('winning-cell');
                cells[b].classList.add('winning-cell');
                cells[c].classList.add('winning-cell');

                setTimeout(() => {
                    if (player === 1) {
                        alert("당신이 승리했습니다!");
                    } else {
                        alert("Chat GPT가 이겼네요!");
                    }
                    cells[a].classList.remove('winning-cell');
                    cells[b].classList.remove('winning-cell');
                    cells[c].classList.remove('winning-cell');
                    resetBoard();
                }, 3000);
                break;
            }
        }
    }

    /**
     * 비김을 알립니다.
     */
    // function announceTie() {
    //     alert("비겼습니다");
    //     resetBoard();
    // }
    function announceTie() {
        const board = document.querySelector('.board');
        const tieMessage = document.createElement('div');
        tieMessage.classList.add('tie-message');
        tieMessage.innerText = '비겼습니다';
        board.appendChild(tieMessage);

        setTimeout(() => {
            tieMessage.remove();
            resetBoard();
        }, 3000);
    }




    /**
     * 게임 보드를 초기화합니다.
     */
    function resetBoard() {
        localStorage.removeItem("conversation");
        gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        cells.forEach(cell => {
            cell.innerText = "";
        });
        currentPlayer = 'X';
        gameEnded = false;
    }

    /**
     * 메시지를 화면에 표시합니다.
     * @param {string} message - 표시할 메시지
     */
    function displayMessage(message) {
        const messageBoard = document.querySelector('.message-board');
        messageBoard.innerText = message;
    }


    /**
     * AI의 움직임을 실행합니다.
     * @param {object} userInput - 사용자의 입력 정보
     */
    function makeAIMove(userInput) {
        showLoadingIndicator();
        gpt.sendToAI(userInput).then(res => {
            console.log(res);

            showLoadingIndicator();
            //보드판 비활성화; AI응답시까지
            board.style.pointerEvents = 'none';

            const aiResponse = res;

            // AI 응답에 따라 게임 보드 업데이트
            gameBoard = aiResponse.board;

            // AI의 움직임을 게임 보드에 표시
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (gameBoard[i][j] !== 0) {
                        cells[i * 3 + j].innerText = gameBoard[i][j] === -1 ? 'O' : 'X';
                    }
                }
            }
            checkForWin();
            displayMessage(aiResponse.message);
            // 보드판 활성화
            board.style.pointerEvents = 'auto';
            hideLoadingIndicator();
        });
    }

    /**
     * 로딩 인디케이터를 표시합니다.
     */
    function showLoadingIndicator() {
        loadingIndicator.style.display = 'flex';
    }

    /**
     * 로딩 인디케이터를 숨깁니다.
     */
    function hideLoadingIndicator() {
        loadingIndicator.style.display = 'none';
    }
});
