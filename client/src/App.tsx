import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import RespostasRapidas from "./pages/RespostasRapidas";
import Kanban from "./pages/Kanban";
import Tarefas from "./pages/Tarefas";
import Contatos from "./pages/Contatos";
import Agendamentos from "./pages/Agendamentos";
import Tags from "./pages/Tags";
import ChatInterno from "./pages/ChatInterno";
import Ajuda from "./pages/Ajuda";
import Dashboard from "./pages/Dashboard";
import Relatorios from "./pages/Relatorios";
import Campanhas from "./pages/Campanhas";
import ListasContatos from "./pages/ListasContatos";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/respostas"} component={RespostasRapidas} />
      <Route path={"/kanban"} component={Kanban} />
      <Route path={"/tarefas"} component={Tarefas} />
      <Route path={"/contatos"} component={Contatos} />
      <Route path={"/agendamentos"} component={Agendamentos} />
      <Route path={"/tags"} component={Tags} />
      <Route path={"/chat"} component={ChatInterno} />
      <Route path={"/ajuda"} component={Ajuda} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/relatorios"} component={Relatorios} />
      <Route path={"/campanhas"} component={Campanhas} />
      <Route path={"/listas"} component={ListasContatos} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
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
