# TicTacToeWithChatGPT 
## :link: [View deployment](https://tic-tac-toe.sungbinlee.dev/) (OpenAI 과금으로 서비스 중단)
## :bulb: Overview
TicTacToeWithChatGPT은 ChatGPT API를 활용한 인공지능 상대 틱택토 게임입니다. 사용자와 AI 간의 턴 기반 게임을 제공하며, AI는 ChatGPT를 통해 동작합니다.
### TicTacToeWithChatGPT의 개발에는 다음과 같은 개발 스택이 사용되었습니다:

1. Front-end:
    - HTML
    - CSS
    - JavaScript

2. AI 및 자연어 처리:
    - OpenAI ChatGPT API: 인공지능 모델과의 대화를 처리하기 위한 API입니다. 사용자와 AI 간의 대화를 처리하고 AI의 응답을 받아올 수 있습니다.

위의 개발 스택을 활용하여 TicTacToeWithChatGPT를 구현했습니다. 

HTML, CSS, JavaScript를 사용하여 웹 페이지의 구조, 스타일, 동적인 기능을 구현했고, OpenAI ChatGPT API를 통해 AI와의 상호작용을 처리했습니다. 이를 통해 사용자는 웹 브라우저에서 게임을 플레이하고 AI와 대화할 수 있는 틱택토 게임을 즐길 수 있습니다.

## :movie_camera: Demo
![ezgif com-gif-maker](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/ef7bae94-8dce-4e18-a13b-ed1446de5ea5)


## :european_castle: Architecture

```
.
├── README.md
├── assets
│   ├── audio
│   │   ├── btn.m4a
│   │   ├── defeat.m4a
│   │   ├── o.m4a
│   │   ├── tie.m4a
│   │   ├── victory.m4a
│   │   └── x.m4a
│   └── img
│       ├── bezel.png
│       ├── favicon.ico
│       ├── github-logo.png
│       ├── sphere_wide.png
│       ├── volume-high.png
│       └── volume-xmark.png
├── css
│   ├── components
│   │   ├── animations.css
│   │   ├── announce.css
│   │   ├── board.css
│   │   ├── loading-indicator.css
│   │   ├── menu.css
│   │   ├── message-board.css
│   │   ├── monitor.css
│   │   ├── score-board.css
│   │   └── winning-cell.css
│   └── styles.css
├── index.html
└── js
    ├── app.js
    ├── chatgpt-interface.js
    ├── conversation.js
    └── ui.js
```
- HTML 파일: 웹 페이지의 구조와 레이아웃을 정의합니다. 게임 보드, 메시지 패널, 스코어 보드 등의 요소가 포함되어 있습니다.
- CSS 파일: 웹 페이지의 스타일을 정의합니다. 게임 보드, 메시지 패널, 애니메이션 등의 스타일링을 담당합니다.
- chatgpt-interface.js 파일: ChatGPT와의 상호 작용을 담당하는 JavaScript 파일입니다. AI와의 대화를 처리하는 sendToAI 함수가 구현되어 있습니다. 사용자의 입력을 AI로 전송하고 AI의 응답을 받아오는 기능을 제공합니다.
- ui.js 파일: UI와 관련된 기능을 담당하는 JavaScript 파일입니다. 로딩 인디케이터, 스코어 보드, 메시지 표시 등의 기능을 구현합니다.
- app.js 파일: 게임 로직을 담당하는 JavaScript 파일입니다. 게임 보드를 생성하고 사용자의 클릭 이벤트를 처리하여 게임 진행을 제어합니다. 승자를 확인하고 알림을 표시하는 함수들이 구현되어 있습니다. AI의 움직임을 실행하는 makeAIMove 함수가 구현되어 있으며, 이 함수에서는 ChatGPT를 통해 AI의 응답을 받아오고 게임 보드를 업데이트합니다.

HTML, CSS, JavaScript를 통해 웹 페이지를 구성하고, ChatGPT와의 상호 작용을 통해 AI의 움직임을 구현합니다. 사용자와 AI 간의 턴 기반 게임을 제공하여 실시간으로 게임을 진행하고 승자를 확인할 수 있습니다.

## :monocle_face: How to interact with ChatGPT?
### 챗지피티 아키텍처:

1. 사용자 입력 받기: 사용자로부터의 입력을 받아옵니다.
2. 문맥 파악: 이전 대화 내용을 기반으로 사용자의 입력을 이해하고 문맥을 파악합니다.
3. 답변 생성: 문맥 파악을 토대로 적절한 답변을 생성합니다.
4. 답변 출력: 생성된 답변을 사용자에게 출력합니다.
### 문맥 파악을 위한 대화 내용 저장:

