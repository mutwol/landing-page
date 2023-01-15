import { ProtectedRoutes } from "./protectedRoutes";
import { PrivateRoutes } from "./privateRoutes";

export const AppRoutes = [ProtectedRoutes, PrivateRoutes]

export * from "./protectedRoutes";
export * from "./privateRoutes";