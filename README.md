우리가 왜 설치 했는가

리액트 설치

직접 수동으로 리액트 라이브러리 설치해도 되지만 ..

앱은
Create React App 라이브러리로 만드는게 유리

npm을 설치해야함 - 근데 이건 nodejs설치하면 자동으로 됨

쉽게 명령어로 다운로드가 가능

--프로젝트안에 들어있는 폴더들의 특징--

node_modules 폴더 : 구동에 필요한 라이브러리 소스코드보관함

publick : html 이미지 파일등 static파일들 모아놓는 곳

src: 코드 짜는곳(소스코드 보관함)

app.js가 메인페이지가 될 것.

보통 웹페이지는 html파일로 되어 있어야하는데
js파일로도 웹페이지를 잘 띄워줌

그이유는 App.js파일을 index.html로 잘들어가게끔
index.js파일이 도와주기 때문

package.json: 프로젝트 정보들이 포함ㅇ(이름, 버전)

- 라이브러리정보들까지 포함되어 있음

2강 :
자바스크립트 파일에서 JSX라는 언어로 html대용품으로서 구현이 가능해짐

즉 리액트에서 div같은 걸 만드려면 createElement같은걸썻어야햇음 그래서 JSX로 표현하게됨
ex) JSX = <div></div>

JSX 문법

1. div등의 태그에 class넣을떈 className
   (참고)css파일 쓰려면 상단에서 import 'css경로 잘 둬야함
2. 변수 넣을땐 {중괄호} - 데이터바인딩

생 자바스크립트면
document.querySelector('h4').innerHTML = post;
이렇게 해서 변수에 집어 넣을 수 있지만 리액트는 이런과정이 필요가 없음
그냥 {}안에 변수명을 적어주면 그 변수가 들어가짐 id속성같은데도 {}가능

3. style 넣을 떈 style={{스타일명: '값'}}이렇게 가능
<h4 style={{color: 'red'}}></h4>
그리고 font-size라고 하면 -를 마이너스로 인식하기에 fontSize이런식으로 해줘야함

css파일열기 귀찮으면 이렇게 간단히도 설정가능

3강주의점:
return()안에는 <div>태그 2개이상 병렬로하면 오류뜸

# memo1

// 자료 잠깐 저장할 땐 변수사용

// 리액트에선 state문법을 사용하는 경우가 o
// 1.import { useState }
// 2.useState(보관할 자료)
// 3.let[작명, 작명]
// a는 state에 보관했던 자료가 나옴 = 변수와 똑같이 사용가능
// b는 state 변경을 도와주는 함수임
// let [a, b] = useState("남자 코트 추천");
// let [글제목, b] = useState("남자 코트 추천");

let num = [1, 2, 3];
// 근데 1과 2가 너무 유용해서 변수로 따로 뺴고싶음
// 그럴때 Destructuring문법을 사용함
let a = num[0]; //1
let c = num[1]; //2

// 이렇게 말고 편하게 뽑아 쓸 수 있는 문법이 있음
let [d, e] = [1, 2]; // d =1 , e = 2
// let [a, b] = useState("남자 코트 추천");
// 즉, 이부분도 ㄴ [남자코트추천, 함수] 이렇게 남는다는 것임

// state문법은 언제 쓸까??
// 변수 문법이 있는데 왜 굳이??
// 차이점: 변수 문법에서 갑자기 데이터변수가 변경되면
// html이 바뀌어야하는데 자동으로 되지 않음
// 변경이 되었으니 변수도 바꿔줘라가 안된다는 것임
// 그래서 state문법에서는 그렇게 바뀌면 재렌더링이 되는 것임
// 그래서 html전체가 "자동으로 재랜더링이 된다"는 것임
// 그래서 state문법을 쓰는 것임

let [logo, setLogo] = useState("ReactBlog");
//ㄴ 복습은 좋은데 굳이 바뀌지 않는 데이터이므로 쓰지 않아도 됨
// 즉 state문법을 적절히 쓰는 것이 좋음
// 자주 변경될 거 같은 제목, 날짜 클래스명 등 이런것들을 state로 빼서 미리 저장
// 이후 state를 데이터바인딩하는 식으로 코딩해주면 된다.

