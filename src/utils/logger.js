const isDevelopment = import.meta.env.DEV;
const print = (method, label, color, ...args) => {
	if (!isDevelopment) return;
	console[method](`%c${label}`, `color:${color};font-weight:bold;`, ...args);
};
const logger = {
	info: (...args) => {print("log", "INFO", "#2563eb", ...args);},
	success: (...args) => {print("log", "SUCCESS", "#16a34a", ...args);},
	warn: (...args) => {print("warn", "WARNING", "ca8a04", ...args);},
	error: (...args) => {print("error", "ERROR", "#dc2626", ...args);}
};

export default logger;