---
title: "Redux, subscribe(listener) vs React Redux, connect()"
date: "2020-08-11"
description: "리덕스 상태관리를 좀 더 효율적으로 할 수 있는 방법을 찾아보자. 바로 react-redux 의 connect() 를 공유한다!"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
---

참조 : [**리덕스 없이 상태 관리하기**](https://blog.chanhyun.org/posts/react-global-state-context-api)

## 리덕스(Redux) 와 리액트(React)

리덕스 스토어의 메소드 중 subscribe 를 사용하면 해당 상태의 변화를 감지할 수 있고 가져올 수 있다. 근데 저 connect() 는 무엇인가...?
리액트를 사용하는 개발자라면 그리고 리덕스 공홈에서 튜토리얼을 한번쯤 훑어봤다면 아마 본 적이 있을 것이다. react-redux 라이브러리.

개인적인 생각이지만 리덕스를 사용할때면 reducer 와 actions, container 만들어서 mapStateToProps 와 mapDispatchToProps 를 직접 손으로 작성해야 하는 이 작업이 얼마나 귀찮은 일인지 모른다. (분명 다른 개발자분들도 똑같은 생각일거라 믿고 있다.) 문서에도 나와있지만 subscribe 를 사용할 때 dispatch 를 잘못 사용하면 무한루프에 빠질 수도 있고, 디스패치가 어떤 동작 중에 subscribe 나 unsubscribe 가 되면 해당 액션이 반영이 안될 가능성도 있다. 쉽게 말해 일일이 신경쓰고 작성하지 않으면 무슨 일이 있어날 수도 있다는 얘기다. 얼마나 귀찮은 일인가...

내가 만들어준 상태를 팔로잉 하고 있으면서 변화가 일어날 때마다 가져오는건 당연한 일이지만 우리는 귀찮은 일을 없애면서 발전한다. 누군가 대신 해줄 수 있다면 부탁한번 해볼 수 있지 않을까.
그래서 react-redux 의 connect() 를 사용하면 내부적으로 subscribe 가 적용되고 상태를 관리 할 수 있다.

## react-redux 설치 및 활용

<span style="color: palegreen">

```bash
$ npm install react-redux
```

</span>
<br/>

**container.js**

<span style="color: violet">

```javascript
// react-redux 에서 connect 함수를 가져온다.
import { connect } from "react-redux";

// 객체를 반환하는 action creator 를 가져오는 이유는 해당 액션을 맵핑해주기 위함이다.
import { someActions } from "./actions";

// 스토어 있는 상태와 디스패치 액션을 받을 컴포넌트를 가져온다.
import MyComponent from "./components";

// 함수의 이름답게 스토어의 State 를 컴포넌트의 Props 로 mapping 해준다.
const mapStateToProps = (state) => ({
  storeState: state,
});

// 액션을 넘겨주는 Dispatch 를 컴포넌트의 Props 로 mapping 해준다.
const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(someActions()),
});

// connect 함수의 인자로 넘겨주고, 컴포넌트를 감싸준다.
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

</span>
<br/>

**myComponent.js**

<span style="color: violet">

```javascript
import React from "react";

const MyComponent = ({ storeState, onClick }) => {
  console.log(storeState);
  // 리덕스 스토어의 state 를 props 로 넘겨받는다.
  // 내부적으로 최적화된 subscribe(listener) 가 동작하므로 디스패치로 업데이트 될 때마다 감지된다.
  // 위에서 언급한 문제를 걱정할 필요가 없다. 굳!

  return (
    <div>
      {/* props 로 넘겨받은 디스패치 함수를 바로 사용할 수 있다! */}
      <button onClick={onClick}>디스패치</button>
    </div>
  );
};
```

</span>
<br/>

**App.js**

<span style="color: violet">

```javascript
import React from "react";

// 컴포넌트를 가져올 땐 container 에서 가져온다.
import MyComponent from "./container";

const App = () => {
  return <MyComponent />;
};
```

</span>
<br/>

이 부분이 아주아주 중요하다. 바로 매직.

**index.js**

<span style="color: violet">

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import someReducers from "./reducers";
import App from "./App";

const store = createStore(someReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

</span>
<br/>

## 마무리

container 부분이 조금 낯설고 이해가 되지 않을 수도 있다. 직접 코딩하면서 콘솔로 확인하고 테스트 해보면 금방 이해하고 활용 할 수 있다. 우린 할 수 있다.
다음엔 redux-toolkit 에 대해 알아가보자.
