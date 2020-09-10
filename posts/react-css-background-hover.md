---
title: "React 에서 CSS background 이미지는 스케일 아웃시키고 새로운 background 색상으로 덮어버리기! + 텍스트 쇼업"
date: "2020-09-10"
description: "카드 위에 마우스를 올리면 배경을 스케일 아웃시키면서 백그라운드를 입혀주는 이펙트"
thumbnail: "https://miro.medium.com/max/3200/1*8slP0diGduUQy3qk9N7HsQ.png"
---

## 리액트에서 카드 호버 이펙트 살리기

```html
<div className="card">
  <div className="container">
    <div className="background" />
    <div className="detail">
      <div className="text">텍스트</div>
    </div>
  </div>
</div>
```

```css
.card {
  width: 300px;
  height: 200px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.detail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button {
  padding: 12px 0;
  border: 1px solid #ccc;
  width: 140px;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 24px;
  margin-top: 8px;

  &:hover {
    background-color: #ccc;
  }
}

.text {
  opacity: 0;
}

.background {
  transition: all 0.5s;
  background-image: url("이미지");
  background-repeat: no-repeat;
  background-size: 140px;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 1px solid #dfe4ea;
  border-radius: 12px;
}

.container:hover {
  .detail {
    background-color: #000;

    .text {
      opacity: 1;
    }
  }

  .background {
    transform: scale(1.2);
    opacity: 0;
  }
}
```
