import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Strong, Hr, Button, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Section, Stack } from "@quarkly/components";
import { GoPlus } from "react-icons/go";
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
		<Section sm-padding="40px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/home2.png?v=2021-05-03T09:36:07.797Z) 0% 0% /cover repeat scroll padding-box" padding="24px 0 80px 0">
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
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
			background="url(https://uploads.quarkly.io/6081891b123639001f37cb52/images/confronto_Tavola%20disegno%201%20copia%206.svg?v=2021-05-03T11:17:11.636Z),#f7f9fc"
			margin="-330px 0 0 0"
		>
			<Override slot="SectionContent" margin="-80px 64px 0px 64px" />
			<Text
				border-color="#ffffff"
				font="600 42px --fontFamily-googleInter"
				text-align="left"
				color="#000000"
				padding="0px 0px 0px 0px"
			>
				{"     "}Confronta le funzionalità
			</Text>
			<Text
				font="normal normal 400 20px/1.6 --fontFamily-googleInter"
				color="rgba(0, 0, 0, 0.99)"
				text-align="left"
				align-self="flex-start"
				margin="0px 0px 0 50px"
			>
				{" "}Scegli il piano{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					in linea con le tue esigenze.
				</Strong>
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--dark"
						max-width="850px"
					/>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section
			background-color="--dark"
			text-align="center"
			padding="32px 0"
			background="#f7f9fc"
			margin="-100px 0 0 0"
		>
			<Override slot="SectionContent" border-width="0px" />
			<Text
				border-color="#ffffff"
				font="600 42px --fontFamily-googleInter"
				text-align="left"
				color="#000000"
				padding="0px 0px 0px 0px"
				margin="16px 0px 50px 0px"
			>
				{"     "}Domande frequenti
			</Text>
		</Section>
		<Section color="--dark" background="#f7f9fc" margin="-100px 0 0 0" padding="24px 0 50px 0">
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="#1ed761"
					category="go"
					icon={GoPlus}
				/>
				<Text as="h3" font="normal 500 20px/1.2 --fontFamily-googleInter" margin="10px 0">
					Cosa posso richiedere?
				</Text>
				<Text as="p" margin="10px 0" color="--greyD2" font="20px --fontFamily-googleInter">
					Puoi richiederci{" "}
					<Strong>
						grafiche statiche o animate
					</Strong>
					{" "}( in base al tuo piano ) per Facebook, Instagram, Twitter, YouTube e tutti gli altri social, immagini per il tuo e-commerce o blog, banner per siti web e molto altro ancora.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="#1ed761"
					category="go"
					icon={GoPlus}
				/>
				<Text as="h3" font="normal 500 20px/1.2 --fontFamily-googleInter" margin="10px 0">
					Utilizzate stesse grafiche per più clienti?
				</Text>
				<Text as="p" margin="10px 0" color="--greyD2" font="20px --fontFamily-googleInter">
					Ovviamente no! Ciascuno dei nostri progetti è fatto apposta per te e viene realizzato in base al tuo brand, alla tua richiesta ed al messaggio che vuoi trasmettere. Inoltre, è{" "}
					<Strong>
						tuo al 100%
					</Strong>
					.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="#1ed761"
					category="go"
					icon={GoPlus}
				/>
				<Text as="h3" font="normal 500 20px/1.2 --fontFamily-googleInter" margin="10px 0">
					Come funziona l'abbonamento?
				</Text>
				<Text as="p" margin="10px 0" color="--greyD2" font="20px --fontFamily-googleInter">
					Completata l'iscrizione, usufruirai  di tutti i servizi contenuti all’interno del tipo di piano acquistato fino al prossimo rinnovo.{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						In qualsiasi momento
					</Strong>
					, avrai la possibilità di fare sia upgrade che downgrade del tuo piano attuale e di disdire l'abbonamento!
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="0"
					left="0"
					size="36px"
					color="#1ed761"
					category="go"
					icon={GoPlus}
				/>
				<Text as="h3" font="normal 500 20px/1.2 --fontFamily-googleInter" margin="10px 0">
					Quali metodi di pagamento accettate?
				</Text>
				<Text as="p" margin="10px 0" color="--greyD2" font="20px --fontFamily-googleInter">
					Accettiamo i seguenti tipi di pagamenti: paypal e tutte le carte di credito.
				</Text>
			</Box>
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