# ☀️ SolarLog  
AI 기반 태양광 발전 현황 관리 PWA 플랫폼

## 📌 Overview
SolarLog는 태양광 패널 소유자가 **태양광 발전 현황 데이터를 체계적으로 관리**할 수 있도록 돕는  
웹 기반 **PWA(Progressive Web App) 플랫폼**입니다.

실시간 발전량 모니터링을 중심으로  
탄소(CO₂) 절감량 분석, **AI 기반 태양광 패널 결함·오염 감지**,  
**잔여 수명 예측 모델을 활용한 성능 분석**을 제공하여  
**신재생 에너지 관리의 효율성과 안정성**을 높이는 것을 목표로 설계되었습니다.

YOLOv8 기반 결함·오염 탐지 모델과 LSTM 기반 잔여 수명 예측 모델에서 도출된 결과를  
대시보드 시각화와 **FCM 실시간 푸시 알림**으로 연동하여,  
사용자가 발전 상태를 즉시 인지하고 대응할 수 있는  
**실사용 중심의 에너지 관리 서비스**로 구현했습니다.

## 👥 Team
- 프론트엔드/디자인 1명
- 백엔드 2명
- AI·Data 2명

## 🧑‍💻 My Role
- 프로젝트 **기획, 디자인, 프론트엔드 전반 전담**
- Figma 기반 UI/UX 설계 및 디자인 시스템 구성
- React + TypeScript 기반 프론트엔드 구조 설계 및 구현
- Redux-toolkit을 활용한 사용자 인증 토큰 및 패널 정보 전역 상태 관리
- Tanstack-query를 활용한 발전량·날씨 데이터 페칭, 캐싱, 동기화 처리
- PWA 적용을 통한 설치형 웹앱 구현 및 오프라인 환경 대응
- FCM(Firebase Cloud Messaging)을 활용한 패널 결함·오염 실시간 푸시 알림 기능 개발
- Recharts를 활용한 발전량, CO₂ 절감량 데이터 시각화
- Kakao Local API 기반 패널 설치 위치 검색 및 지도 시각화
- OpenWeather API를 활용한 지역별 날씨 정보 제공
- axios 기반 비동기 API 통신 및 예외 처리
- Vite + Vercel 기반 CI/CD 파이프라인 구성 및 배포 자동화

## 🛠 Tech Stack
Design  
- Figma  

Frontend  
- React  
- TypeScript  
- Redux-toolkit  
- Tanstack-query  
- Axios  
- PWA  
- FCM  

Styling & Visualization  
- Tailwind CSS  
- Recharts  
- Iconify  
- React-Spinners  

External API  
- Kakao Local API  
- OpenWeather API  
- Daum Postcode API  

Build & Deploy  
- Vite  
- Vercel  

Collaboration  
- GitHub  
- Notion  
- Discord  

## ✨ Key Features
- 실시간 발전량 모니터링  
  - 시간대별 발전량 수치 및 그래프  
  - 설치 지역 기반 실시간 날씨 정보 제공  

- 일별 발전량 데이터  
  - 시간대별 발전량 그래프  
  - 최고 출력 시간 및 출력값 표시  
  - CO₂ 절감량 시각화  

- 월별 발전량 데이터  
  - 일별 발전량 그래프  
  - 최고 출력 일자 및 출력값 표시  
  - 누적 CO₂ 절감량 제공  

- 패널 이상 감지 및 알림  
  - AI 모델을 통한 패널 결함·오염 감지  
  - FCM 푸시 알림으로 이상 상황 즉시 전송  

- 패널 수명 및 성능 관리  
  - 패널별 잔여 수명 예측  
  - 효율 저하율 기반 현재 성능 상태 분석  

## 🔍 What I Focused On
- **AI 결과의 서비스화**
  - AI 모델의 결과를 단순 수치가 아닌 대시보드·그래프·알림 UX로 연결
- **실시간 데이터 안정성**
  - 발전량, 날씨, 알림 데이터의 동기화와 일관성 유지
- **에너지 도메인 UX**
  - 비전문 사용자도 쉽게 이해할 수 있도록 시각적 지표 중심의 UI 설계
- **PWA + 알림 통합 구조**
  - 설치형 웹앱 환경에서 실시간 알림과 화면 전환 흐름 안정화

## 🧯 Troubleshooting
- FCM 백그라운드 알림 미표시 문제  
  - `notification` payload 사용 시 커스텀 알림 로직 무시 현상 발생  
  - `data` payload만 전달하도록 수정하여 Service Worker에서 직접 파싱 처리  

- PWA와 FCM Service Worker 충돌  
  - Vite 환경에서 MIME Type 오류 및 Service Worker 등록 실패 발생  
  - PWA 캐싱과 FCM 알림 로직을 하나의 Service Worker로 통합  
  - VitePWA `injectManifest` 전략 적용으로 빌드 시 자동 등록  

## 🌱 What I Learned
- Figma 디자인을 전담하며 UI/UX 설계 역량 향상
- 외부 API(Kakao Local, OpenWeather) 결합을 통한 데이터 통합 경험
- FCM 포그라운드·백그라운드 알림 분리 처리로 상황별 알림 UX 설계 경험
- PWA 캐싱 전략을 적용해 오프라인 환경에서도 안정적으로 동작하는 서비스 구현 경험

## 🏆 Achievements
- **한전KDN 빛가람 에너지밸리 소프트웨어 작품 경진대회 최우수상 수상**
- 프론트엔드 및 UI/UX 디자인 전반 전담
- YOLOv8 기반 결함·오염 감지, LSTM 기반 수명 예측 결과를 대시보드 시각화 및 FCM 실시간 알림으로 연동한 서비스 완성
- 발전량 데이터, 날씨 API, AI 이벤트, 푸시 알림을 하나의 PWA 에너지 관리 플랫폼으로 통합 구현
