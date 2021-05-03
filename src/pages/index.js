import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Strong, Hr, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Section, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				GraficAds.it
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"GraficAds.it"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6081891b123639001f37cb52/images/favicon.svg?v=2021-04-22T18:40:16.320Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="60px 0 100px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/home1_graficads+.png?v=2021-04-30T10:55:21.824Z) 100% 30%/contain no-repeat,#000000"
			color="#000000"
			quarkly-title="Home"
			justify-content="end"
			min-width="100%"
			max-width="100%"
			max-height="100%"
			align-items="flex-end"
		>
			<Override slot="SectionContent" flex="flex" />
			<Image
				width="145px"
				height="70px"
				src="https://uploads.quarkly.io/6085848f23a143001e08ff25/images/GraficAds_White.svg?v=2021-04-25T15:13:15.409Z"
				padding="0px 0px 0px 60px"
				margin="-25px 0px 0px 0px"
			/>
			<Text font="normal normal 700 94px/0.9 --fontFamily-googleInter" margin="100px 0px 16px 50px" color="rgba(255, 255, 255, 0.99)">
				Annunci{" "}
				<br />
				che non{" "}
				<br />
				convertono?
			</Text>
			<Text font="normal normal 300 20px/1.3 --fontFamily-googleInter" margin="50px 0px 16px 50px" color="#ffffff">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					GraficAds
				</Strong>
				{" "}è un servizio di progettazione grafica che
				<br />
				aiuta imprenditori, professionisti del marketing e agenzie
				<br />
				a ottenere più{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					ROI
				</Strong>
				{" "}dalle campagne e{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					massimizzare
					<br />
					le vendite
				</Strong>
				{" "}attraverso grafiche performanti.
			</Text>
			<Hr />
			<StackItem margin="0px 0px 0px 50px">
				<Button border-radius="100px" font="normal 300 18px/1.5 --fontFamily-googleInter" padding="5 15px 5px 15px" background="#1ed761">
					Prova ora -&gt;
				</Button>
				<Link
					href="#"
					border-color="#0a2540"
					text-decoration-line="initial"
					font="normal 400 18px/3 --fontFamily-googleInter"
					text-align="center"
					letter-spacing="inherit"
					padding="0px 0px 0px 15px"
					color="#ffffff"
					hover-text-decoration-line="underline"
				>
					Come funziona ?
				</Link>
			</StackItem>
		</Section>
		<Section sm-padding="40px 0" background="#000000" padding="0 0 0 0">
			<Override slot="SectionContent" margin="0px 64px 0px 64px" padding="0px 0px 0 0px" />
			<Text
				border-color="#ffffff"
				font="600 42px --fontFamily-googleInter"
				text-align="center"
				color="#ffffff"
				padding="0px 0px 0px 0px"
			>
				Richiedi i tuoi progetti in modo semplice
			</Text>
			<Text
				font="normal normal 400 20px/1.6 --fontFamily-googleInter"
				color="rgba(255, 255, 255, 0.99)"
				text-align="center"
				flex="1 1 auto"
				align-self="auto"
				margin="0px 0px 0 50px"
			>
				Un grafico sempre a disposizione{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="#1ed761"
				>
					senza
				</Strong>
				{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="#1ed761"
				>
					assumerlo.
				</Strong>
			</Text>
			<Stack background="#000000" margin="50px -16px -16px -16px">
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" color="--dark" flex-direction="column" />
					<Text font="normal normal 700 30px/0.9 --fontFamily-googleInter" margin="140px 0px 16px 50px" color="#1ed761">
						Come funziona ?
					</Text>
					<Text font="normal normal 700 42px/1.3 --fontFamily-googleInter" margin="0px 0px 16px 50px" color="rgba(255, 255, 255, 0.99)">
						Prezzo mensile fisso.
						<br />
						Nessun contratto.
						<br />
						Disdici quando vuoi.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%" color="rgba(0, 0, 0, 0)">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/Home.gif?v=2021-04-30T22:27:26.256Z) center/cover" margin="-50px 0px 0px 0px" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section sm-padding="40px 0" background="#000000">
			<Stack background="#000000">
				<StackItem width="50%" lg-width="100%" margin="-35px 0px 0px 0px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/slack_def.png?v=2021-04-30T16:49:58.537Z) 0% 00% /contain no-repeat scroll padding-box" width="680px" />
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="50%" lg-width="100%" margin="-35px 0px 0px 0px">
					<Override slot="StackItemContent" color="--dark" padding="98px 64px 98px 0px" flex-direction="column" />
					<Text font="normal normal 700 42px/1.0 --fontFamily-googleInter" margin="50px 0px 16px 50px" color="#1ed761">
						Inviaci le tue richieste
					</Text>
					<Text font="normal normal 400 20px/1.3 --fontFamily-googleInter" margin="0px 0px 16px 50px" color="rgba(255, 255, 255, 0.99)">
						Verrai aggiunto in un{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							canale privato
						</Strong>
						{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Slack,
						</Strong>
						<br />
						dove protrai comunicare con il tuo designer personale, aggiungere membri del tuo team e richiederci semplicemente le tue grafiche.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" background="#000000">
			<Stack background="#000000">
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" color="--dark" padding="98px 64px 98px 0px" flex-direction="column" />
					<Text font="normal normal 700 42px/1.0 --fontFamily-googleInter" margin="50px 0px 16px 50px" color="#1ed761">
						Goditi il nostro processo
					</Text>
					<Text font="normal normal 400 20px/1.3 --fontFamily-googleInter" margin="0px 0px 16px 50px" color="rgba(255, 255, 255, 0.99)">
						Dopo aver ricevuto la tua richiesta, il designer inizierà subito a lavorare sul tuo progetto.
						<br />
						In sole{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							24/48h{" "}
						</Strong>
						riceverai lavori di alta qualità e completamente personalizzati.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/graphic.png?v=2021-05-03T10:53:16.872Z) 0% 0% /contain repeat scroll padding-box" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/home2.png?v=2021-05-03T09:36:07.797Z) 0% 0% /cover repeat scroll padding-box">
			<Stack background="#">
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" color="--dark" padding="98px 64px 98px 0px" flex-direction="column" />
					<Text font="normal normal 700 42px/1.0 --fontFamily-googleInter" margin="-50px 0px 16px 50px" color="#1ed761">
						Scarica le tue grafiche
					</Text>
					<Text font="normal normal 400 20px/1.3 --fontFamily-googleInter" margin="0px 0px 16px 50px" color="rgba(255, 255, 255, 0.99)" border-color="rgba(0, 0, 0, 0.99)">
						Se non sei completamente soddisfatto, puoi richiedere tutte le revisioni necessarie.
						<br />
						Una volta approvato il progetto, sarai pronto a scaricarlo e lanciarlo online!
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section sm-padding="40px 0" background="url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/pricing.png?v=2021-05-03T10:30:25.059Z) 0% 45%/contain no-repeat,#f7f9fc">
			<Override slot="SectionContent" margin="0px 64px 0px 64px" padding="0px 0px 0 0px" />
			<Text
				border-color="#ffffff"
				font="600 42px --fontFamily-googleInter"
				text-align="center"
				color="#000000"
				padding="0px 0px 0px 0px"
			>
				I nostri piani
			</Text>
			<Text
				font="normal normal 400 20px/1.6 --fontFamily-googleInter"
				color="rgba(0, 0, 0, 0.99)"
				text-align="center"
				flex="1 1 auto"
				align-self="auto"
				margin="0px 0px 0 50px"
			>
				Prezzi pensati per aziende di{" "}
				<Strong
					color="#1ed761"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					tutte le dimensioni.
				</Strong>
			</Text>
			<Stack margin="50px -16px -16px -16px">
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" color="--dark" flex-direction="column" />
					<Button
						border-radius="100px"
						font="normal 400 14px/1.5 --fontFamily-googleInter"
						background="#1ed761"
						flex="initial"
						align-self="flex-start"
						margin="245px 0px 0px 120px"
					>
						Prova ora -&gt;
					</Button>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<Button
							border-radius="100px"
							font="normal 300 15px/1.5 --fontFamily-googleInter"
							background="#1ed761"
							flex="initial"
							text-align="left"
							align-self="flex-start"
							margin="260px 0px 0px 30px"
						>
							Prova ora -&gt;
						</Button>
						<StackItem width="100%" lg-width="33.3%" md-width="100%" color="rgba(0, 0, 0, 0)">
							<Override slot="StackItemContent" padding-bottom="100%" margin="-50px 0px 0px 0px" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				© COPYRIGHT 2021 Graficads– P.Iva 03090700646 – Tutti i diritti sono riservati – Privacy Policy
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfBody"} rawKey={"6081c02dbef9ea67356d0c43"}>
				{"a[href=\"https://quarkly.io/\"]{\ndisplay: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});