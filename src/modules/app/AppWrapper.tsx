import { QueryClientProvider } from "@tanstack/react-query";
import { app } from "./App";
import { DependenciesProvider } from "./DependenciesProvider";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DependenciesProvider dependencies={app.dependencies}>
      <QueryClientProvider client={app.dependencies.queryClient}>
        {children}
      </QueryClientProvider>
    </DependenciesProvider>
  );
};
