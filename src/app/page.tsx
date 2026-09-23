"use client";

import { useEffect, useSyncExternalStore } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import Footer from "@/components/site/Footer";
import HomePage from "@/components/site/HomePage";
import AboutPage from "@/components/site/AboutPage";
import ServicesPage from "@/components/site/ServicesPage";
import ProjectsPage from "@/components/site/ProjectsPage";
import ContactPage from "@/components/site/ContactPage";

const ROUTES = new Set(["/", "/about", "/services", "/projects", "/contact"]);

function getSnapshot(): string {
  const raw = window.location.hash.replace(/^#/, "");
  return raw && ROUTES.has(raw) ? raw : "/";
}

function getServerSnapshot(): string {
  return "/";
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function CurrentPage({ route }: { route: string }) {
  switch (route) {
    case "/about":
      return <AboutPage />;
    case "/services":
      return <ServicesPage />;
    case "/projects":
      return <ProjectsPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export default function Page() {
  const route = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader route={route} />

      <main key={route} className="flex-1">
        <CurrentPage route={route} />
      </main>

      <Footer />
    </div>
  );
}
