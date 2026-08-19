"use client";

import { Config } from "@/src/app/common/config/Config";
import { Fragment, useEffect, useRef } from "react";

type Props = {};

export const Widget = (p: Props) => {
	const id = "widget";

	const url = Config.WidgetLoader;
	const scriptRef = useRef<HTMLScriptElement | undefined>(undefined);

	useEffect(() => {
		console.log("Widget.useEffect", { url });

		if (scriptRef.current) return;

		scriptRef.current = document.createElement("script");
		scriptRef.current.src = Config.WidgetLoader;
		scriptRef.current.async = true;
		scriptRef.current.setAttribute("data-api-key", Config.WidgetApiKey);
		scriptRef.current.setAttribute("data-target-element", id);

		document.body.appendChild(scriptRef.current);

		return () => {
			scriptRef.current?.remove();
			scriptRef.current = undefined;
		};
	}, [url]);

	return (
		<Fragment>
			<div id={id} />
		</Fragment>
	);
};
