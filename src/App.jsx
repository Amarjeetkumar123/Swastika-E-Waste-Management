import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingActions from "./components/layout/FloatingActions";
import { navigationLinks, siteContent } from "./content/siteContent";
import { normalizePath } from "./utils/router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ProcessPage from "./pages/ProcessPage";
import CredentialsPage from "./pages/CredentialsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function renderPage(currentPath, content) {
  if (currentPath === "/") {
    return <HomePage content={content} />;
  }

  if (currentPath === "/about") {
    return <AboutPage content={content} />;
  }

  if (currentPath === "/tender-categories") {
    return <CategoriesPage content={content} />;
  }

  if (currentPath.startsWith("/tender-categories/")) {
    const slug = currentPath.replace("/tender-categories/", "");
    const category = content.categories.find((item) => item.id === slug);
    return category ? <CategoryPage category={category} /> : <NotFoundPage />;
  }

  if (currentPath === "/process") {
    return <ProcessPage content={content} />;
  }

  if (currentPath === "/credentials") {
    return <CredentialsPage content={content} />;
  }

  if (currentPath === "/contact") {
    return <ContactPage content={content} />;
  }

  return <NotFoundPage />;
}

function App() {
  const currentPath = normalizePath(window.location.pathname);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-ink)]">
      <Navbar company={siteContent.company} links={navigationLinks} currentPath={currentPath} />

      <main>{renderPage(currentPath, siteContent)}</main>

      <Footer company={siteContent.company} links={navigationLinks} />
      <FloatingActions company={siteContent.company} />
    </div>
  );
}

export default App;
