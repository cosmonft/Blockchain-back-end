/**
 * @notice Reads a environment variable from `.env` file
 * @param envKey The key to look for at the environment file.
 * @returns envValue
 */
export function getEnvVars(
        envKey: string | string[]
    ) {
    const rootPath = require("app-root-path");
    require("dotenv").config(`${rootPath}/.env`);

    try {
        if (typeof envKey === 'string') {
            return process.env[envKey] || "";
        } else if (typeof envKey === 'object') {
            let output: string[] = [];
            for (let i=0; i<envKey.length; i++) {
                output.push(
                    process.env[envKey[i]] || ""
                );
            }
            return output;
        }
    } catch (err) {
        console.error(err);
    }
};
