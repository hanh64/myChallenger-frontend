import { Campagne } from "../model/campagne.domain-model";

export interface ICampagneGateway {
  getCampagne(): Promise<Campagne[]>;
}
