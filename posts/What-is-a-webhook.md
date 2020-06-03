---
title: "What is a webhook?"
date: "2020-06-03"
description: "웹훅은 http 의 push API 를 활용해서 데이터를 전달하는 방식 중 하나이다."
thumbnail: "https://docs.particle.io/assets/images/webhooks-overview.png"

---

## 웹훅(Webhook)이란 무엇인가?

엇!? 웹훅이라는게 있었어? 내가 처음 들었을때 느낌이다. 훅을 걸다? 정도의 느낌으로 주기적으로 서버에서 함수를 실행 시킨다거나 일정한 동작이나 작업이 웹훅인가 했다. 웹훅의 정의를 찾다가 참고한 글에 이렇게 나와있다.

> *A webhook (also called a web callback or HTTP push API) is a way for an app to provide other applications with real-time information.*

쉽게 말해서 웹훅은 http 의 push API 를 활용해서 데이터를 전달하는 방식 중 하나이다. 새로운 데이터가 추가 되거나 기존의 데이터의 업데이트, 또는 보내고자 하는 데이터를 해당 정보를 받거나 받아야 하는 유저나 어플리케이션 정보를 url 로 가지고 있으면서 클라이언트의 요청없이 서버에서 해당 유저나 어플리케이션으로 데이터를 전달하는 것이다. 마치 푸시 알림이나 이메일, 블로그 구독과 같은 기능인 셈이다.



## 웹소켓(Websocket)과 다른건가?

YES!! 웹 소켓과는 다르다. 간단히 말해서 웹소켓의 경우 클라이언트와 서버간에 소켓을 통해 서로가 연결되어 있어야만 브로드케스팅을 하던 에밋을 하던 정보를 전달할 수 있다. 소켓 연결이 끊어지면 서버에서 url 을 모르기 때문에 어떤 유저나 어플리케이션으로 데이터를 전달해야 할지 알 수 없다. 하지만 웹훅은 새로운 데이터를 전송할 url 만 알고 있으면 서버에서 전달받은 데이터를 원하는 곳으로 보내줄 수 있다.

Request > Response 방식이 아닌 Response > Receive 방식으로 요청에 상관없이 전달 받을 수 있다. 웹훅의 장점 중 하나는 어떠한 데이터든 실시간으로 전달 받을 수 있다는 것이다. Polling 같은 방법을 사용할 수 있지만 폴링의 경우 새로운 데이터가 없으면 응답받을 정보가 없기 때문에 무의미한 요청만 날리는 셈이된다. 낭비 인듯 싶다. 이때 웹훅을 사용하면 불필요한 요청과 메모리 사용을 줄일 수 있다. 이러한 이유에서 "Reverse APIs" 라고도 불린다.



#### 레퍼런스

1. [What's a Webhook?]("https://sendgrid.com/blog/whats-webhook/#:~:text=So%2C%20what%20exactly%20is%20a,meaning%20you%20get%20data%20immediately.")

