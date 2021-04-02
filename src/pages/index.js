import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Input, Button, Box, Icon, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Section, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdMusicNote, MdPhoneIphone, MdCloudDownload } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#dcd93e" lazy-load={false} quarkly-title="Header">
			<Override slot="SectionContent" align-items="center" />
			<Image width="140px" height="140px" src="https://uploads.quarkly.io/6065d7ddff9331001f9ed849/images/noizy_nero.svg?v=2021-04-01T14:27:37.978Z" />
		</Section>
		<Section
			padding="64px 0 0 0"
			sm-padding="40px 0"
			background="#dcd93e"
			position="relative"
			top={0}
			quarkly-title="Section 1"
		>
			<Stack background="#dcd93e">
				<StackItem width="60%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						flex-direction="column"
						background="#dcd93e"
					/>
					<Text
						as="h1"
						margin="8px 0px 32px"
						md-font="--headline2"
						color="#262626"
						max-width="850px"
						font="600 40px --fontFamily-googlePoppins"
						width="70% content-box"
					>
						Cerca e Prenota Sale Prove{" "}
						<br />
						e Studi di Registrazione{" "}
						<br />
						Ovunque Ti Trovi
					</Text>
					<Text
						as="h1"
						margin="8px 0px 32px"
						md-font="--headline2"
						color="#262626"
						max-width="850px"
						font="500 18px --fontFamily-googlePoppins"
						width="70% content-box"
					>
						Vuoi essere il primo ad essere avvisato quando la piattaforma sarà lanciata?
						<br />
						<br />
						Inserisci la tua email ed entra nella community di studi musicali più grande in Italia
					</Text>
					<StackItem width="50%" lg-width="100%">
						<Formspree endpoint="https://formspree.io/f/xqkwkzne">
							<Stack gap="16px">
								<StackItem width="50%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text margin="0 0 4px 0" font="16px --fontFamily-googlePoppins">
										Email*
									</Text>
									<Input
										max-width="500px"
										width="120px"
										type="email"
										name="email"
										border-width="3px"
										padding="6px 20px 6px 20px"
										height="40px"
										min-width="200px"
									/>
								</StackItem>
								<StackItem width="100%">
									<Button border-radius="30px" background="#000000" font="normal 500 14px/1.5 --fontFamily-googlePoppins" text-transform="uppercase">
										Richiedi l'accesso
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</StackItem>
					<Box />
				</StackItem>
				<StackItem width="100px" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack width="100% border-box">
						<StackItem width="100%" lg-width="20.3%" md-width="100%">
							<Override
								slot="StackItemContent"
								padding-bottom="100%"
								width="500px"
								height="500px"
								min-width="100%"
								min-height="100%"
								align-items="flex-start"
								position="relative"
								right="80px"
							/>
							<Image
								width="1000px"
								height="1000px"
								src="https://uploads.quarkly.io/6065d7ddff9331001f9ed849/images/recording-bro2.svg?v=2021-04-01T14:49:10.626Z"
								object-position="100%"
								min-width={0}
								min-height={0}
								max-width="500px"
								max-height="500px"
							/>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section sm-padding="40px 0" background="#dcd93e" padding="0 0 24px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h1"
				margin="8px 0px 32px"
				md-font="--headline2"
				color="#262626"
				max-width="850px"
				font="600 40px --fontFamily-googlePoppins"
				width="70% content-box"
			>
				Perchè Noizy
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				md-font="--headline2"
				color="#262626"
				font="500 18px --fontFamily-googlePoppins"
				max-width="600px"
				text-align="center"
				width="auto"
			>
				Sei in cerca di una sala prove per scatenarti con i tuoi amici oppure uno studio di registrazione per il tuo prossimo album di successo? Con Noizy avrai tutto a portata di click!
			</Text>
		</Section>
		<Section
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="#dcd93e"
			margin="0 0 0 0"
			flex-direction="column"
			align-items="center"
			flex-wrap="nowrap"
			justify-content="center"
		>
			<Override slot="SectionContent" padding="0px 0px 0 0px" />
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Icon category="md" icon={MdMusicNote} color="#000000" font="300 50px/36px --fontFamily-googlePoppins" />
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Icon category="md" icon={MdPhoneIphone} font="300 50px/36px --fontFamily-googlePoppins" color="#000000" />
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Icon category="md" icon={MdCloudDownload} color="#000000" font="300 50px/36px --fontFamily-googlePoppins" />
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Icon category="fi" icon={FiMessageSquare} font="300 50px/36px --fontFamily-googlePoppins" color="#000000" />
				</StackItem>
			</Stack>
			<Stack margin-top="auto" color="--grey" font="--base" margin="0px -16px 0 -16px">
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="600 18px/24px --fontFamily-googlePoppins" color="#262626">
						L'AIRBNB DELLE{" "}
						<br />
						SALE PROVE
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="600 18px/24px --fontFamily-googlePoppins" color="#262626">
						PRENOTA TRAMITE{" "}
						<br />
						LA PIATTAFORMA
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="600 18px/24px --fontFamily-googlePoppins" color="#262626">
						NON LIMITARTI{" "}
						<br />
						AL NOLEGGIO
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" font="600 18px/24px --fontFamily-googlePoppins" color="#262626">
						MESSAGGIA E LASCIA{" "}
						<br />
						UNA RECENSIONE
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#262626" font="400 17px/24px --fontFamily-googlePoppins">
						Decidi il giorno, le fasce orarie, la città, confronta diversi prezzi, leggi le recensioni delle sale e infine.. prenota!
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#262626" font="400 17px/24px --fontFamily-googlePoppins">
						Decidi il giorno, le fasce orarie, la città, confronta diversi prezzi, leggi le recensioni delle sale e infine.. prenota!
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#262626" font="400 17px/24px --fontFamily-googlePoppins">
						Decidi il giorno, le fasce orarie, la città, confronta diversi prezzi, leggi le recensioni delle sale e infine.. prenota!
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text margin="0px" color="#262626" font="400 17px/24px --fontFamily-googlePoppins">
						Prenota e paga direttamente tramite Noizy. Il proprietario approverà la prenotazione e subito dopo riceverai le informazioni più importanti.
					</Text>
				</StackItem>
			</Stack>
			<StackItem align-self="center">
				<Override slot="StackItemContent" padding="50px 0px 0px 0px" />
				<Button
					border-radius="30px"
					background="#000000"
					font="normal 500 14px/1.5 --fontFamily-googlePoppins"
					text-transform="uppercase"
					padding="8px 24px 8px 24px"
				>
					Richiedi l'accesso
				</Button>
			</StackItem>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text
				as="h1"
				margin="8px 0px 32px"
				md-font="--headline2"
				color="#262626"
				max-width="850px"
				font="600 40px --fontFamily-googlePoppins"
				width="100% border-box"
				align-self="center"
			>
				I Protagonisti di Noizy
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/6065d7ddff9331001f9ed849/images/rock-band-rafiki.svg?v=2021-04-01T16:17:29.284Z" width="320px" max-width="100%" />
					<Text font="500 22px --fontFamily-googlePoppins" color="#262626">
						Gruppi Amatoriali
					</Text>
					<Text font="400 18px --fontFamily-googlePoppins" color="#262626" width="320px">
						Che tu sia in paese o in città con Noizy cerca e prenota la sala prove adatta alle tue esigenze e scatenati con la tua band!
					</Text>
				</Box>
				<Box padding="10px">
					<Image src="https://uploads.quarkly.io/6065d7ddff9331001f9ed849/images/recording-amico.svg?v=2021-04-01T16:17:29.287Z" width="320px" max-width="100%" />
					<Text font="500 22px --fontFamily-googlePoppins" color="#262626">
						Artisti e Musicisti
					</Text>
					<Text font="400 18px --fontFamily-googlePoppins" color="#262626" width="320px">
						Vuoi produrre il tuo prossimo album di successo? Prenota lo studio di registrazione con le caratteristiche adatte a te o contatta il proprietario!
					</Text>
				</Box>
				<Box padding="10px">
					<Hr />
					<Hr />
					<Hr />
					<Image src="https://uploads.quarkly.io/6065d7ddff9331001f9ed849/images/world-radio-day-pana.svg?v=2021-04-01T16:17:29.285Z" width="320px" max-width="100%" />
					<Text font="500 22px --fontFamily-googlePoppins" color="#262626" margin="44px 0px 16px 0px">
						Privati o Aziende
					</Text>
					<Text font="400 18px --fontFamily-googlePoppins" color="#262626" width="320px">
						Hai bisogno di un prodotto musicale per il tuo spot pubblicitario? Contatta lo studio o compra servizi aggiuntivi come mix e mastering direttamente su Noizy!
					</Text>
				</Box>
			</Box>
			<StackItem align-self="center">
				<Override slot="StackItemContent" padding="50px 0px 0px 0px" />
				<Button
					border-radius="30px"
					background="#dcd93e"
					font="normal 500 14px/1.5 --fontFamily-googlePoppins"
					text-transform="uppercase"
					padding="8px 24px 8px 24px"
					color="#000000"
				>
					Richiedi l'accesso
				</Button>
			</StackItem>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
						This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://media.swipepages.com/2021/3/noizy_1-1500.png) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
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
			<script place={"endOfBody"} rawKey={"6067518dd36688f7d62a22a8"} />
			<style place={"endOfBody"} rawKey={"60675287dacad1963be202bd"}>
				{"[href=\"https://quarkly.io/\"]{\ndisplay: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});