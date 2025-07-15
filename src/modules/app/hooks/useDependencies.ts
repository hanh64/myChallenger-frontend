import { useContext } from "react";
import { DependenciesContext } from "../DependenciesProvider";

export const useDependencies = () => {
  return useContext(DependenciesContext);
};
