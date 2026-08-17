import romanDmitriLogo from "@/src/app/images/romandmitri-logo-square-64x64.png";
import Image from "next/image";

export default function Home() {
	const version = process.env.APP_VERSION;
	return (
		<div className={"p-2 font-mono"}>
			<div className={"flex flex-row items-center gap-2"}>
				{false && <Image src={romanDmitriLogo} alt={"logo"} className={"size-8"} />}
				<div>
					<h1 className={"text-developer text-xl"}>
						{"romandmitri.com"} <small className={"text-developer text-xs"}>{version}</small>
					</h1>
				</div>
			</div>
			<div className={""}>
				<p className={"text-muted-foreground text-sm"}>{"20260817 Working on something special for you..."}</p>
			</div>
		</div>
	);
}
