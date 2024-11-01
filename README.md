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