// function 함수() { console.log(1); }
// () => { console.log(1); };
// 이것도 함수 만드는 문법임 onClick 안에 함수 넣을 수 있음

# memo2

// 글제목[0] = "여자 옷 추천"; // 영구적으로 수정해버림
// 그래서 array/object 다룰때 원본은 보존하는 게 좋음
// copy문법: copy로 가져오고 거기서 [0]부분을 수정
// 그것으로 글제목을 대체하는 방식
// [...글제목] : ...은 스프레드 연산자로서 다 보여줄 수 있음

// [동작원리파악1]
// state변경함수의 특징
// 기존 state == 신규 state의 경우 안바꿔줌
// 글제목 == copy 이런식으로
// Q. let copy = 글제목일땐 안됐는데.. 왜?
// why? 에너지 절약임 . 굳이 바꿀필요가 없으면 안바꿈
// [동작원리파악2]
// 리액트에서의 array/object특징: reference data type이라서..
// let arr = [1,2,3];
// 이 것은 RAM의 미지의 공간에 저장해놓고 1,2,3변수에는 그 화살표만 저장됨
// ex) 글제목[0] = '여자 코드 추천' 이런식으로 코드를 짜면
// let 글제목에서 [남자코트추천, ,,] 에서 [여자코트추천, ,,]이런식으로 바뀌긴함 근데,
// array를 수정했지 변수에 있던 화살표는 수정이 안됨
// 그리고 동작원리파악1에 의해서 글제목 에서 바뀐게 글제목 이런식으로 집어 넣으면
// 기존 state와 신규가 같기 때문에 수정버튼을 눌러도 변경이 되지 않음
// 글제목에 저장되어 있던건 화살표 밖에 없음
// 그래서 copy에 똑같은 화살표를 복사함
// 변수1번과 2번이 화살표가 같으면 변수1 변수2 비교해도 true가 나옴
// 즉 console.log(copy == 글제목) => true로 출력이됨
// 기존 state와 신규 state가 같다고 되기 떄문에 state변경이 안됨
// 이부분에 대한 해법 : [... ] 을 이용
// : 화살표를 새로 바꿔주고 괄호를 벗겨주세요 라는 뜻임 (즉 새로운 state)
// 그래서 수정버튼을 누르면 state변경이 쉽게 됨
// 정리: 1. 기존 state가 array나 object이다? = 독립적 카피본을 만들어서 수정해야함
// 2. 별개의 복사본을 만들어 그것을 set함수에 집어 넣으면 된다.

# memo3

// 컴포넌트 문법
// 더러운 html을 <Modal></Modal> 이런식으로 함
// 미래의 나, 다른 사람들이 이해하기 쉬움
// 컴포넌트 만드는 법
// function 만들고
// return()안에 html 담기
// <함수명></함수명>쓰기

# memo4

// 다른 function 바깥에 만들어야함
// 담을 내용들을 return ()안에 담고
// [참고] <div></div> <div></div>이런식으로 병렬은 x 병렬기입하고 싶으면 <div><div>해야함
// 근데 의미없는 <div>사용보단 <></> 라는 fragment문법을 사용하면 된다
// 한단어로 축약한 컴포넌트 ( Modal )을 html태그형식으로 사용하면 됨

// 컴포넌트 만들어 쓰면 좋은 점 :
// 1. 반복적인 html을 축약할 때(코드가 짧아짐)
// 2. 큰 페이지 전환에 유리(큰페이지 만들때 사용)
// 3. 자주 변경되는 html UI같은걸 컴포넌트로하면 성능상 유리

# memo5

// 변수를 만들고 함수를 하나 집어 넣어주세요 (이것도 됨 - 이것도 그냥 컴포넌트)
let Modal = () => {}

