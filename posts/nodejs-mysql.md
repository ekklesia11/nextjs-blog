---
title: "Nodejs 에서 MySQL 연결하기"
date: "2020-07-20"
description: ""
thumbnail: "https://pngimg.com/uploads/mysql/mysql_PNG10.png"
---

## Nodejs + MySQL

최근 주식 시장이 들썩들썩 했다. 각종 포털사이트나 증권앱에서 각각의 주식 정보는 상세히 확인이 가능하지만 정작 본인 자산에 대한 상세한 분석이 어려운 것 같았다. 물론, 엑셀시트를 이용해서 정리하고 업데이트 할 수도 있겠지만 실시간으로 현재가를 가져와서 각 업종별로 포트폴리오를 구성할 수 있는 페이지를 하나 만들어볼까 한다. 손으로 어느정도 정리하고 필요한 스키마를 만들었다. 이제 구현만 하면 되는데 빠르게 구현하기 위해서 서버는 노드, 프론트는 리액트를 사용할 예정이다. 그러던 와중에 오랜만에 서버쪽을 구성하려다보니 도큐먼트 없이는 아직 파바박 코딩이 되질 않는다...ㅠㅠ Expressjs 서버를 구성하고 AWS RDS 에 MySQL 를 띄웠다.(프리티어 만세)

> DB 인스턴스를 만들때 외부에서 접속이 가능하도록 설정해야만 로컬에서 작업하면서 DB 에 접근 할 수 있으므로 인바운드와 포트 설정에 유의하자.

## Code example

// index.js

<span style="color: orange">

```javascript
const express = require("express");
const cors = require("cors");
const db = require("./models/db");

const PORT = process.env.NODE_PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, err) => {
  db.query(`select * from users`, (err, result) => {
    if (err) console.log(err.message);

    // TODO here
    console.log(result);
  });
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
```

</span>
<br/>

// db.js

<span style="color: orange">

```javascript
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "AWS RDS ENDPOINT",
  user: "RDS ID",
  password: "RDS PASSWORD",
  port: "RDS PORT NUMBER",
  database: "RDS DATABASE NAME",
});

con.connect(async (err) => {
  if (err) console.log(err.message);

  let query = `create table if not exists users(
    id int(4) primary key auto_increment,
    created_at timestamp not null default current_timestamp,
    name varchar(10) not null,
    email varchar(50) not null,
    password text
  )`;
  con.query(query);

  console.log("DB Connected!");
});

module.exports = con;
```

</span>
<br/>

### 참고

<a href="https://www.mysqltutorial.org/mysql-nodejs/" target="_blank">https://www.mysqltutorial.org/mysql-nodejs/</a>
