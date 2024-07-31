import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { CartProvider } from "react-use-cart";
// import flowbite
import { initFlowbite } from "flowbite";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

initFlowbite();
register();

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <CartProvider>
        <App {...props} />
      </CartProvider>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
