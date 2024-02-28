import stylesheet from "~/tailwind.css?url";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{
		rel: "icon",
		href: "/ico.png",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body className="antialiased">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
