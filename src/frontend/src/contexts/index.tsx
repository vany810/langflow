import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import { TooltipProvider } from "../components/ui/tooltip";
import { ApiInterceptor } from "../controllers/API/api";
import { SSEProvider } from "./SSEContext";
import { AuthProvider } from "./authContext";
import { LocationProvider } from "./locationContext";

import { UndoRedoProvider } from "./undoRedoContext";

export default function ContextWrapper({ children }: { children: ReactNode }) {
  //element to wrap all context
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <ReactFlowProvider>
              <LocationProvider>
                <ApiInterceptor />
                <SSEProvider>
                  <UndoRedoProvider>{children}</UndoRedoProvider>
                </SSEProvider>
              </LocationProvider>
            </ReactFlowProvider>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
