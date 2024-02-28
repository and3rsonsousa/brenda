import type { MetaFunction } from "@remix-run/node";
import { Instagram } from "lucide-react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	console.log(
		encodeURI(
			"https://wa.me/5588992270922?text=Olá, Gostaria de agendar uma CONSULTA DOMICILIAR com a Dra. Brenda."
		)
	);

	return (
		<div className="min-h-dvh bg-slate-50 grid place-content-center">
			<div className="max-w-96 p-8 rounded-xl text-center">
				<div className="rounded-full mx-auto">
					<img
						src="./brenda.png"
						alt="Brenda Bezerra Vasconcelos - Pediatria"
						className="mx-auto"
					/>
				</div>
				<div>
					<img
						src="./logo.png"
						alt="Brenda Bezerra Vasconcelos - Pediatria"
						className="h-20 mt-4 mx-auto"
					/>
				</div>
				<div className="flex my-12 flex-col gap-2">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20DOMICILIAR%20com%20a%20Dra.%20Brenda."
						className="link bg-yellow-100 focus:ring-yellow-300 hover:bg-yellow-200 text-yellow-700"
					>
						Agendar Consulta Domiciliar
					</a>

					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Brenda."
						className="link bg-pink-100 focus:ring-pink-300 hover:bg-pink-200 text-pink-700"
					>
						Agendar Consulta na Clínica Dengo
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588997925279?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Brenda."
						className="link bg-sky-100 focus:ring-sky-300 hover:bg-sky-200 text-sky-700"
					>
						Agendar Consulta na SmartMed
					</a>
				</div>

				<div className="text-xs text-slate-500 tracking-tight">
					© Dra. Brenda Bezerra Vasconcelos <br />
					CRM 22.101
				</div>
			</div>
		</div>
	);
}
