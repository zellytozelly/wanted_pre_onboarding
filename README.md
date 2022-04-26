# wanted_pre_onboarding

### 미리보기 URL
https://five-components.netlify.app/

---
`todo`
- Toggle.js
- Tab.js
- Slider.js
- Input.js
- Dropdown.js
---
### Setting
`react` / `javascript` /  `styled-components`

---
### Toggle2

<img width='40%' src='https://user-images.githubusercontent.com/51311690/165369839-e5a2478f-bb78-4e46-a902-6a1492133e2f.gif' />

- 기능
    - 핵심요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.
    - 부가요소 : 슬라이드 애니메이션
- 방법
    - `input` `type="checkbox"`
    - `isChecked`와 `:checked`로 체크 상태를 확인하여 체크되어있을 경우 CSS 값을 바꿔주었습니다.
    - Toggle2(첫번째)와 달리 Toggle(두번째)는 활성화 되어있는 부분만 텍스트가 나타나도록 제작해보았습니다.

### Tab
<img width='60%' src='https://user-images.githubusercontent.com/51311690/165369844-092e37d7-dc06-4419-9274-dd8ce8fc3418.gif'/>

- 기능
    - 핵심요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.
    - 부가요소 : 슬라이드 애니메이션
- 방법
    - `map`함수로 배열에 담겨있던 각각의 음식 이름 목록을 만들었습니다. 
    - `index`값과 `activeIndex`값으로 현재 활성화 되어있는 항목을 찾아 해당 음식의 영문 이름을 Contents로 뿌려주었습니다. 
    - 슬라이드는 `activeIndex` 값에 일정 값을 곱하여 `left`로 위치시켰습니다.

### Slider
<img width='60%' src='https://user-images.githubusercontent.com/51311690/165369845-4ecd7ac8-b4b6-4341-83bb-e6c1e18d4eee.gif'/>

- 기능
    - 핵심요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.
    - 부가요소 : 하단 버튼과 미려한 픽셀 매칭
- 방법
    - `input` `type="range"`
    - 구분점이 될 값(1, 25, 50, 75, 100)들을 배열에 저장해두고 `map`함수로 구현했습니다.
    - `input`의 `value`로 현재 클릭한 위치를 받아와, 동그라미 위치(`left`) / 바(`linear-gradient`) / 퍼센트 바로가기 버튼을 제작하였습니다.

### Input
<img width='60%' src='https://user-images.githubusercontent.com/51311690/165369847-b765d88a-8d8c-4d9d-973e-b968bb38d231.gif'/>

- 기능
    - 핵심요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
    - 부가요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시
    - 부가요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다
- 방법
    - `input` `type="email"`
    - `input` `type="password"|"text"`
    - 이메일 / 정규 표현식으로 이메일 형식을 체크하여 올바른 경우 (+`input`창이 비어있는 경우), 체크 표시의 `color`를 바꾸고 경고문구를 `visibility: hidden`으로 바꿔주었습니다.
    - 비밀번호 / 눈 아이콘을 누르면 `input`의 타입을 `password`를 `text`로 토글하여 비밀번호를 볼 수 있도록 하였습니다.

### Dropdown
<img width='50%' src='https://user-images.githubusercontent.com/51311690/165369849-909919b1-2a0f-4a42-a10a-42b950e954af.gif'/>

- 기능
    - 핵심요소 : 드롭다운을 누르면 선택창이 펼쳐지고, 아무거나 골라 클릭하면 선택된 항목으로 변경됨
    - 부가요소 : 키워드 필터 기능 구현
- 방법
    - `input` `type="text"`
    - `filter`, `toLowerCase()`, `includes`와 `map`함수로 검색을 한 값들을 보여주었습니다.
    - 검색한 값을 클릭하거나 선택한 값을 보여주는 칸을 클릭한 경우, `setIsOpen(false)`로 아래 검색&선택창을 닫아주었습니다.


