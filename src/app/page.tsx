import { Config } from "@/src/app/common/Config";
import romanDmitriLogo from "@/src/app/images/romandmitri-logo-square-64x64.png";
import { Widget } from "@/src/app/modules/widget/Widget";
import Image from "next/image";

export default function Home() {
	return (
		<div className={"p-2 font-mono"}>
			<div className={"flex flex-row items-center gap-2"}>
				{false && <Image src={romanDmitriLogo} alt={"logo"} className={"size-8"} />}
				<div>
					<h1 className={"text-developer text-3xl"}>
						{"romandmitri.com"} <small className={"text-developer text-xs"}>{Config.Version}</small>
					</h1>
				</div>
			</div>
			<div className={""}>
				<p className={""}>{"20260817 Working on something special for you..."}</p>
			</div>
			<pre className={"text-xs"}>{JSON.stringify({ Config }, null, "\t")}</pre>
			<Widget />
		</div>
	);
}
