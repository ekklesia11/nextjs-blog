---
title: "Django - How does it work"
date: "2019-09-20"
description: "Node.js 와 마찬가지로 MVC 플로우 같은 구성으로 장고도 세팅이 가능하다. 장고에서는 MVT 의 구성으로 되어 있고 다음과 같이 동작한다."
thumbnail: "https://miro.medium.com/max/780/0*n3Q53XmFcbOrGWgo.png"
---

## Models - Views - Template

Node.js 와 마찬가지로 MVC 플로우 같은 구성으로 장고도 세팅이 가능하다. 장고에서는 MVT 의 구성으로 되어 있고 다음과 같이 동작한다.

### 1. Models.py

장고의 모델은 노드의 모델과 같은 역할을 한다. 데이터베이스와 직접적으로 소통하고 데이터를 넣고 가져오는 파일이다. 기본적으로 클래스로 이루어지며, 메소드를 활용해 데이터를 컨트롤한다.

### 2. Views.py

노드에서의 뷰가 클라이언트 뷰에 관한 역할을 맡았었다면 장고에서는 노드의 컨트롤러와 같이 서버의 로직을 담당하는 부분이다. 겟 요청과 포스트 요청 등이 오면 함수 실행 시켜 어떤 데이터를 내려주고 받을지를 로직으로 처리한다. 또한 클라이언트의 요청에 응답하는 역할도 하면서 클라이언트에 어떤 템플릿을 보여줄 것인지 템플릿 폴더로 부터 HTML 파일을 읽어와 렌더링 해주는 역할도 한다.

### 3. Template (folder)

템플릿은 폴더로 되어 있고 장고내에서 클라이언트에 보여줄 HTML 이나 렌더링 페이지들을 담고 있다. 노드의 뷰 역할과 같다고 볼 수 있다.
