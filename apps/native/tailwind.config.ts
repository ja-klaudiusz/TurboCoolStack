import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config";

const config: Pick<Config, "prefix" | "presets"> = {
    presets: [sharedConfig],
};

export default config;