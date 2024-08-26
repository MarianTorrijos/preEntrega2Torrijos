import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyDuoXh2mG8MtKpkJgrDu2gwe_zNFU1x8gM",
  authDomain: "torrijosmariana-56e6c.firebaseapp.com",
  projectId: "torrijosmariana-56e6c",
  storageBucket: "torrijosmariana-56e6c.appspot.com",
  messagingSenderId: "737658157741",
  appId: "1:737658157741:web:a4ffb66005d8ca299a6424",
  measurementId: "G-CJQN56FV0J"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
