export enum LogLvl {
    DEBUG = 1,
    INFO = 2,
    ERROR = 3,
    DISABLED = 4,
}

const Logger = {
    logLevel: LogLvl.DEBUG,

    setLogLevel(logLevel: LogLvl) {
        this.logLevel = logLevel;
    },

    debug(...args: unknown[]) {
        if (this.logLevel <= LogLvl.DEBUG) console.debug('[S2B]', ...args);
    },

    info(...args: unknown[]) {
        if (this.logLevel <= LogLvl.INFO) console.info('[S2B]', ...args);
    },

    error(...args: unknown[]) {
        if (this.logLevel <= LogLvl.ERROR) console.error('[S2B]', ...args);
    }
};

export default Logger;
