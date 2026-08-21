"use client";

import { Config } from "@/src/common/config/Config";
import { useEffect, useRef } from "react";

type Props = {
	id?: string;
};

export const Widget = (p: Props) => {
	const id = "widget-" + (p.id ?? "1");

	const url = Config.WidgetLoader;
	const scriptRef = useRef<HTMLScriptElement | undefined>(undefined);

	useEffect(() => {
		// console.log("Widget.useEffect", { url });
		if (scriptRef.current) return;

		scriptRef.current = document.createElement("script");
		scriptRef.current.src = url;
		scriptRef.current.async = true;
		scriptRef.current.setAttribute("data-api-key", Config.WidgetApiKey);
		scriptRef.current.setAttribute("data-target-element", id);

		document.body.appendChild(scriptRef.current);

		return () => {
			scriptRef.current?.remove();
			scriptRef.current = undefined;
		};
	}, [url]);

	return <div id={id} />;
};
