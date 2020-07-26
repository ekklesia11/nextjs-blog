---
title: "JavaScript == vs ==="
date: "2020-07-26"
description: "자바스크립트의 == 과 === 는 무슨 차이가 있을까?"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png"
---

## 자바스크립트의 비교

자바스크립트 내부적으로 비교하는 오퍼레이터들 중에서 equality 를 비교하는 방법에는 두가지가 있다.
아마 잘 알고 있듯이, **==** vs **===** 방법으로 같음을 확인 할 수 있다.

### 더블 이퀄스: " == "

자바스크립트가 아닌 다른 언어를 사용할 줄 안다면 익숙할 것으로 생각된다. 하지만 자바스크립트에서 == 는 가벼운 비교(?) 라고 할 수 있다.
그 이유는 더블 이퀄스는 비교 가능한 타입으로 강제적으로 변환시켜 비교하기 때문이다. 예를 들어보자.

EX)

```javascript
12 == "12";
// true
```

분명 number 와 string 타입으로 다른 타입의 값을 비교했는데 결과는 참(true)으로 나온다. 이유는 string 형태의 숫자는 number type 으로 쉽게 바꿀 수 있기 때문에 내부적으로 변환시켜 비교하게 된다.
또 다른 예시로는 1 이나 0 은 true 와 false 로 쉽게 변환 할 수 있기 때문에, **1 == true** // true, **0 == false** // true 로 결과값을 주게 된다.
Falsy 한 값들은 서로서로 boolean 값으로 변환되면서 재밌는 결과를 가져온다. null, undefined, "", 0, NaN 이런 값들을 가지고 브라우저 콘솔창을 열어 테스트해보자!

\*\*type coercion : 타입 강제 변환

### 트리플 이퀄스: " === "

주로 그리고 거의 무조건 적으로 사용하는 === 은 strict 한 비교를 하게 된다. 쉽게 말해, **타입** 과 **값** 모두를 비교한다.
위의 예시 처럼 **12 === "12"** 를 하게 되면 결과는 **false** 가 나온다.
