import { useDependencies } from "@mychallenger/modules/app/hooks/useDependencies";
import { useQuery } from "@tanstack/react-query";
import { fetchCampagne } from "../../core/usecases/fetch-campagne.usecases";

export const useCampagne = () => {
  const { campagneGateway } = useDependencies();

  return useQuery({
    queryKey: ["campagne"],
    queryFn: async () => {
      return fetchCampagne(campagneGateway);
    },
  });
};
