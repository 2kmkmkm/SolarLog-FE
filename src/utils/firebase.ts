import type { Unsubscribe } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  type MessagePayload,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const requestFcmToken = async () => {
  try {
    // 1. 권한 요청
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("알림 권한이 거부되었거나 아직 허용되지 않았습니다.");
      return null;
    }

    const registration = await navigator.serviceWorker.ready;

    // 2. 권한이 허용된 후에만 토큰 요청
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    console.log("FCM Token: ", token);
    return token;
  } catch (err) {
    console.error("FCM token register Error: ", err);
  }
};

export const onForegroundMessage = (
  cb: (payload: MessagePayload) => void
): Unsubscribe => {
  return onMessage(messaging, cb);
};
