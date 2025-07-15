import { Campagne } from "../../core/model/campagne.domain-model";

export const mapCampagne = (data: any[]): Campagne[] => {
  return data.map((item) => ({
    name: item.name ?? "Inconnue",
  }));
};
