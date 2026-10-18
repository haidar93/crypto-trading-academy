export interface JwtPayload {
    userId: number;
    role: "user" | "admin";
}

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}