// let 으로 만들 수도 있고 const도 만들 수 있음
// const로 만들어 놓으면 나중에 실수로 변수정보를 변경시에 에러체크가 가능

# memo6

// 컴포넌트의 단점 // 여기에 state넣고 싶은데.. 어떻게 해야해 // 즉 state
가져다 쓸때 문제 생김 // A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수없음
// 그래서 모든걸 다 이렇게 컴포넌트로 만들지 말자.

# memo7

// function App() = 이것도 실은 컴포넌트임

# memo8

// 동적인 UI만드는 3step
// 1. html cass로 미리 디자인완성
// 2. UI의 현재 상태를 state로 저장 ( 자료형으로 저장 useState형식으로 받아옴)
// 3. state에 따라 UI가 어떻게 보일지 작성

다시한번 복습: 리액트에서 UI만드는 과정을 비유하면
스위치와 전등만드는 거랑 비슷하다고 보면 됩니다.
이미지참고 ( "https://codingapple-cdn.b-cdn.net/wp-content/uploads/2020/04/stoto.jpg" )

1. 일단 전등이쁘게 달아놓고
2. 스위치랑 연결하고
3. 스위치를 on으로 놓으면 불이 켜지고 off로 놓으면 불이 꺼지도록 만들어 놓는 겁니다
   그리고 나중에 필요하면 스위치조작만 하면 된느 것임
   스위치는 state, 전등은 <Modal>입니다.

# memo9

state가 보이면 숨겨주세요! true면 보여주세요!
즉 조건식을 써야함 중괄호안에는 if문을 쓸 수 없음
html공간이기때문에 안됨 그래서 if대용으로 쓸수 있는
삼항연산자를 사용해주면 됨
[참고] null은 비어있는 html로 자주 사용
즉 클릭시 state만 조절되게 해주면 됩니다.
[참고] 그냥 js였으면 버튼 누르면 모달창 html을 직접 건드림
[참고] 리액트에선 버튼(기계, 삼항연산자) 누르면 모달창 스위치(state)만 건드리게함
스위치부분ex) let [modal, setModal] = useState(false); //현재 상태에 대해 보관

# memo10

[1,2,3].map(function(){});
// [map함수]
// 모든 array자료 뒤에는 map함수를 쓸 수 있음(기본함수)
// map함수 안에는 ()안에 들어가는 함수인 콜백함수를 집어넣는다. = function(){}

// map함수특징1: array 자료 갯수만큼 함수안의 코드 실행해줌
// console.log(1)하면 1이 3번찍힘
// map함수특징2: 함수의 파라미터는 array안에 있던 자료가 됨
// [1,2,3].map(function(a) {console.log(a)})이면 1,2,3이 차례대로 찍힘
// 코드가 반복실행되면서 a가 1이되고 ,2가 되고 3이 되는 것임

// map함수특징3: return에 뭐 적으면 array로 담아줌
// [1,2,3].map(function(a){return 12321412})
// 결과: { 12321412, 12321412, 12321412}

// 이것을 이용해서 html축약이 가능
// 같은 html 반복생성하는 법은 보통은 for문법 쓰면되는데..
// 하지만 {}안에서는 for반복문을 쓸 수 없음 -> map함수를 자유롭게 사용하면 됨
// [참고] 반복문으로 html생성하면 key={html마다 다른숫자} 추가해야함
// 반복문 돌릴때마다 유니크하게 key라는 값을 가져야하기 때문임
// ex)<div className="list" key={i}>

// map함수특징4: 유용한 파라미터 2개 사용가능
: a는 데이터, i는 정수 이런식으로 사용됨
i: 반복문 돌때마다 0부터 1씩 증가하는 정수
{글제목.map(function (a, i) {
return (

<div className="list">
<h4>{글제목[i]}</h4>
<p>2월 17일 발행</p>
</div>
);
})}

# memo11

