import { CookieOptions } from "./cookie-options";
import { Storage } from "./storage";
export declare class CookieStorage implements Storage {
    private _defaultOptions;
    constructor(defaultOptions?: CookieOptions);
    get length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string, cookieOptions?: CookieOptions): void;
    setItem(key: string, data: string, options?: CookieOptions): void;
    private _getCookie;
    private _setCookie;
    [key: string]: any;
    [index: number]: string;
}
