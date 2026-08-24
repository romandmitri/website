import { Emma } from "@/src/app/modules/emma/Emma";
import { Config } from "@/src/common/config/Config";
import { ConfigIndicator } from "@/src/common/config/ConfigIndicator";

export default function Home() {
	return (
		<main className={"flex max-w-3xl flex-col gap-6 p-4 font-mono sm:p-10"}>
			<div className={"flex flex-row items-baseline gap-2"}>
				<h1 className={"text-developer text-3xl font-bold tracking-tight"}>{"romandmitri.com"}</h1>
				<small className={"text-muted-foreground text-xs"}>{Config.Version}</small>
			</div>
			<ConfigIndicator />
			<iframe
				className={"aspect-video w-full max-w-[720px] rounded-lg"}
				src={"https://www.youtube.com/embed/JiWdbKGQwiw"}
				title={"Roman Eidenzon - Software Architect, Founding Engineer"}
				allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
				referrerPolicy={"strict-origin-when-cross-origin"}
				allowFullScreen
			/>
			<div className={"flex flex-col gap-4 text-sm leading-relaxed"}>
				<p>
					{"Looking to hire me? Check out my "}
					<a
						href={"https://github.com/romandmitri/introduction"}
						className={"text-developer underline underline-offset-4 transition-opacity hover:opacity-80"}
						target={"_blank"}
						rel={"noopener noreferrer"}
					>
						{"introduction"}
					</a>
					{" repository for a curated overview of my work and code. Alternatively, you can chat directly with my AI clone below."}
				</p>
				<p>
					{
						"Meet Emma — an AI assistant trained on my background, skills, and work experience. If you're on the hiring team or exploring candidates, ask her anything, or check out the "
					}
					<a
						href={"https://github.com/romandmitri/emma"}
						className={"text-developer underline underline-offset-4 transition-opacity hover:opacity-80"}
						target={"_blank"}
						rel={"noopener noreferrer"}
					>
						{"emma"}
					</a>
					{" repository."}
				</p>
				<div className={"pt-2"}>
					<Emma />
				</div>
			</div>
		</main>
	);
}
