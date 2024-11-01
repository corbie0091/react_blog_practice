import logo from "./logo.svg";
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
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
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
