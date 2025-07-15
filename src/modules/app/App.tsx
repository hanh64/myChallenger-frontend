import { AxiosHttpClient } from "@entretienpro/infrastructure/api/AxiosHttpClient";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { CampagneGateway } from "../entretienpro/infrastructure/adaptater/campagne.gateway";
import { Dependencies } from "../store/Dependencies";

const apiUrl = import.meta.env.VITE_API_URL;

export class App {
  public dependencies: Dependencies;

  constructor() {
    this.dependencies = this.setupDependencies();
  }

  setupDependencies(): Dependencies {
    const axiosClient = new AxiosHttpClient(axios.create({ baseURL: apiUrl }));
    return {
      queryClient: new QueryClient(),
      userGateway: new CampagneGateway(axiosClient),
    };
  }
}

export const app = new App();
