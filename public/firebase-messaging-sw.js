importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
});

const messaging = firebase.messaging();

// 백그라운드 푸시 알림 처리
messaging.onBackgroundMessage((payload) => {
  console.log("백그라운드 메시지 수신: ", payload);
  console.log("FCM payload: ", payload.notification);

  const { notification, data } = payload;

  const title = `${notification.title} 감지`;
  const body = `${notification.body}이 감지되었습니다`;

  self.registration.showNotification(title, {
    body,
    icon: "/maskable_icon_x192.png",
    data,
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close(); // 알람 닫기

  const alarmId = event.notification.data?.alarmId;

  event.waitUntil(
    (async () => {
      // 현재 열린 모든 창(탭) 가져오기
      const allClients = await clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      if (allClients.length > 0) {
        // 이미 열린 탭이 있으면 → 그 탭 재사용
        const client = allClients[0];
        await client.focus();
        if (alarmId) {
          client.navigate(`/detection/${alarmId}`);
        } else {
          client.navigate(`/`);
        }
      } else {
        // 아무 탭도 없으면 새로 열기
        clients.openWindow(alarmId ? `/detection/${alarmId}` : "/");
      }
    })()
  );
});
