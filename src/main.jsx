import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./custom-styles.css";
import "react-tabs/style/react-tabs.css";

// Swiper CSS CDN Plugin
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AuthProvider from "./context-provider/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ParallaxProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ParallaxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
