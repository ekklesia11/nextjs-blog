---
title: "Prototype & __proto__"
date: "2020-06-20"
description: "자바스크립트에서 생성되는 모든 객체는 부모의 형태를 본따서 생성되게 된다. 자바스크립트를 객체지향 언어라고 하는 이유는 어떤 객체든 Object.prototype을 최초의 조상으로 이어져 생성되기 때문이다."
thumbnail: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
---

## 1. Prototype(프로토타입)과 __proto__(언더바언더바 프로토 언더바언더바)

여러 다른 언어들과 비슷하게 자바스크립트도 객체지향 프로그램 언어 중 하나이다. 사실 이해하는데 있어서 쉽지 않은 부분이기 때문에 콘솔창을 열고 직접 객체를 만들어가면서 공부하면 조금 더 쉽게(?) 이해할 수 있다.

자바스크립트에서 생성되는 모든 객체는 부모의 형태를 본따서 생성되게 된다. 자바스크립트를 객체지향 언어라고 하는 이유는 어떤 객체든 Object.prototype을 최초의 조상으로 이어져 생성되기 때문이다. 그 말은, 즉, 부모 객체의 부모 객체의 부모 객체로부터 프로퍼티나 메소드를 상속받게 된다는 것이다. 이것을 자바스크립트의 Inheritance(상속) 라고 한다.

먼저 생성자 함수를 사용하지 않고, 객체를 만들어보자.

<span style="color: orange;">

```javascript
  let animal = {
    class: 'dog'
  };

  console.log(animal.__proto__);
  console.log(Object.prototype);
```

</span>
<br />

animal이라는 객체를 만들고 로그로 안을 들여다 보면 프로토타입도 아닌게 뭔가 프로토타입 느낌을 가진 \_\_proto\_\_를 볼 수 있다. 이 친구는 누구냐면 내가 어디서 상속을 받고 있는지를 알려주는 좋은 친구다. 어디가서 해메지 않도록 도와준다.

위의 코드를 콘솔에서 돌려보면 animal.\_\_proto\_\_와 Object.prototype이 정확히 같다는걸 알 수 있다. 위와 같이 객체를 리터럴한 방식으로 생성하게 되면 그 객체는 자연스럽게 Object의 프로토타입을 상속받게 된다. 그렇기 때문에 오브젝트니까 오브젝트 메소드를 쓸 수 있나보다가 아니라 Object.prototype를 상속받기 때문에 메소드나 프로퍼티를 가져올 수 있는 것이다.

그렇다면 객체 리터럴로 생성하는게 아닌, 생성자 함수를 통해서 객체를 만들어보자.

<span style="color: orange;">

```javascript
  function Animal(type) {
    this.class = type;
  }

  let dog = new Animal('dog');

  console.dir(Animal);
  console.dir(dog);
```

</span>
<br />

위의 코드를 콘솔에 돌리면 Animal과 dog가 어떻게 생겨먹었는지 볼 수 있다. 여기서는 프로토타입에만 집중하면 된다. 근데 Animal에는 프로토타입이 있는데 생성자 함수를 써서 만든 객체, dog는 프로토타입이 없다?!

여기서 알 수 있듯이 생성자 함수가 만들어질 때 prototype이라는 객체가 함께 만들어진다. 그렇게 프로토타입을 가진 생성자 함수를 써서 새로운 객체를 만들게 되면, 이 새로운 객체는 부모 객체인 생성자 함수의 프로토타입을 상속받게 된다. 그래서 dog.__proto__는 Animal.prototype과 같다.

console.log(dog.\_\_proto\_\_ === Animal.prototype) // true
여기서 Animal 생성자 함수를 자세히 들여다보면 이 친구도 prototype뿐만 아니라 __proto__을 가지고 있는것을 볼 수 있다. 어디서 상속을 받고 있나 봤더니 글쎄 이 친구는 함수의 프로토타입(Function.prototype)을 상속받고 있다. 이렇게 __proto__를 타고 부모 객체의 프로토타입으로 갈 수 있고, 또 그 부모 객체의 \_\_proto\_\_를 타고 올라가면 최종적으로 Object.prototype을 만나게 된다. 이를 Prototype chain이라고 부르며, 그 끝에서 우리는 객체지향을 만나게 된다.

> " I see you. "
 
## 2. constructor 란?

프로토타입 객체는 constructor라는 프로퍼티를 갖는데 쉽게 말해 이 친구는 생성되면서 자기 자신을 가리키게 된다. 위의 Animal 예시에서 처럼 Animal 생성자 함수를 통해서 dog를 생성했을 때 dog의 constructor는 Animal 생성자 함수가 된다. 그리고 이 Animal 생성자 함수는 Function 생성자 함수를 constructor 함수로 상속받게 된다.

<span style="color: orange;">

```javascript
  console.log(Animal.prototype.constructor === Animal); // true
  console.log(dog.constructor === Animal); // true
  console.log(Animal.constructor === Function); // true
```

</span>
<br />

이렇게 프로토타입에 대해 간단히 알아봤는데 콘솔을 돌려가면서 차근차근 배우면서 이해하면 나의 정의가 생길 것이다.