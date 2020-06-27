---
title: "Graph data structure (그래프 자료구조)"
date: "2020-06-27"
description: "단순히 노드(또는 vertex)와 그 노드를 연결하는 간선(edge)을 하나로 모아놓은 자료구조이다. 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료구조로 여러 개의 고립된 부분 그래프(Isolated Subgraphs)로 구성될 수 있다."
thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/CPT-Graphs-directed-weighted-ex1.svg/1124px-CPT-Graphs-directed-weighted-ex1.svg.png"
---

## 그래프(Graph) 란?

단순히 노드(또는 vertex)와 그 노드를 연결하는 간선(edge)을 하나로 모아놓은 자료구조이다.
즉, 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료구조로 여러 개의 고립된 부분 그래프(Isolated Subgraphs)로 구성될 수 있다.
방향(directed)/무방향(undirected) 그래프 모두 존재한다.

트리 자료구조는 그래프 자료구조에 포함된다.

## 그래프의 활용

- 지하철 노선도의 최단경로
- 구글맵 최단경로
- 페이스북 팔로워 등

## 구현을 위한 의사코드(Pseudo Code)

```tex
아래와 같은 형태로 그래프를 구성하고 만든다.
1. 하나의 데이터 노드를 만들기 위해 Node constructor 함수를 만든다.
2. 데이터, 연결을 받는 데이터, 연결하는 데이터를 "from"과 "to" 배열에 담는다.
3. 해당 노드의 (value, to) 값이 Edge가 된다.
4. addNode, removeNode, addEdge, edgeList 등 필요한 메소드를 만든다.
```

### 자바스크립트 그래프 형태

```javascript
graph = {
  0: {
    data: string || any,
    from: [1, 3],
    to: [1],
  },
  1: {
    data: string || any,
    from: [0],
    to: [0, 3],
  },
  2: {
    data: string || any,
    from: [],
    to: [1],
  },
  3: {
    data: string || any,
    from: [1],
    to: [0],
  },
};
```

## 구현코드(Javascript code)

<span style="color: orange">

```javascript
// graph datastructure

class Graph {
  // possible to be omitted
  // without contructor class will create an empty object
  constructor() {}

  // methods
  addNode(data) {
    let index = this.length();
    this[index.toString()] = {
      data: data,
      from: [],
      to: [],
    };

    return data;
  }

  indexOf(data) {
    if (!this.length()) {
      return;
    }
    let targetIndex = 0;
    while (this[targetIndex.toString()].data !== data) {
      targetIndex++;
      if (targetIndex === this.length()) {
        return;
      }
    }

    return targetIndex;
  }

  addEdge(data1, data2) {
    let from = this.indexOf(data1);
    let to = this.indexOf(data2);
    if (from !== undefined && to !== undefined) {
      this[from].to.push(to);
      this[to].from.push(from);
      return [data1, data2];
    }
    return;
  }

  edgeList(data) {
    let index = this.indexOf(data);
    let list = [];

    let target = this[index.toString()];

    for (let i of target.from) {
      let edgeInfo = {
        from: i,
        weight: index + i,
      };
      list.push(edgeInfo);
    }

    for (let i of target.to) {
      let edgeInfo = {
        to: i,
        weight: index + i,
      };
      list.push(edgeInfo);
    }

    return list;
  }

  removeNode(data) {
    let index = this.indexOf(data);
    let target = this[index.toString()];

    for (let i of target.from) {
      this[i.toString()].to = this[i.toString()].to.filter((v) => index !== v);
    }

    for (let i of target.to) {
      this[i.toString()].from = this[i.toString()].from.filter(
        (v) => index !== v
      );
    }

    delete this[index.toString()];
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

// graph test
const graph = new Graph();

console.log("empty graph : ", graph);
console.log("length : ", graph.length());
console.log("clear return : ", graph.clear());

console.log("");
console.group("methods test ===============");
console.log("isEmpty return : ", graph.isEmpty());
console.log("addNode return : ", graph.addNode("a"));
console.log("addNode return : ", graph.addNode("b"));
console.log("addNode return : ", graph.addNode("c"));
console.log("addNode return : ", graph.addNode("d"));
console.log("addNode return : ", graph.addNode("e"));
console.log("indexOf return : ", graph.indexOf("c"));
console.log("addEdge return : ", graph.addEdge("a", "b"));
console.log("addEdge return : ", graph.addEdge("a", "c"));
console.log("addEdge return : ", graph.addEdge("a", "d"));
console.log("addEdge return : ", graph.addEdge("d", "e"));
console.log("addEdge return : ", graph.addEdge("e", "a"));
console.log("addEdge return : ", graph.addEdge("e", "b"));
console.log("edgeList return : ", graph.edgeList("e"));
console.log("graph : ", graph);
console.log("removeNode return : ", graph.removeNode("a"));
console.log("length : ", graph.length());
console.log("isEmpty return : ", graph.isEmpty());
console.groupEnd();
console.log("=============================");
console.log("");

console.log("after action : ", graph);
console.log("length : ", graph.length());
console.log("clear return : ", graph.clear());
```

</span>
