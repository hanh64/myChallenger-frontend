import type { ICampagneGateway } from "@mychallenger/modules/entretienpro/core/port/campagne.gateway";
import { QueryClient } from "@tanstack/react-query";

export type Dependencies = {
  queryClient: QueryClient;
  campagneGateway: ICampagneGateway;
};
