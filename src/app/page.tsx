import { Config } from "@/src/app/common/config/Config";
import { ConfigIndicator } from "@/src/app/common/config/ConfigIndicator";
import { Widget } from "@/src/app/modules/widget/Widget";

export default function Home() {
	return (
		<div className={"p-2 font-mono"}>
			<div className={"flex flex-row items-center gap-2"}>
				<div>
					<h1>
						<span className={"text-developer text-3xl"}>{"romandmitri.com"}</span> <small className={"text-xs"}>{Config.Version}</small>
					</h1>
				</div>
			</div>
			<ConfigIndicator />
			<div>
				<p>{"20260817 Working on something special for you..."}</p>
				<p>
					{"20260819 Checkout my "}
					<a href={"https://github.com/romandmitri/introduction"} className={"text-developer"} target={"_blank"}>
						{"introduction"}
					</a>
					{" repository for now."}
				</p>
			</div>
			<div className={"max-w-[80%] p-2"}>
				<p>
					{
						"The following is a widget loaded from a separate server. It is cool because it is completely isolated (ie: styles) and does other things too!"
					}
				</p>
				<div className={"w-min"}>
					<Widget />
				</div>
			</div>
		</div>
	);
}
