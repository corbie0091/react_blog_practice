import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
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
  // 즉, 이부분도  ㄴ [남자코트추천, 함수] 이렇게 남는다는 것임

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
  //  즉 state문법을 적절히 쓰는 것이 좋음
  // 자주 변경될 거 같은 제목, 날짜 클래스명 등 이런것들을 state로 빼서 미리 저장
  // 이후 state를 데이터바인딩하는 식으로 코딩해주면 된다.

  let [글제목, set글제목] = useState([
    "남자 옷 추천",
    "가을 옷 추천",
    "부산 맛집 소개",
  ]);

  let [good, setGood] = useState(0);

  function 함수() {
    console.log(1);
  }

  // () => {  console.log(1); };
  // 이것도 함수 만드는 문법임 onClick 안에 함수 넣을 수 있음

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
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
          //  why? 에너지 절약임 . 굳이 바꿀필요가 없으면 안바꿈

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
          // 즉 console.log(copy == 글제목)  => true로 출력이됨

          // 기존 state와 신규 state가 같다고 되기 떄문에 state변경이 안됨

          // 이부분에 대한 해법 : [... ] 을 이용
          // : 화살표를 새로 바꿔주고 괄호를 벗겨주세요 라는 뜻임 (즉 새로운 state)
          // 그래서 수정버튼을 누르면 state변경이 쉽게 됨

          // 정리: 1. 기존 state가 array나 object이다? = 독립적 카피본을 만들어서 수정해야함
          // 2. 별개의 복사본을 만들어 그것을 set함수에 집어 넣으면 된다.

          let copy = [...글제목];
          console.log(...글제목);
          console.log(글제목);
          copy[0] = "여자 옷 추천";
          set글제목(copy);
        }}
      >
        글수정
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          set글제목(copy);
        }}
      >
        가나다순정렬
      </button>
      <div className="list">
        <h4>
          {/* onClick 이벤트 핸들러를 이용해 좋아요를 구현 {}안엔 함수이름을 넣어야함 */}
          {글제목[0]}{" "}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>{" "}
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;

// state변경하기위해선 항상 변경함수를 사용하세요.
