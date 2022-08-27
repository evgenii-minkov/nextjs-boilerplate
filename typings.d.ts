declare global {
    namespace NodeJS {
        interface ProcessEnv {
            COLORS_HEX: { [key: string]: number },
            NODE_ENV: "development" | "production";
            PORT?: string;
        }
    }
}

declare module "*.scss";
