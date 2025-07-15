import z from "zod";

export const RawCampagneSchema = z.object({
  name: z.string(),
});

export const RawCampagneArraySchema = z.array(RawCampagneSchema);

export type Campagne = {
  name: string;
};
