---
title: "Linked-list data structure (링크드리스트 자료구조)"
date: "2020-06-15"
description: "배열의 단점을 해결하고자 만든 자료구조로 몇개의 배열을 선언할 지 알 수 없기 때문에 이를 해결하기 위한 자료구조이다.
고리와 고리를 연결한 형태로 각각의 데이터가 다음 데이터가 누구인지 알고 있는 데이터 구조이다."
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/1280px-Singly-linked-list.svg.png"
---

## 링크드리스트(Linked-list) 란?

배열의 단점을 해결하고자 만든 자료구조로 몇개의 배열을 선언할 지 알 수 없기 때문에 이를 해결하기 위한 자료구조이다.
고리와 고리를 연결한 형태로 각각의 데이터가 다음 데이터가 누구인지 알고 있는 데이터 구조이다.

### 장점:

- 추가와 삭제가 용이하다.
- 미리 사이즈를 할당할 필요가 없다.

### 단점:

- 탐색 속도가 느리다.

#### 링크드 리스트는 두가지 형태로 존재할 수 있다.

Head-to-Tail search structure
헤드부터 테일까지 노드의 연결로 구조화 되어있다.
더미노드
헤드와 테일을 지정하지 않고 노드를 중심으로 연결된 자료구조 형태

> 마지막 노드(테일)는 항상 null을 가리킨다.

노드(or vertex): 각 객체, 자료
데이터필드(data field) : 데이터의 값이 저장된 공간
링크필드(link field) : 데이터의 값이 연결된 다음 노드의 정보를 가진 공간
헤드(Head) : 링크 리스트의 시작 노드
테일(Tail) : 링크 리스트의 마지막 노드로 연결된 노드가 존재하지 않는 노드

## 링크드리스트의 활용

- 웹 브라우저 방문기록
- 페이지 뒤로가기와 앞으로가기

## 구현을 위한 의사코드(Pseudo Code)

```tex
1. 데이터와 다음 데이터의 값을 가진 노드를 생성한다.
    1-1. 새 노드 생성시 다음값으로 null로 가리킨다.
    1-2. 새 링크드 리스트 생성시 객체를 생성한다.
2. 링크드 리스트에 맞는 메소드함수를 구현한다.
    2-1. append(data) :
        2-1-1. 헤드가 없으면 헤드 노드를 생성하고 null을 가리킨다.
        2-1-2. 만약 헤드가 null을 가리키면, 헤드가 새로 생성된 데이터를 가리키게 한다.
        2-1-3. 만약 헤드가 다음 데이터를 가르키고 있으면 그 다음 데이터가 새로운 데이터를 가리키게 하고 데이터를 추가한다.
    2-2. removeAt(location) : 데이터의 위치에 따라 데이터를 삭제한다.
        2-2-1. 삭제하고자 하는 데이터의 이전 데이터가 삭제하고자 하는 데이터의 다음 데이터를 가리키게 하고 삭제할 데이터는 null을 가리키게 한다.
        2-2-2. 만약 리스트의 첫번째를 삭제하려면 헤드를 다음 데이터로 바꾸고 삭제할 데이터를 삭제한다.
    2-3. indexOf(data) : 데이터를 순서대로 따라가면서 인덱스를 더해준다. 일치하는 데이터를 찾으면 인덱스를 반환한다.
    2-4. remove(data) : 데이터 값을 기준으로 삭제를 원할 때 인덱스의 값을 찾아 일치하는 값을 removeAt(index)로 삭제한다.
    2-5. insert(location, data) : 원하는 위치에 데이터를 추가할 때 인덱스 값을 기준으로 위치를 찾고 데이터를 추가한다.
    2-6. isEmpty() : 자료의 수가 0 이상이면 false를 반환한다.
    2-7. length() : 리스트내 전체 자료의 수를 반환한다.
```

## 구현코드(Javascript code)

<span style="color: orange">

```javascript
// linked-list datastructure

class LinkedList {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  append(data) {
    if (!this.head) {
      this.head = {
        data: data,
        to: null,
      };
    } else {
      let randomNodeName = Math.random().toString();
      if (this.head.to === null) {
        this.head.to = randomNodeName;
        this[randomNodeName] = {
          data: data,
          to: null,
        };
      } else {
        // get tail node
        let tailNode = this[this.head.to];
        while (tailNode.to !== null) {
          tailNode = this[tailNode.to];
        }

        tailNode.to = randomNodeName;
        this[randomNodeName] = {
          data: data,
          to: null,
        };
      }
    }

    return data;
  }

  removeAt(index) {
    if (index === 0) {
      this.head.data = this[this.head.to].data;

      let nextNode = this.head.to;
      this.head.to = this[this.head.to].to;
      delete this[nextNode];

      return 0;
    }

    let current = this.head;
    let target = this.head;
    let targetIndex = 0;
    while (targetIndex !== index) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        current = target;
        target = this[target.to];
        targetIndex++;
      }
    }

    let targetNode = current.to;
    current.to = target.to;
    delete this[targetNode];

    return `removed at ${index}`;
  }

  indexOf(data) {
    let target = this.head;
    let targetIndex = 0;
    while (target.data !== data) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        target = this[target.to];
        targetIndex++;
      }
    }

    return targetIndex;
  }

  remove(data) {
    let index = this.indexOf(data);
    this.removeAt(index);

    return `data removed!`;
  }

  insert(index, data) {
    let newKey = Math.random().toString();

    if (index === 0) {
      this[newKey] = {
        data: this.head.data,
        to: this.head.to,
      };
      this.head.data = data;
      this.head.to = newKey;

      return data;
    } else if (index === this.length() - 1) {
      return this.append(data);
    }

    let current = this.head;
    let target = this.head;
    let targetIndex = 0;
    while (targetIndex !== index) {
      if (target.to === null) {
        return "ERROR: out of index range";
      } else {
        current = target;
        target = this[target.to];
        targetIndex++;
      }
    }

    this[newKey] = {
      data: data,
      to: current.to,
    };
    current.to = newKey;

    return data;
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

// linked-list test
const linkedList = new LinkedList();

console.log("empty linkedList : ", linkedList);
console.log("length : ", linkedList.length());
console.log("clear return : ", linkedList.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", linkedList.isEmpty());
console.log("first append return : ", linkedList.append("a"));
console.log("second append return : ", linkedList.append("b"));
console.log("third append return : ", linkedList.append("c"));
console.log("forth append return : ", linkedList.append("d"));
console.log("fifth append return : ", linkedList.append("e"));
console.log("indexOf return : ", linkedList.indexOf("c"));
console.log("linkedList : ", linkedList);
console.log("length : ", linkedList.length());
console.log("removeAt return : ", linkedList.removeAt(2));
console.log("remove return : ", linkedList.remove("b"));
console.log(
  "insert at first index return : ",
  linkedList.insert(0, "first inserted data")
);
console.log("insert return : ", linkedList.insert(2, "second inserted data"));
console.log(
  "insert at the end return : ",
  linkedList.insert(4, "third inserted data")
);
console.log("isEmpty return : ", linkedList.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", linkedList);
console.log("length : ", linkedList.length());
console.log("clear return : ", linkedList.clear());
```

</span>
