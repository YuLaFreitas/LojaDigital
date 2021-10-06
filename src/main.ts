import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}
const firebaseConfig = {
  apiKey: "AIzaSyBNUIE_1wI-A6daYHnXGAKrNFVQK8ofdQY",
  authDomain: "testandoangular-ab902.firebaseapp.com",
  projectId: "testandoangular-ab902",
  storageBucket: "testandoangular-ab902.appspot.com",
  messagingSenderId: "29382061862",
  appId: "1:29382061862:web:58c85b595eb7b09ed99be7",
  measurementId: "G-DVN3MMSHSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
