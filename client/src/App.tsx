import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AIF from "./pages/AIF";
import IAO from "./pages/IAO";
import CrEd from "./pages/CrEd";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Remonter vers le haut quand la page change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/aif"} component={AIF} />
      <Route path={"/iao"} component={IAO} />
      <Route path={"/cred"} component={CrEd} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
