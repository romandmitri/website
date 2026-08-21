import { Config } from "@/src/common/config/Config";

export const ConfigIndicator = () => {
	const isDev = Config.DevDisplay;
	if (!isDev) return null;
	return <pre className={"text-xs"}>{JSON.stringify({ Config }, null, "\t")}</pre>;
};
