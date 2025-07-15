import { createContext } from "react";
import type { Dependencies } from "../store/Dependencies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DependenciesContext = createContext<Dependencies>(null as any);

const DependenciesProvider: React.FC<{
  dependencies: Dependencies;
  children: React.ReactNode;
}> = ({ dependencies, children }) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export { DependenciesContext, DependenciesProvider };
