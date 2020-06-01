---
title: "Nodejs 서버 구성"
date: "2019-08-13"
description: "Node.js 환경에서 서버를 만들고, 기존에 만들었던 채팅앱에서 GET 과 POST 를 써서 데이터를 주고 받을 수 있도록 만들었다."
thumbnail: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fb5EQdD%2Fbtqy7rwFCOE%2Fg21IOozAIoF2Jm5eTQxfYk%2Fimg.jpg"
---

## MAIN ACTIVITY :

Node.js 환경에서 서버를 만들고, 기존에 만들었던 채팅앱에서 GET 과 POST 를 써서 데이터를 주고 받을 수 있도록 만들었다.

아래 코드는 다른 모듈을 사용하지 않고 node.js만을 이용해 클라이언트의 요청에 따라 처리할 수 있도록 서버를 만든 것이다. 아주 간단한 어플리케이션 서버이고 이러한 구성으로 만들어 나갈 수 있다.

<span style="color: orange"}>

```javascript
const http = require("http");

const port = 3000;
const ip = "127.0.0.1";

const server = http.createServer((request, response) => {
  const statusCode = 200;
  const headers = { "Content-Type": "application/json" };

  if (request.method === "GET" && request.url === "/") {
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(DATA));
  } else if (request.method === "POST") {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("end", () => {
      // body data handling here
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(DATA));
    });
  } else {
    response.writeHead(404, headers);
    response.end(ERROR);
  }
});

server.listen(port, ip);
```

</span>
<br/>

## Learn :

아주 작은 개념의 서버를 구성했지만 http 의 사용, request, response handling, 그리고 요청에 따라 GET 과 POST 를 구분해 데이터를 받아오고 내려줄 수 있다. 그리고 server.listen() 을 통해서 어떤 포트와 아이피주소를 열어줄수 있다. 놓치면 안된다.

## What Next :

Express 프레임워크를 사용하여 현재 작성된 node.js 서버를 리팩토링.

socket.io로 좀 더 원활한 채팅서버를 만들고 미들웨어와 라우터를 구성해 실제 채팅서버를 구현.
