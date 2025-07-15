import type { AxiosInstance } from "axios";
import type { IHttpClient } from "./IHttpClient";

export class AxiosHttpClient implements IHttpClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.client.interceptors.response.use(
      (reponse) => {
        console.log("AAAAAAAAAAAAAAAAAAA");
        return reponse;
      },
      (error) => {
        console.log("BBBBBBBBBBBBBB");
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const response = await this.client.get<T>(url, { params });
    return response.data;
  }
}
