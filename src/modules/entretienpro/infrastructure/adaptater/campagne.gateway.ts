import {
  Campagne,
  RawCampagneArraySchema,
} from "../../core/model/campagne.domain-model";
import { ICampagneGateway } from "../../core/port/campagne.gateway";
import { IHttpClient } from "../api/IHttpClient";
import { mapCampagne } from "./campagne.mapper";

export class CampagneGateway implements ICampagneGateway {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async getCampagne(): Promise<Campagne[]> {
    const campagne = await this.httpClient.get<{ data: any[] }>(
      "/myChallenger/EntretienPro/GetListeSalariesDeLaCampagne/2"
    );

    const validatedRawCampagne = RawCampagneArraySchema.safeParse(
      campagne.data
    );
    if (!validatedRawCampagne.success) {
      console.error("Données brutes invalides :", validatedRawCampagne.error);
      return [];
    }

    return mapCampagne(validatedRawCampagne.data);
  }
}
