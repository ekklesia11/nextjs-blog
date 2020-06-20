---
title: "Queue data structure (큐 자료구조)"
date: "2020-06-10"
description: "큐(Queue) 란? 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 구조 형식"
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/405px-Data_Queue.svg.png"
---

## 큐(Queue) 란?

먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 구조 형식

### 장점:

- 우선순위가 필요한 데이터를 처리할 때 유용

### 단점:

- 크기가 제한적이다.
- 큐의 앞이 비어있어도 데이터를 추가할 수 없다.

## 큐의 활용

- 캐시(Cache) 구현
- 선입선출이 필요한 대기열(인쇄 대기열, 티켓 카운터 등)
- 콜센터 고객 대기시간
- 프로세스 관리 등

## 구현을 위한 의사코드(Pseudo Code)

```tex
1. 데이터를 담을 수 있는 객체 생성
2. 데이터의 추가/삭제 등 큐구조에 맞는 메소드함수를 만든다.
    2-1. enqueue(data) : 새로운 데이터를 순서에 따라 다음 키값으로 지정해 추가한다.
    2-2. dequeue() : 큐의 첫번째 키값을 가진 데이터를 제거한다.
    2-3. first() : 가장 첫번째에 있는 데이터를 가져온다.
    2-4. last() : 가장 마지막에 있는 데이터를 가져온다.
    2-5. isEmpty() : 큐가 비어 있는지 확인한다.
    2-6. clear() : 큐내 모든 데이터를 삭제한다.
    2-7. length() : 큐내 모든 데이터의 수를 가져온다.
```

## 구현코드(Javascript code)

<span style="color: orange">

```javascript
// queue datastructure

class Queue {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  enqueue(data) {
    let lastKey = this.length();
    this[lastKey.toString()] = data;
    return data;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let firstValue = this["0"];
      delete this["0"];
      for (let key in this) {
        let newKey = Number(key) - 1;
        this[newKey] = this[key];
        delete this[key];
      }
      return firstValue;
    } else {
      return;
    }
  }

  first() {
    return this["0"];
  }

  last() {
    return this.isEmpty() ? undefined : this[(this.length() - 1).toString()];
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

// queue test
const queue = new Queue();

console.log("empty queue : ", queue);
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", queue.isEmpty());
console.log("first enqueue return : ", queue.enqueue("a"));
console.log("second enqueue return : ", queue.enqueue("b"));
console.log("third enqueue return : ", queue.enqueue("c"));
console.log("queue : ", queue);
console.log("length : ", queue.length());
console.log("dequeue return : ", queue.dequeue());
console.log("fisrt value return : ", queue.first());
console.log("last value return : ", queue.last());
console.log("isEmpty return : ", queue.isEmpty());
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());
console.log("isEmpty return : ", queue.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", queue);
console.log("length : ", queue.length());
console.log("clear return : ", queue.clear());
```

</span>
