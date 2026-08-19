import { Config } from "@/src/app/common/config/Config";
import { ConfigIndicator } from "@/src/app/common/config/ConfigIndicator";
import { Widget } from "@/src/app/modules/widget/Widget";

export default function Home() {
	return (
		<div className={"p-2 font-mono"}>
			<div className={"flex flex-row items-center gap-2"}>
				<div>
					<h1 className={"text-developer text-3xl"}>
						{"romandmitri.com"} <small className={"text-developer text-xs"}>{Config.Version}</small>
					</h1>
				</div>
			</div>
			<ConfigIndicator />
			<div>
				<p>{"20260817 Working on something special for you..."}</p>
			</div>
			<Widget />
		</div>
	);
}
