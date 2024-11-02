import "./App.css";
import { useState } from "react";

function App() {
  // [memo7]
  let post = "강남 우동 맛집";
  //  [memo1]
  let [글제목, set글제목] = useState([
    "남자 옷 추천",
    "가을 옷 추천",
    "부산 맛집 소개",
  ]);

  let [good, setGood] = useState(0);

  // function 함수() {  console.log(1); }
  // () => {  console.log(1); };
  // 이것도 함수 만드는 문법임 onClick 안에 함수 넣을 수 있음

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          // [memo2]
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
      <div className="list ">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <p>상세내용</p>
      </div>

      <Modal />
      <Moew />
      <h4>{post}</h4>
    </div>
  );
}

// [memo5]

// [memo3,4]
function Modal() {
  return (
    <div className="modal ">
      {/* [memo6] */}
      <h4>제목</h4>
      <p>2월 17일 발행</p>
      <p>상세내용</p>
    </div>
  );
}

let Moew = () => {
  return (
    <>
      <div className="modal">
        <h4>하이</h4>
        <h6>게스트</h6>
      </div>
    </>
  );
};

export default App;

// state변경하기위해선 항상 변경함수를 사용하세요.
