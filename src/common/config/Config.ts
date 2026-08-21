// REMINDER:
// Static compiler looks for "process.env.NEXT_PUBLIC*" string.

export const Config = {
	DevAlpha: process.env.DEV_ALPHA ?? "missing",
	DevDisplay: process.env.DEV_DISPLAY == "true",
	EmmaLoader: process.env.NEXT_PUBLIC_EMMA_LOADER ?? "",
	EmmaWidgetId: process.env.NEXT_PUBLIC_EMMA_WIDGET_ID ?? "",
	WidgetApiKey: process.env.NEXT_PUBLIC_WIDGET_API_KEY ?? "",
	WidgetLoader: process.env.NEXT_PUBLIC_WIDGET_LOADER ?? "",
	Version: process.env.APP_VERSION,
};
