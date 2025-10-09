import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "RecluiterGPT | Generador de CV's",
	description:
		"Plataforma SaaS impulsada por IA para crear CVs optimizados que superan filtros ATS y aumentan tus oportunidades laborales.",
	keywords: [
		"IA",
		"CV",
		"currículum",
		"ATS",
		"SaaS",
		"empleo",
		"inteligencia artificial",
		"optimización",
		"reclutamiento",
		"búsqueda de trabajo",
		"generación automática",
		"recursos humanos",
	],
	authors: [{ name: "RecluiterGPT Team" }],
	robots: "index, follow",
	openGraph: {
		title: "RecluiterGPT | Generador de CV's optimizados para ATS",
		description:
			"Haz que tu CV pase los filtros, consigue más entrevistas. Genera tu currículum con IA y supera los filtros ATS.",
		type: "website",
		url: "https://recluitergpt.com",
		images: [
			{
				url: "/assets/banner.png",
				width: 1200,
				height: 630,
				alt: "RecluiterGPT Banner",
			},
		],
		locale: "es_ES",
	},
	twitter: {
		card: "summary_large_image",
		title: "RecluiterGPT | Generador de CV's optimizados para ATS",
		description:
			"Haz que tu CV pase los filtros, consigue más entrevistas. Genera tu currículum con IA y supera los filtros ATS.",
		images: ["/assets/banner.png"],
	},
	icons: {
		icon: "/assets/icon.png",
	},
	metadataBase: new URL("https://recluitergpt.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);


}
