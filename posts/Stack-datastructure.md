---
title: "Stack data structure (스택 자료구조)"
date: "2020-06-05"
description: "스택이란 무엇인가? 한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO(Last In First Out) or FILO(First In Last Out) 형식의 자료구조"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Stack_data_structure.gif"
---

## 스택(Stack) 이란?

한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO(Last In First Out) or FILO(First In Last Out) 형식의 자료구조

### 장점:

- 구현이 쉽다.
- 원하는 데이터의 접근 속도가 빠르다.

### 단점:

- 데이터의 최대 개수를 미리 정해야 한다.
- 추가/삭제가 어렵다.

## 스택의 활용

- 재귀 알고리즘
- 실행 취소
- 역순 문자역 만들기
- 수식의 괄호 검사
- 미로 찾기
- 컴퓨터 메모리 관리 등

## 구현을 위한 의사코드(Pseudo Code)

```tex
1. 데이터를 담을 수 있는 객체 생성
2. 데이터의 추가/삭제 등 스택구조에 맞는 메소드함수를 만든다.
    2-1. push(date) : 데이터가 추가되는 순서에 따라 다음 키값을 지정해준다.
    2-2. pop() : 스택의 마지막 값을 가져와 삭제한다.
    2-3. peek() : 스택의 마지막 값을 가져온다.
    2-4. clear() : 스택을 전체를 비운다.(스택내 전체 데이터 삭제)
    2-5. isEmpty() : 스택내 데이터가 비어 있는지 확인한다.
    2-6. length() : 스택에 들어있는 데이터의 수를 가져온다.
```

## 구현코드(Javascript code)

<span style="color: orange">

```javascript
// stack datastructure

class Stack {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  push(data) {
    let lastKey = this.length();
    this[lastKey.toString()] = data;
    return data;
  }

  pop() {
    if (!this.isEmpty()) {
      let lastKey = (this.length() - 1).toString();
      let lastValue = this[lastKey];
      delete this[lastKey];
      return lastValue;
    } else {
      return;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      let lastKey = (this.length() - 1).toString();
      let lastValue = this[lastKey];
      return lastValue;
    } else {
      return;
    }
  }

  clear() {
    if (this.isEmpty()) {
      return "nothing to clear!";
    } else {
      for (let key in this) {
        delete this[key];
      }
      return "clear done!";
    }
  }

  isEmpty() {
    return this.length() ? false : true;
  }

  length() {
    let leng = 0;
    for (let key in this) {
      if (key) {
        leng++;
      } else {
        return 0;
      }
    }

    return leng;
  }
}

// stack test
const stack = new Stack();

console.log("empty stack : ", stack);
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", stack.isEmpty());
console.log("first push return : ", stack.push("a"));
console.log("second push return : ", stack.push("b"));
console.log("third push return : ", stack.push("c"));
console.log("length : ", stack.length());
console.log("pop return : ", stack.pop());
console.log("peek return : ", stack.peek());
console.log("isEmpty return : ", stack.isEmpty());
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());
console.log("isEmpty return : ", stack.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", stack);
console.log("length : ", stack.length());
console.log("clear return : ", stack.clear());
```

</span>
