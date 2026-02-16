import { parseCoordinate } from "../../utils/parseCoordinate";

export const validateUser = {
  position: async (value: any, { req }: { req: any }) => {
    const userPosition = parseCoordinate(value);

    req.user = { ...req.user, position: userPosition };
    return true;
  },
};