- 챗지피티는 대화의 문맥을 파악하여 더 자연스러운 대화를 제공하기 위해 이전 대화 내용을 활용합니다.
- 대화 내용은 로컬 스토리지에 저장되어 이전 대화를 기억합니다.
- 대화가 시작될 때, 챗지피티는 로컬 스토리지에서 대화 내용을 불러옵니다. 이전 대화 내용이 없는 경우 초기 대화 내용을 설정합니다.
- 사용자 입력을 받아온 후, 해당 입력과 이전 대화 내용을 함께 저장합니다. 대화 내용은 배열이나 기타 데이터 구조로 표현될 수 있습니다.
### 대화 이어나가기:

- 대화가 이어지는 경우, 사용자의 이전 입력 및 대화 내용을 적절히 활용하여 새로운 입력을 처리합니다.
- 이전 대화 내용을 저장하여 다음 대화에서 문맥 파악에 활용합니다.
- 대화의 연속성을 유지하기 위해 로컬 스토리지에 대화 내용을 저장하고 로드합니다.

### 위의 내용을 기반으로 작성된 AI 아키텍처(conversation.js)는 다음과 같습니다:
- 사용자는 "action"과 "board" 값을 지정하여 게임 상태를 업데이트합니다.
- AI는 현재 게임 보드를 분석하고 적절한 위치에 수를 놓습니다.
- AI는 한국어로 된 메시지를 제공하며, 게임이 진행되는 동안 메시지는 계속 업데이트됩니다.
- 게임이 종료되면 AI는 "end" 액션과 최종 보드 상태, 승리 메시지를 반환합니다.

이 아키텍처를 사용하여 AI가 사용자와 틱택토 게임을 진행하고, 게임의 결과를 알려주는 대화 시나리오가 구현됩니다.

## :robot: Limitations
1. 전략 학습 부재: AI 모델은 Tic-tac-toe 게임의 최적 전략을 학습하지 않았습니다. 따라서 항상 최적의 수를 선택하지는 못할 수 있습니다.
2. 학습 데이터 한계: AI 모델의 성능은 사용된 학습 데이터의 품질과 양에 따라 영향을 받습니다. 적절한 학습 데이터가 제공되지 않으면 모델의 성능이 제한될 수 있습니다.

위와 같은 한계를 극복하기 위해서는 전문적인 게임 알고리즘을 구현하거나 AI 모델에게 게임 전략을 명시적으로 학습시킨 후 훈련시킬 필요가 있습니다.

그러나, 본 프로젝트에서 사용한 모델은 대화 시뮬레이션과 자연어 이해에 초점을 맞춘 GPT-3.5 모델로, 텍스트 기반 대화에 대한 응답을 생성하는 것이 주된 역할입니다. 따라서 Tic-tac-toe 게임 플레이의 최적 전략을 개발하거나 게임 승패를 조작하는 것은 역할의 범위를 벗어난다고 할 수 있습니다. 


## :film_strip: Review
이번 프로젝트에서 처음으로 깃허브의 태그(Tag)와 릴리즈(Release) 기능을 사용해보았습니다. 작업을 완료한 후에 기능 추가나 버그 수정과 같은 변경 작업을 마치면 해당 버전에 대한 태그를 생성하고, 해당 버전의 변경 사항을 상세히 작성하는 방식으로 진행했습니다. 이전에는 이러한 기능들의 중요성과 활용 방법을 충분히 이해하지 못했었는데, 이번 기회를 통해 그 가치를 깨닫게 되었습니다. 태그를 통해 각 버전을 식별하고 추적할 수 있으며, 릴리즈를 통해 업데이트 내용과 변경 사항을 명확하게 전달할 수 있습니다. 또한, 개발팀 내에서도 협업과 이해를 쉽게 할 수 있다는 것을 깨달았습니다.

그러나 아쉬웠던 점은 릴리즈 기능을 너무 남발했다는 점입니다. 충분한 테스트와 QA 시간을 할애하지 못해 버그와 기능 동작의 불안정성이 증가했으며, 이로 인해 릴리즈 기능의 가치가 상대적으로 하락했습니다. 만약 실제 서비스 환경이었다면 사용자들은 새로운 업데이트에 집중하기 어려웠을 것이며, 자주 변화하는 기능과 인터페이스로 인해 혼동과 불만을 겪었을 것입니다. 또한, 팀 프로젝트에서 릴리즈 주기 없이 독립적으로 작업했다면 팀원들과의 협업과 커뮤니케이션이 더욱 어려워졌을 것입니다. 릴리즈를 너무 자주 진행하다 보니 버전 관리가 복잡해지고 혼돈스러워졌습니다.

