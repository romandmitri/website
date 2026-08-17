export default function Home() {
	const version = process.env.APP_VERSION;
	return <div className={"font-mono p-2"}>
		<h1 className={"text-developer text-xl"}>{"romandmitri.com"} <small
			className={"text-xs text-muted"}>{version}</small></h1>
		<p className={"text-sm text-muted-foreground"}>{"20260817 Working on something special for you..."}</p>
	</div>
}
