import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Brenda Vasconcelos - Pediatra em Sobral, Ipu e Massapê." },
		{
			name: "description",
			content:
				"Agende suas consultas pediátricas com a Dra. Brenda Vasconcelos em Sobral, Massapê, Ipu ou domiciliar.",
		},
	];
};

export default function Index() {
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
					{/* <a
						target="_blank"
						rel="noreferrer"
						href="https://wa.me/5588992270922?text=Ol%C3%A1,%20Gostaria%20de%20agendar%20uma%20CONSULTA%20DOMICILIAR%20com%20a%20Dra.%20Brenda."
						className="link bg-yellow-100 focus:ring-yellow-300 hover:bg-yellow-200 text-yellow-700"
					>
						Agendar Consulta Domiciliar
					</a> */}

					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							`https://wa.me/5588992630993?text=Olá, gostaria de agendar uma consulta com a Dra. Brenda.`
						)}
						className="link bg-pink-100 focus:ring-pink-300 hover:bg-pink-200 text-pink-700"
					>
						Agendar Consulta na Clínica Dengo
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href={encodeURI(
							`https://wa.me/5588997925279?text=Olá, gostaria de agendar uma consulta com a Dra. Brenda.`
						)}
						className="link bg-sky-100 focus:ring-sky-300 hover:bg-sky-200 text-sky-700"
					>
						Agendar Consulta na SmartMed
					</a>

					<div className="mt-4 text-gray-500">
						Baixe gratuitamente o meu Ebook.
					</div>

					<a
						target="_blank"
						rel="noreferrer"
						download
						href="/download"
						className="link bg-violet-600 focus:ring-violet-700 hover:bg-violet-800 text-rose-200 font-semibold tracking-tight text-lg"
					>
						Manual dos produtos do bebê.
					</a>
				</div>

				<div className="text-xs text-slate-500 tracking-tight">
					© Dra. Brenda Bezerra Vasconcelos <br />
					CRM 22.101 RQE 16.278
				</div>
			</div>
		</div>
	);
}
