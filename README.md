# 🎲 TODO_MARBLE
Google Momentum 기본 기능을 참조하여 부루마블 컨셉으로 제작한 개인 대시보드 서비스<br><br>
🌐 https://jaaninson.github.io/TODO_MARBLE

![초기화면](./img/TDM_01.PNG)<br>

---

## 🔑 적용 기능

### 1) 로그인

- localStorage API로 계정 정보 저장<br>
	- 계정 정보 : 사용자 이름, 투두리스트
		- 입력된 계정 정보는 개발자도구를 통해 데이터 삭제시 초기화면으로 이동.<br>
		  (추후 로그아웃 버튼 생성하여 해당 기능 구현 예정)
- 사용자 이름 최대 글자수 제한
- 사용자 이름 입력창 클릭시 기본 값 삭제, 컬러체인지 UI 변경

### 2) 타이머
- 현재 시간을 초단위로 실시간 업데이트
- setInterval 메서드 사용

### 3) 투두리스트
- 투두리스트 작성 기능
- 투두리스트 삭제 기능

### 4) 날씨
- OpenWeatherMap API로 날씨 정보 제공
- 국가, 지역, 지역에 따른 현재 기온 표시
- 위치 확인이 불가능할 경우 알림 메세지

## 🔑 참고자료
- 노마드코더 [바닐라 JS로 크롬 앱 만들기]

---
- To be continued..
✏컨셉에 맞는 UI 와 추가적인 기능 수정 예정
