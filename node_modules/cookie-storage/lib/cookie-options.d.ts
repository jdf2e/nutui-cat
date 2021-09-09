export interface CookieOptions {
    path?: string | null;
    domain?: string | null;
    expires?: Date | null;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
}
