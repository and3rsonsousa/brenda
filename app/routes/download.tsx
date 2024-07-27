import { redirect } from "@remix-run/react";

export const loader = () => {
	return redirect("/manual-dos-produtos-de-bebe.pdf");
};
