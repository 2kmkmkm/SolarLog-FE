import { precacheAndRoute } from "workbox-precaching";

// 새 서비스워커 바로 활성화
self.addEventListener("install", (event) => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim())
);

// PWA 캐싱
precacheAndRoute(self.__WB_MANIFEST);

// Firebase SDK 불러오기
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js"
);

// FCM init
firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
});

const messaging = firebase.messaging();

// FCM 백그라운드 알림
messaging.onBackgroundMessage((payload) => {
  const { eventType, eventDetail, alarmId } = payload.data;
  console.log("FCM 알림: ", payload);

  self.registration.showNotification(`${eventType} 감지`, {
    body: `${eventDetail}이 감지되었습니다`,
    icon: "/maskable_icon_x192.png",
    data: { alarmId },
  });
});

// 🔹 알림 클릭 처리
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const alarmId = Number(event.notification.data?.alarmId);

  event.waitUntil(
    (async () => {
      const allClients = await clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      if (allClients.length > 0) {
        const client = allClients[0];
        await client.focus();
        if (alarmId) {
          console.log("알람 ID:", alarmId);
          client.navigate(`/detection/${alarmId}`);
        } else {
          client.navigate(`/`);
        }
      } else {
        // 열린 탭이 없으면 새 창 열기
        clients.openWindow(alarmId ? `/detection/${alarmId}` : "/");
      }
    })()
  );
});