{[1, 2, 3].map(function () {
return <div>안녕</div>;
})
이는 <div>안녕</div> <div>안녕</div> <div>안녕</div>과 같다

리액트는 array안에 html담아놔도 잘 보여줌

# memo12

A함수에서 사용하는 변수를 B함수에서 사용하는 방법?
props문법 쓰면 사용가능

우리는
<App>부모컴포넌트 안에 <Modal>자식컴포넌트가 있는 것임
부모>자식 컴포넌트로 state 전송이가능함
이떄 props문법을 사용해야함

props문법 2step

1. <자식 컴포넌트> 작명={state이름}
   ex) {modal ? <Modal 작명={state이름}/> : null}
   ex) {modal ? <Modal 작명={글제목}/> : null}
2. props 파라미터 등록 후 props.작명 사용
   function Modal(props) {
   return (
   <div className="modal ">
   {/_ [memo6] _/}
   <h4>{props.작명}</h4>
   <p>2월 17일 발행</p>
   <p>상세내용</p>
   </div>
   );
   }

// 정리) 부모 -> 자식 컴포넌트로 state 전송하려면
props문법을 쓰면 되는데
// 1. <자식컴포넌트 작명={state이름}> = 귀찮으면 작명도 state이름으로 해도됨
// 2. props 파라미터 등록 후 props.작명으로 사용
// 그리고 props전송은 부모에서 자식으로만 가능
// 옆집 컴포넌트끼리는 전송 불가능, 자식에서 부모 전송도 불가능
// 컴포넌트만들어 쓰는건 자유지만 많아지면 props쓰는게 귀찮아짐

// 참고 배경이 파란색인 모달창을 쓰고 싶음
-> div에 style={{background: 'skyblue'}}
// 근데 배경을 오랜지색으로 변경하고싶음 (다양한색으로)
그러면 style={{background: props.color}}
이런식으로 받아오면됨
그러고 {modal ? <Modal color={yellow} 작명={글제목}/> : null}이렇게 props를 전송하는 식으로 해주면 됨
이런식으로 props문법을 사용
함수의 파라미터문법과 유사

props를 보낼때 일반 문자나 숫자이런 거 보낼때는
그냥 color="yellow"이런식으로 그냥 보내도 넘어감
props.color 이런 식으로 구멍을 뚫어놓으면 이제 컴포넌트 사용할 때

<Modal color={'skyblue'} /> 이러면 하늘색 모달창이 생성됩니다.

<Modal color={'orange'} /> 이러면 오렌지색 모달창이 생성됩니다.

그래서 비슷한 컴포넌트를 또 만들 필요가 없어지는 것입니다.

# memo13

input 태그
<input></input>

종류 : type="text" , "range", "checkbox" ... 등등
ex) <input type="text"/>

cf) select태그 ( 드롭다운기능있음 )
textarea태그 : 큰 input박스가 있음

<input>에 뭔가 입력시 특정 코드실행하고 싶으면 ?이벤트핸들러: onChange/ onInput 하면 실행이 됨
ex) <input onChange={()=>{ ??? }}>

이벤트핸들러는 매우많음..그때그때파악 지금은 예시)
onClick은 요소를 눌럿을때
onChange는 값을 넣을때마다 코드 실행 (onInput도 유사)
ex)console.log(1)을 안에 집어넣으면 입력때마다 1이 출력

onMouseOver={} 이 인풋에 마우스를 갖다 댔을때 실행

onScroll={} 태그가 스크롤바가 있고 그것을 조작할때 마다 코드 실행

복습해야할 것

- state만드는법
- props 전송하는 법
- 컴포넌트 만드는 법
- UI만드는 step

input태그의 주의할 점
: input에 입력한 값 가져오는 법
<input onChange={(e)=>{ ??? }}/>
e
ㄴ 지금 발생하는 이벤트에 관련한 여러 기능이 담겨 있음
<input onChange={(e)=>{ e.target }}/>// 인폿태그
<input onChange={(e)=>{ e.target.value }}/> // 인풋태그에 입력한 값

<input
onChange={(e) => {
console.log(e.target.value);
}}
/>
입력할때마다 콘솔에 찍히는 거 관찰이 가능

