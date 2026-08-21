"use client";

import { Config } from "@/src/common/config/Config";
import { useEffect, useRef } from "react";

type Props = {
	id?: string;
};

export const Emma = (p: Props) => {
	const id = "emma-" + (p.id ?? "1");

	const url = Config.EmmaLoader;
	const scriptRef = useRef<HTMLScriptElement | undefined>(undefined);

	useEffect(() => {
		// console.log("Widget.useEffect", { url });
		if (scriptRef.current) return;

		scriptRef.current = document.createElement("script");
		scriptRef.current.src = url;
		scriptRef.current.async = true;
		scriptRef.current.setAttribute("data-target-element", id);
		scriptRef.current.setAttribute("data-widget-id", Config.EmmaWidgetId);

		document.body.appendChild(scriptRef.current);

		return () => {
			scriptRef.current?.remove();
			scriptRef.current = undefined;
		};
	}, [url]);

	return <div id={id} />;
};
