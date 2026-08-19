// REMINDER:
// Static compiler looks for "process.env.NEXT_PUBLIC*" string.

export const Config = {
	DevAlpha: process.env.DEV_ALPHA ?? "missing",
	WidgetApiKey: process.env.NEXT_PUBLIC_WIDGET_API_KEY ?? "",
	WidgetLoader: process.env.NEXT_PUBLIC_WIDGET_LOADER ?? "",
	Version: process.env.APP_VERSION,
};
