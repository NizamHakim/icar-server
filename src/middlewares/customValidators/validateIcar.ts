import { parseCoordinate } from "../../utils/parseCoordinate";

export const validateIcar = async (value: any, { req }: { req: any }) => {
  const icar = typeof value === "string" ? JSON.parse(value) : value;

  const icarId = parseInt(icar.id);
  if (isNaN(icarId)) {
    throw new Error();
  }
  const icarPosition = parseCoordinate(icar.position);

  req.icar = { id: icarId, position: icarPosition };
  return true;
};
