---
title: "AWS S3 + CloudFront = HTTPS"
date: "2020-07-05"
description: "Amazon CloudFront는 .html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 콘텐츠를 사용자에게 더 빨리 배포하도록 지원하는 웹 서비스입니다."
thumbnail: "https://dawnbringer.net/images/blog/s3.png"
---

## CloudFront 란?

#### AWS 정의:

Amazon CloudFront는 .html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 콘텐츠를 사용자에게 더 빨리 배포하도록 지원하는 웹 서비스입니다. CloudFront는 엣지 로케이션이라고 하는 데이터 센터의 전 세계 네트워크를 통해 콘텐츠를 제공합니다. CloudFront를 통해 서비스하는 콘텐츠를 사용자가 요청하면 지연 시간이 가장 낮은 엣지 로케이션으로 라우팅되므로 콘텐츠 전송 성능이 뛰어납니다.

[https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Introduction.html](https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

## 정적 웹 호스팅 S3

클라이언트에 손쉽게 웹사이트를 호스팅 하는 방법 중 S3 를 이용하면 간편하게 웹사이트를 제공할 수 있다. Static 웹이라고 불리우는 이 방식은 html, css, js 파일들 제공함으로써 클라이언트가 보는 웹을 그려주고 동작할 수 있도록 도와준다. EC2 를 활용하거나 서버에서 해당 아이피로 요청이 들어왔을때 정적 파일들을 제공해 주는 방법을 사용하면 단순한 http 외에도 좀 더 secure 한 페이지를 제공할 수 있다. 하지만 AWS 에서 제공하는 CloudFront 를 활용하면 쉽게 https 웹을 제공할 수 있다. CloudFront 에서 디스트리뷰션을 생성하기 전에 정적 웹 호스팅 버킷을 만들어주자.

## HTTPS 제공 방법

1. 클라우드 프론트 탭에서 Create Distribution 을 선택한다.
2. Select a delivery method for your content > Web > Get Started 버튼을 클릭한다.
3. Origin Domain Name 을 포커스 하면 생성된 버킷의 주소를 선택할 수 있다.
4. 자동으로 Origin ID 가 생성되고, Origin Path 는 옵셔널이기 때문에 넘어가면 된다.
5. Viewer Protocol Policy 는 HTTP and HTTPS 로 선택하면 두 경우 모두 동작하게 하거나 HTTPS 만 동작하게 하거나 원하는 방식을 선택할 수 있다.
6. 쭈주죽 내려가서 Distribution Settings 에 있는 Alternate Domain Names(CNAMEs) 에 연결할 도메인을 입력한다.
7. SSL Certificate 에서 Custom SSL Certificate 를 선택하고 생성된 certificate 를 입력한다. 만약 생성된 certificate 가 없다면 Request or Import a Certificate with ACM 를 눌러 생성해준다.
8. 그럼 기본 세팅이 끝났다. Create Distribution 클릭!

이제 해당 디스트리뷰션의 디플로이 상태가 정상적으로 동작하는 상태가 될때 까지 기다리면 된다.
시간이 걸릴 수 있기 때문에 조급하지 않게 기다리면 된다. 배포가 되더라도 해당 도메인으로 연결되기까지 시간이 걸릴 수 있다.

S3 로 배포된 클라이언트 웹 페이지를 https 로 제공할 수 있게 됐다!