# memo14

응용 ( 생 자바스크립트 편 즉 리액트에 js문법들어가있음 )

<div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...good];
                  copy[i] += 1;
                  setGood(copy);
                  console.log(copy);
                }}
              >
                👍
              </span>{" "}
              {good[i]}
            </h4>

            <p>2월 17일 발행</p>
          </div>

여기서 span 태그의 따봉아이콘만 눌러도 숫자가 올라감 분명 h4에 onClick걸었는데..
즉 클릭을 한번 한게 아니라 span1번 h4 1번 div 1번
이런식으로 누른것임

즉 클릭 이벤트는 상위html로 퍼지게 되는 것임
= [이벤트 버블링]

이를 막고 싶다면 e.stopPropagation()
내 상위요소에 퍼지는 것을 막아줌
예시)
<span
onClick={(e) => {
// memo14
e.stopPropagation();
let copy = [...good];
copy[i] += 1;
setGood(copy);
console.log(copy);
}}

> 따봉아이콘</span>

# memo15

<input>에 입력한 값 저장하려면 ?
보통 변수 또는 state에 저장해둔다.
./App.js

let [word, setWord] = useState();

<input
onChange={(e) => {
setWord(e.target.value);
console.log(word);
}}
/>

input태그에 a 입력하면 콘솔창에 a가 안뜬다? whY?
[참고] state변경함수는 늦게 처리되기 때문
늦게 처리됨 ( 비동기처리 특성때문 )
즉 setWord처리이전에 console함수가 처리되어서 그럼
즉 state처리는 잘된 것임

# memo16

문제1. 글발행버튼만들기
<button
onClick={() => {
// 배열에 새 항목을 추가 할 때에는
// spread연산자 or concat() 사용하면 된다.
set글제목([...글제목, word]);
setGood(good.concat(0));
}} >
글발행
</button>

해답:
// 답안: array를 건드릴때 copy를 시켜놓고 진행하자
// unshift 함수활용해서 추가해주면 된다.
let copy = [...글제목];
copy.unshift(word);
set글제목(copy);
[참고] 왜 새로고침하면 없어질까?

- 새로고침시에 html.js파일이 다시 읽어서 그런 것 (초기화됨)
- 서버에 연결해서 데이터베이스 화해놓으면 안없어짐

문제2. 글마다삭제버튼만들기
내풀이 onRemove함수를 만들어놓고 onClick시에 실행시키도록진행
onRemove(글제목)해놓으면
그 해당 글만 제외하고 다 표현하도록 진행시키기위해
filter함수를 이용해서 조회한후 같은 부분만 없애도록 진행 => setState함수에 의해 재랜더링 진행 -> 삭제완료
const onRemove = (title) => {
set글제목(글제목.filter((item) => item !== title));
};

해답:
state 즉 switch만 건들어주면 된다.
내가 원하는 자료만 빼버리면 n-1의 자료들을 보여줄것이다
array자료바꾸려면 array먼저 copy본 복사

let copy = [...글제목];
copy.splice(i, 1); <i번 째 항목을 삭제함
set글제목(copy);

# memo17

// class 문법(옛날문법) 변수랑 함수를 많이 보관할 수 있는통
// 3개의 함수가 필요함 : constructor(), super(), render()
// class 컴포넌트에서 state만드려면?
// constructor() { super() this.state = { name: "kim", age: 20 }}
// 객체형식으로 저장해주면 됨
// 그리고 {this.state.age} 이런식으로 활용해주면 됨
// class state수정은 기존 state를 버튼을 누르면 바뀌게해줌 ( 갈아치워주는게 아니라 변경사항만 반영 )
// 즉 차이점만 분석해서 변경해줌 this.setState({ age: 200 }); 이런식으로 setState함수를 활용
// class 컴포넌트에서 props :
// 부모가 데이터를 props로 자식에게 전달해줄 수 있는데,
// constructor(props) { super(props); } 이런식으로 받고
// 나중에 return() 에서 사용시엔 {this.props}로 받음
