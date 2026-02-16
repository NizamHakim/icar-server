import { jwtUtils } from "../../utils/jwtUtils";
import { userRepository } from "../../repositories/userRepository";

export const validateAuth = {
  authToken: async (value: any, { req }: { req: any }) => {
    const decodedToken = jwtUtils.verifyToken(value);
    if (!decodedToken.userId) {
      throw new Error();
    }

    req.user = { ...req.user, id: decodedToken.userId };
    return true;
  },
  emailAlreadyRegistered: async (value: any, { req }: { req: any }) => {
    const user = await userRepository.getUserByEmail(value);
    if (user) {
      throw new Error();
    }
    return true;
  },
  confirmPasswordMismatch: async (value: any, { req }: { req: any }) => {
    if (value !== req.body.password) {
      throw new Error();
    }
    return true;
  },
}