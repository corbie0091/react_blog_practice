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

  let [good, setGood] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false); //현재 상태에 대해 보관

  // [memo15]
  let [word, setWord] = useState("");

  const onRemove = (title) => {
    set글제목(글제목.filter((item) => item !== title));
  };
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
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
        <p>상세내용</p>
      </div>
      {/* [memo8] */}

      {/* [memo9] */}

      {modal ? <Modal set글제목={set글제목} 글제목={글제목} /> : null}

      {/* memo10 */}
      {/* memo11 */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  // memo14
                  e.stopPropagation();
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
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                set글제목(copy);
              }}
              // onRemove(글제목[i]);
            >
              삭제
            </button>
          </div>
        );
      })}
      {/* memo14 */}
      <input
        onChange={(e) => {
          setWord(e.target.value);
          console.log(word);
        }}
      />
      {/* memo16 */}
      <button
        onClick={() => {
          // 배열에 새 항목을 추가 할 때에는
          // spread연산자  or concat() 사용하면 된다.
          // set글제목([...글제목, word]);
          setGood(good.concat(0));

          // [memo16]
        }}
      >
        글발행
      </button>
    </div>
  );
}

// [memo5]

// [memo3,4]
// [memo12]
function Modal(props) {
  return (
    <div className="modal ">
      {/* [memo6] */}
      <h4>{props.글제목[0]}</h4>
      <p>2월 17일 발행</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.set글제목(["여자 옷 추천", "강남우동맛집", "파이썬독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

// state변경하기위해선 항상 변경함수를 사용하세요.
