import { Campagne } from "../model/campagne.domain-model";
import { ICampagneGateway } from "../port/campagne.gateway";

export const fetchCampagne = async (
  campagneGateway: ICampagneGateway
): Promise<Campagne[]> => {
  return await campagneGateway.getCampagne();
};
