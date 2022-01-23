# 반응형 헤더 만들기
## 완성 모습

Full Size
![Navigation bar_full](https://user-images.githubusercontent.com/95457808/150668635-4404c34e-9f30-4c45-bd35-960adea18a48.jpg)

Small Siz
![Navigation bar_small](https://user-images.githubusercontent.com/95457808/150668644-ef3f49f3-683f-4fa1-8e58-fded3129fcb2.jpg)

--------------------------------
## 개념 익히기
1) display: flex
: items들이 가로로 늘어지게 된다 

2) li(list)를 하면 점들이 표시가 된다
없애려면 list-style: none

3) padding & margin
* padding: object의 내부 여백
* margin: object의 외부 여백

4) media 쿼리
: CSS의 특정 스타일을 선택적으로 적용하고 싶을 때 (if 조건문과 비슷하다)
@media (조건){ 특정 스타일}
```@media screen and (max-width: 768px){}

=> 화면 크기가 768px이하일 때 
(화면 크기가 768px이상일 때 조건을 하고 싶으면 "min-width"를 쓰면 된다)

5) flex 방향에 따른 정렬
* flex 방향이 row: justify-content
* flex 방향이 column: align items

----------------------------------
### 참고 강의
(Youtube) 드림코딩 by 엘리 - 웹사이트 따라 만들기, 반응형 헤더편
https://www.youtube.com/watch?v=X91jsJyZofw

### 소스 사이트
* 로고 필요할 때
https://fontawesome.com/

* 폰트
https://fonts.google.com/