이번 경험을 토대로 앞으로는 릴리즈 주기를 명확히 정의하고 일정한 주기로 릴리즈하는 것이 중요하다고 느꼈습니다. 깃허브의 태그와 릴리즈 기능을 통해 프로젝트 관리와 협업의 효율성이 크게 향상될 것으로 기대합니다. 이러한 기능들을 앞으로도 올바르게 활용하여 프로젝트의 품질과 개발 과정의 효율성을 높이고자 합니다.

## :blush: Acknowledgments
TicTacToeWithChatGPT 는 인공지능 기반 대화형 인터페이스와 전통적인 게임을 결합한 아이디어에서 영감을 받았습니다. 웹 개발과 ChatGPT의 통합을 통해 인터랙티브하고 매력적인 게임 경험을 제공하는 방법을 보여주기 위해 만들어졌습니다. 이 프로젝트를 개발하는데 있어서 Edwin의 "Retro CRT terminal screen in CSS + JS" 글([참조: 링크](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh))은 게임 인터페이스의 일부로 사용한 레트로 CRT 터미널 스타일을 구현하는 데에 큰 영감을 주었습니다. 이 자료를 공유해주신 Edwin에게 감사의 인사를 전합니다.

##  :ledger: Changelog
- 마이너 버전이 업데이트될 때마다 개발 과정을 기록하고 변경 사항을 설명하는 로그입니다. 
- 각 버전 변경 로그에는 해당 버전의 주요 업데이트를 시각적으로 나타내기 위한 이미지도 포함되어 있습니다. 이 이미지는 해당 버전에서 추가된 기능이나 UI 개선 사항을 시각적으로 보여주는 스크린샷입니다.
- 이 로그와 통해 개발 과정을 추적하고 함께 스크린샷을 제공함으로써 변경 사항을 시각적으로 전달하며, 사용자들에게 프로젝트의 진행 상황을 더 잘 이해할 수 있도록 도움을 주는 것이 목적입니다.

### [1.5.0] - 2023-06-15
- 1.5.0 버전 배포

<img width="1920" alt="image" src="https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/7817d39e-30ab-4f60-a73b-b994cd0cd75c">|
---|

### [1.4.0] - 2023-06-13
-  1.4.0 버전 배포

<img width="1919" alt="image" src="https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/804cbbeb-2560-4e25-b6f1-3aa9deb2db68"> |
---|

### [1.3.0] - 2023-06-11
-  1.3.0 버전 배포

<img width="1920" alt="image" src="https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/f98d9cba-db83-4b91-8ee7-666cf054c84b"> |
---|
[Reference] Edwin. (2020). Retro CRT terminal screen in CSS + JS. DEV Community. ([참조: 링크](https://dev.to/ekeijl/retro-crt-terminal-screen-in-css-js-4afh))

### [1.2.0] - 2023-06-08
-  1.2.0 버전 배포

<img alt="스크린샷 2023-06-08 오후 4 25 24" src="https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/ceef517c-9bff-4fe1-b760-9792e1d92824"> | ![IMG_8113](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/daa35f7c-9851-4347-8753-da06b5b2bcad) | ![IMG_8115](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/acff491f-4acb-40bf-9710-d4989458ec1c)
---|---|---

### [1.1.0] - 2023-06-05
-  1.1.0 버전 배포

![IMG_8093](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/6df27dfa-94f0-46af-ad9c-a221afa4ca00) | ![IMG_8096](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/53c1a274-347c-4adc-b66f-cffd0343a7f6) | ![IMG_8086](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/c1abc493-6a35-4e83-b607-9bc108665519)
---|---|---

## [1.0.0] - 2023-06-02
-  1.0.0 버전 배포

![IMG_7915](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/42918aca-243b-4031-9dbf-f66de1b0f422) | ![IMG_7920](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/efbcb825-6f8c-43b9-b3ce-359fe113df38) | ![IMG_7921](https://github.com/sungbinlee/TicTacToeWithGPT/assets/52542229/3d7532ed-674c-4825-9666-ec431b2f5164)
---|---|---
