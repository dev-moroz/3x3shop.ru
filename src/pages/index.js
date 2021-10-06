import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Box, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 22.9%) 0 0 no-repeat,#191C23"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 32px 0px 32px"
				min-width="auto"
				order="0"
				align-self="auto"
			/>
			<Link
				href="#mission"
				text-decoration-line="initial"
				color="--darkL2"
				background="--color-light"
				padding="12px 24px 12px 24px"
				font="--base"
				letter-spacing="0.5px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
			>
				Оставить заявку
			</Link>
		</Section>
		<Section
			id="mission"
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Голографический вентилятор
			</Text>
			<Text
				font="normal 500 28px/1.2 'AvenirNextCyrRegular', sans-serif"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				Принцип работы основан на быстром вращении лопостей вентилятора со встроеными в них светодиодами
			</Text>
		</Section>
		<Section
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			md-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack
				flex-wrap="wrap"
				gap="--cmp-stack-gap-default"
				order="0"
				align-self="auto"
				flex="0 1 auto"
			>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="100%"
					lg-order="2"
					lg-margin="0px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						padding="0px 30px 0px 0px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						Техничекская поддержка
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Всё Что Нужно
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						Квалифицированое обслуживание,
						<br />
						установка, настройки И гарантии
						<br />
						на нашу работу
					</Text>
					<Link
						href="/about"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Подробнее
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-order="1"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="80px -16px -16px -16px" lg-margin="50px -16px -16px -16px" md-margin="30px -16px -16px -16px">
				{"        "}
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					<Override slot="StackItemContent" lg-width="100%" />
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem width="40%" display="flex" lg-margin="0px 0px 0px 0px" lg-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						padding="0px 0px 0px 30px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						lg-text-align="center"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						expertise
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Why Choose Us
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/team"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Read More
					</Link>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="80px -16px -16px -16px" lg-margin="50px -16px -16px -16px" md-margin="30px -16px -16px -16px">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="100%"
					lg-order="2"
					lg-margin="0px 0px 0px 0px"
					box-sizing="border-box"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						box-sizing="border-box"
						padding="0px 30px 0px 0px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						CONTACTS
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-text-align="left"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Where We Work
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/contact"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
					>
						Read More
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-order="1"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="100px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
			>
				what we create
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 48px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Our Works
			</Text>
			<Stack width="100%">
				{"    "}
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="16px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 16px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Link
				href="/contact"
				text-decoration-line="initial"
				color="--light"
				padding="8px 18px 8px 18px"
				font="--base"
				letter-spacing="0.5px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				text-align="center"
				margin="48px 0px 0px 0px"
				background="--color-primary"
				hover-transform="translateY(-4px)"
				lg-margin="24px 0px 0px 0px"
				md-margin="36px 0px 0px 0px"
			>
				View More
			</Link>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="FAQ"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 48px 0px 48px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				We're here to help
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				FAQ
			</Text>
			<Stack>
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-align-items="center"
					lg-justify-content="center"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="16px 45px 16px 16px"
					lg-width="50%"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				They trust us
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Our Customers
			</Text>
			<Stack width="100%" lg-justify-content="center" sm-flex-direction="column">
				{"    "}
				<StackItem
					width="20%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 0px 0px"
					lg-width="33.33%"
					lg-align-items="center"
					lg-justify-content="center"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiBootstrap}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="20%"
					display="flex"
					padding="16px 45px 16px 16px"
					lg-width="33.33%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiBingSmall}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiCssTricks}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiEnvato}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="25px 0 25px 0"
			lg-height="auto"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="#191C23 linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat"
						flex-direction="column"
						md-height="360px"
						padding="36px 24px 36px 24px"
						sm-height="280px"
						lg-height="420px"
						border-color="#000000"
					/>
					{"        "}
					<Text
						margin="10px 0px 15px 0px"
						font="--headline2"
						text-align="center"
						quarkly-title="Title"
						color="--light"
						md-font="--headline3"
					>
						Это дейтвительно работает.
					</Text>
					<Text
						margin="0px 0px 28px 0px"
						font="--lead"
						opacity="0.6"
						text-align="center"
						quarkly-title="Description"
						color="--light"
						max-width="720px"
					>
						Увеличение конверсий за счет привлечения внимания клиентов
					</Text>
					<Button
						padding="8px 36px 8px 36px"
						font="--lead"
						letter-spacing="0.5px"
						transition="opacity .15s ease 0s"
						position="relative"
						z-index="5"
						background="--color-light"
						opacity="1"
						hover-opacity=".85"
						focus-box-shadow="none"
						hover-box-shadow="none"
						active-box-shadow="none"
						margin="10px auto 0px auto"
						width="fit-content"
						md-font="--base"
						color="--darkL2"
					>
						Попробуйте Сейчас
						<div display="none" />
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
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
			<style place={"endOfHead"} rawKey={"615abb7e29a0a1001e6c97d4"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n\n\n@font-face {\n    font-family: 'OpinionPro';\n    font-weight: normal;\n    font-style: normal;\n    src: url('./fonts/Opinionprolight.woff2') format('woff2'),\n    url('./fonts/Opinionprolight.woff') format('woff');\n}\n\n.blue{\n    color: #0f33ff;\n}\n.white{\n    color: #ffffff;\n}\n\n.bg_black{\n    background-color: #141315;\n}\n.no_link_style{\n    text-decoration: none;\n    color: #ffffff;\n}\n/*#btnPlusSizeValueVertical,#btnMinusSizeValueHorizontal,#btnMinusSizeValueVertical{\n    color: #0f33ff;\n}*/\n\n.w-nav.ush_menu_1.height_full.dropdown_height.m_align_none.m_layout_dropdown.type_desktop,#footer_menu_hide{\n    /* opacity: 0; */\n    display: none;\n}\n\n.us_form_1.w-form.layout_ver .w-form-row {\n\n    /* max-width: 300px; */\n}\n.contact_form-on_homepage .w-form-h .w-form-row{\n    width: 25%;\n}\n\n@media screen and (max-width:992px){\n    .contact_form-on_homepage .w-form-h .w-form-row{\n        width: 100%;\n    }\n}\n\n\n.result_title{\n    margin-bottom: 20px !important;\n    text-align: center;\n    font-size: 25px;\n    text-transform: uppercase;\n}\n.size-value__text{\n    padding: 0 !important;\n}\n\n.result_text{\n    line-height: 26px;\n    font-size: 13px;\n    font-weight: normal;\n    text-transform: uppercase;\n    /* font-weight: bold; */\n}\n\n.result_card_text{\n    padding: 50px 30px;\n}\n\n\n#main-h1{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.for_textarea textarea{\n\tbackground-color: #fff;\n\tcolor: black;\n}\n\n.wpb_wrapper h2{\n    padding: 0;\n    margin: 0;\n}\n.wpb_wrapper h3{\n    padding: 0;\n    margin: 0;\n}\n\n.wpb_wrapper{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    height: 50%;\n    /* padding-top: 20px; */\n}\n\n.container-calculator {\n    font-family: 'OpinionPro', Arial, sans-serif;\n    font-size: 18px;\n    color: black;\n    font-weight: 300;\n\n}\n\n.container-calculator {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-rows: 4fr 1fr;*/\n    grid-template-rows: 4fr 1fr;\n}\n\n.calculator__select-container {\n    /*display: -ms-grid;*/\n    display: grid;\n    justify-items: flex-start;\n    /*align-self: end;*/\n    margin-left: -3px;\n}\n\n.calculator__select {\n    border: 1px solid;\n    /*border: none;*/\n    border-radius: 5px;\n    height: 25px;\n    margin: 5px;\n   /* background-color: #000;\n    color: #fff;*/\n    /*width: 45%;*/\n}\n\n.container {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 35% 65%;*/\n    grid-template-columns: 35% 65%;\n    /*margin: 10px 0px;*/\n    height: 30vw;\n    justify-items: center;\n}\n\n.calculator_fan {\n    /*display: -ms-grid;*/\n    display: grid;\n    /* justify-items: center; */\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n    /*-ms-grid-row-align: center;*/\n    align-self: center;\n    /* grid-template-rows: 10% 35px 2em 5em 2em 5em; */\n    /* grid-template-columns: 79%; */\n}\n\n.calculator-text {\n    /*text-align: center;*/\n    font-weight: 700;\n    font-size: 22px;\n    margin: 20px 0px;\n}\n\n.calculator__input {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 410px;*/\n    grid-template-columns: 390px;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n}\n\n.size-value__text {\n    border: 2px solid #0f33ff;\n    background-color: black;\n   /* border-radius: 5px;\n    height: 25px;\n    margin: 5px;\n    width: 65%;\n    text-align: center;\n    font-size: 15px;*/\n    border-radius: 6px;\n    height: 26px;\n    margin: 5px;\n    width: 68%;\n    text-align: center;\n    font-size: 16px;\n    padding: 0;\n}\n\n.output-drawing {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 10% 90%;*/\n    grid-template-columns: 10% 90%;\n    /*-ms-grid-rows: 10% 90%;*/\n    grid-template-rows: 10% 90%;\n    justify-items: center;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n    overflow: hidden;\n    /*-ms-grid-column-align: normal;*/\n    justify-self: normal;\n}\n\n/*.output-drawing > *:nth-child(1) {*/\n/*-ms-grid-row: 1;*/\n/*-ms-grid-column: 1;*/\n/*}*/\n\n/*.output-drawing > *:nth-child(2) {*/\n/*-ms-grid-row: 1;*/\n/*-ms-grid-column: 2;*/\n/*}*/\n\n/*.output-drawing > *:nth-child(3) {*/\n/*-ms-grid-row: 2;*/\n/*-ms-grid-column: 1;*/\n/*}*/\n\n/*.output-drawing > *:nth-child(4) {*/\n/*-ms-grid-row: 2;*/\n/*-ms-grid-column: 2;*/\n/*}*/\n\n.output-image {\n    color: #fff;\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 50%;*/\n    grid-template-columns: 50%;\n    /*-ms-grid-rows: 100%;*/\n    grid-template-rows: 100%;\n    width: 100%;\n    height: 100%;\n    -webkit-box-pack: center;\n    /*-ms-flex-pack: center;*/\n    justify-content: center;\n    /*-ms-flex-line-pack: center;*/\n    align-content: center;\n    text-align: center;\n    align-items: center;\n}\n\n/*.output-image > *:nth-child(1) {*/\n/*-ms-grid-row: 1;*/\n/*-ms-grid-column: 1;*/\n/*}*/\n\n.output-image__image {\n    width: 97%;\n    height: 97%;\n    background: url(\"https://promovsn.ru/wp-content/themes/Impreza-child/img/elipse1.png\");\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-position-x: 50%;\n    position: relative;\n    cursor: pointer;\n    /*border: 1px solid black;*/\n    /*-webkit-animation: rotate 1s 1s infinite linear;*/\n    /*animation: rotate 1s 1s infinite linear;*/\n}\n\n.output-image__image--reverse {\n    /*animation: rotate-reverse 1s 1s infinite linear;*/\n}\n\n.image_animation--reverse {\n    -webkit-animation: rotate-reverse 1s infinite linear reverse;\n    animation: rotate-reverse 1s infinite linear reverse;\n}\n\n@keyframes rotate {\n    from {\n        -webkit-transform: rotateZ(0deg);\n        transform: rotateZ(0deg);\n    }\n\n    to {\n        -webkit-transform: rotateZ(360deg);\n        transform: rotateZ(360deg);\n    }\n}\n\n@keyframes rotate-reverse {\n    from {\n        -webkit-transform: rotateZ(45deg);\n        transform: rotateZ(45deg);\n    }\n\n    to {\n        -webkit-transform: rotateZ(-315deg);\n        transform: rotateZ(-315deg);\n    }\n}\n\n.output-value {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: (1fr)[4];*/\n    /*-ms-grid-columns: (1fr)[4];*/\n    grid-template-columns: repeat(4, 1fr);\n    justify-items: center;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n    /*border: 1px solid gold;*/\n   min-height: 130px;\n   /* margin-top: 25px; */\n}\n\n.output-value__icon {\n    display: -webkit-box;\n    /*display: -ms-flexbox;*/\n    display: flex;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n    justify-items: center;\n    margin-top: 10px;\n}\n\n[data-outputValue] {\n    margin: 5px;\n    opacity: 1;\n}\n\n.animationChangeOutputValueText {\n    -webkit-animation: changeOutputValueText 1s linear;\n    animation: changeOutputValueText 1s linear;\n}\n\n@-webkit-keyframes changeOutputValueText {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes changeOutputValueText {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n@media only screen and (max-width: 1080px) {\n    .calculator {\n        /*-ms-grid-rows: (1fr)[5];*/\n        grid-template-rows: repeat(5, 1fr);\n        justify-items: center;\n        -webkit-box-align: center;\n        /*-ms-flex-align: center;*/\n        align-items: center;\n    }\n\n    .calculator__select-container {\n        /*-ms-flex-item-align: center;*/\n        /*-ms-grid-row-align: center;*/\n        align-self: center;\n    }\n\n    .container-calculator {\n        /*-ms-grid-rows: 2fr 1fr;*/\n        grid-template-rows: 1.5fr 1fr;\n\n    }\n\n    .container {\n        /*-ms-grid-columns: 1fr;*/\n        grid-template-columns: 1fr;\n        justify-items: center;\n        height: auto;\n    }\n\n    .output-drawing {\n        display: none;\n    }\n\n    .output-value {\n        /*-ms-grid-columns: 1fr;*/\n        grid-template-columns: 1fr;\n        grid-gap: 5px;\n    }\n\n    .calculator__input{\n            grid-template-columns: 100%;\n        }\n}\n\n.output-image__line-width {\n    display: inline-block;\n    vertical-align: middle;\n    height: 10px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    min-width: 40px;\n}\n\n.output-image__line-width--left {\n    background: url(\"https://promovsn.ru/wp-content/themes/Impreza-child/img/arrow_horisontal.png\");\n    background-repeat: no-repeat;\n    background-size: auto 9px;\n    border-left: 1.5px solid #0f33ff;\n    background-position-y: 1px;\n}\n\n.output-image__line-width--right {\n    background: url(\"https://promovsn.ru/wp-content/themes/Impreza-child/img/arrow_horisontal.png\");\n    background-repeat: no-repeat;\n    background-size: auto 9px;\n   /* border-right: 1.5px solid #0f33ff;\n    background-position-x: 100%;\n    background-position-y: 1px;*/\n    border-left: 2px solid #0f33ff;\n    background-position-x: 0%;\n    background-position-y: 1px;\n    transform: rotateY(180deg);\n\n}\n\n\n.output-image__width {\n    display: inline-block;\n}\n\n.output-image__line-height {\n    width: 11px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    min-height: 40px;\n}\n\n.output-image__line-height--up {\n    background: url(\"https://promovsn.ru/wp-content/themes/Impreza-child/img/arrow_vertical.png\");\n    background-repeat: no-repeat;\n    background-size: 9px;\n    border-top: 1.5px solid #0f33ff;\n    background-position-x: 2px;\n\n}\n\n.output-image__line-height--down {\n    background: url(\"https://promovsn.ru/wp-content/themes/Impreza-child/img/arrow_vertical.png\");\n    background-repeat: no-repeat;\n    background-size: 10px;\n    -webkit-transform: rotateZ(180deg);\n    /*-ms-transform: rotate(180deg);*/\n    transform: rotateZ(180deg);\n    border-top: 1.5px solid #0f33ff;\n}\n\n.container-line-height {\n    /*display: -ms-grid;*/\n    display: grid;\n    justify-items: center;\n    position: relative;\n}\n\n.container-line-width {\n    position: relative;\n}\n\n.output-image__message {\n    display: none;\n}\n\n.input__row {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 65% 30%;*/\n    grid-template-columns: 65% 30%;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n}\n\n.input__change {\n    /*display: -ms-grid;*/\n    display: grid;\n    /*-ms-grid-columns: 0.5fr 1fr 0.5fr;*/\n    grid-template-columns: 0.5fr 1fr 0.5fr;\n    -webkit-box-align: center;\n    /*-ms-flex-align: center;*/\n    align-items: center;\n    justify-items: center;\n}\n\n.input__change > span {\n    font-weight: 700;\n    cursor: pointer;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n    box-shadow: none;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.input__change > span {\n    font-size: 36px;\n}\n\n.output-value__icon img {\n    width: 70px;\n    height: 70px;\n}\n\n\n/*  */\n\n\n\n#rec119452249000 .t-btn[data-btneffects-first],\n        #rec119452249000 .t-btn[data-btneffects-second],\n        #rec119452249000 .t-submit[data-btneffects-first],\n        #rec119452249000 .t-submit[data-btneffects-second] {\n            position: relative;\n            overflow: hidden;\n            -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n\n        #rec119452249000 .t-btn[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects,\n        #rec119452249000 .t-submit[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            -webkit-transform: translateX(-60px);\n            -ms-transform: translateX(-60px);\n            transform: translateX(-60px);\n            -webkit-animation-name: light;\n            animation-name: light;\n            -webkit-animation-duration: 4s;\n            animation-duration: 4s;\n            -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n            -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n        }\n\n        #rec119452249000 .t-btn[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects_md,\n        #rec119452249000 .t-submit[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects_md {\n            -webkit-animation-name: light-md;\n            animation-name: light-md;\n        }\n\n        #rec119452249000 .t-btn[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects_lg,\n        #rec119452249000 .t-submit[data-btneffects-first=\"btneffects-light\"] .t-btn_wrap-effects_lg {\n            -webkit-animation-name: light-lg;\n            animation-name: light-lg;\n        }\n\n        #rec119452249000 .t-btn[data-btneffects-first=\"btneffects-light\"] .t-btn_effects,\n        #rec119452249000 .t-submit[data-btneffects-first=\"btneffects-light\"] .t-btn_effects {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 60px;\n            height: 100%;\n            background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));\n            background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0));\n            background: -o-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0));\n            background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0));\n        }\n\n        @-webkit-keyframes light {\n            20% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n        @keyframes light {\n            20% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n        @-webkit-keyframes light-md {\n            30% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n        @keyframes light-md {\n            30% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n        @-webkit-keyframes light-lg {\n            40% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n        @keyframes light-lg {\n            40% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n            100% {\n                -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n            }\n        }\n\n"}
			</style>
			<script place={"endOfBody"} rawKey={"615d6c85319dfb1c00ab6dee"}>
				{"var dsee65h = 720;\nvar dsee65h_dist = 210;\nvar dsee65x = 520;\nvar dsee65x_dist = 120;\n\nfunction remove_calc_class (remove_calc_class){remove_calc_class.classList.remove(\"animationChangeOutputValueText\")};\nfunction add_calc_class (add_calc_class){add_calc_class.classList.add(\"animationChangeOutputValueText\")};\n\n// обновление значений пикселей при выборе другой модели\n\ndocument.getElementById(\"calc_fan\").addEventListener(\"change\", function () {\n    var select = document.getElementById(\"calc_fan\");\n    var value = select.options[select.selectedIndex].value; \n    var quantityValueHorizontalVal = document.getElementById(\"quantityValueHorizontal\").value;\n    var quantityValueVerticalVal = document.getElementById(\"quantityValueVertical\").value;\n    var first_pixel = document.getElementById('first_pixel');\n\n    if(value == \"h\"){\n    // document.getElementById('first_pixel').innerHTML = quantityValueHorizontalVal * dsee65h + \"x\" + quantityValueVerticalVal * dsee65h;\n    first_pixel.innerHTML = quantityValueHorizontalVal * dsee65h + \"x\" + quantityValueVerticalVal * dsee65h;\n}else if(value == \"x\") {\n    // document.getElementById('first_pixel').innerHTML = quantityValueHorizontalVal * dsee65x + \"x\" + quantityValueVerticalVal * dsee65x\n    first_pixel.innerHTML = quantityValueHorizontalVal * dsee65x + \"x\" + quantityValueVerticalVal * dsee65x;\n    }\n});\n\n!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&n&&\"string\"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\"a\",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p=\"\",e(e.s=121)}([function(t,n,e){var r=e(1),i=e(7),o=e(14),u=e(11),a=e(17),c=function t(n,e,c){var s,f,l,h,p=n&t.F,v=n&t.G,y=n&t.P,d=n&t.B,g=v?r:n&t.S?r[e]||(r[e]={}):(r[e]||{}).prototype,m=v?i:i[e]||(i[e]={}),b=m.prototype||(m.prototype={});for(s in v&&(c=e),c)l=((f=!p&&g&&void 0!==g[s])?g:c)[s],h=d&&f?a(l,r):y&&\"function\"==typeof l?a(Function.call,l):l,g&&u(g,s,l,n&t.U),m[s]!=l&&o(m,s,h),y&&b[s]!=l&&(b[s]=l)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},function(t,n){function e(t){return(e=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}t.exports=function(t){return\"object\"===e(t)?null!==t:\"function\"==typeof t}},function(t,n,e){var r=e(48)(\"wks\"),i=e(29),o=e(1).Symbol,u=\"function\"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)(\"Symbol.\"+t))}).store=r},function(t,n,e){var r=e(19),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){var e=t.exports={version:\"2.6.9\"};\"number\"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(2)(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3),i=e(88),o=e(26),u=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if(\"get\"in e||\"set\"in e)throw TypeError(\"Accessors not supported!\");return\"value\"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(24);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1),i=e(14),o=e(13),u=e(29)(\"src\"),a=e(126),c=(\"\"+a).split(\"toString\");e(7).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var s=\"function\"==typeof e;s&&(o(e,\"name\")||i(e,\"name\",n)),t[n]!==e&&(s&&(o(e,u)||i(e,u,t[n]?\"\"+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,\"toString\",function(){return\"function\"==typeof this&&this[u]||a.call(this)})},function(t,n,e){var r=e(0),i=e(2),o=e(24),u=/\"/g,a=function(t,n,e,r){var i=String(o(t)),a=\"<\"+n;return\"\"!==e&&(a+=\" \"+e+'=\"'+String(r).replace(u,\"&quot;\")+'\"'),a+\">\"+i+\"</\"+n+\">\"};t.exports=function(t,n){var e={};e[t]=n(a),r(r.P+r.F*i(function(){var n=\"\"[t]('\"');return n!==n.toLowerCase()||n.split('\"').length>3}),\"String\",e)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(9),i=e(28);t.exports=e(8)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(44),i=e(24);t.exports=function(t){return r(i(t))}},function(t,n,e){\"use strict\";var r=e(2);t.exports=function(t,n){return!!t&&r(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(45),i=e(28),o=e(15),u=e(26),a=e(13),c=e(88),s=Object.getOwnPropertyDescriptor;n.f=e(8)?s:function(t,n){if(t=o(t),n=u(n,!0),c)try{return s(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),i=e(7),o=e(2);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*o(function(){e(1)}),\"Object\",u)}},function(t,n,e){var r=e(17),i=e(44),o=e(10),u=e(6),a=e(104);t.exports=function(t,n){var e=1==t,c=2==t,s=3==t,f=4==t,l=6==t,h=5==t||l,p=n||a;return function(n,a,v){for(var y,d,g=o(n),m=i(g),b=r(a,v,3),x=u(m.length),S=0,w=e?p(n,x):c?p(n,0):void 0;x>S;S++)if((h||S in m)&&(d=b(y=m[S],S,g),t))if(e)w[S]=d;else if(d)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:w.push(y)}else if(f)return!1;return l?-1:s||f?f:w}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError(\"Can't call method on  \"+t);return t}},function(t,n,e){\"use strict\";function r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}if(e(8)){var i=e(30),o=e(1),u=e(2),a=e(0),c=e(59),s=e(84),f=e(17),l=e(42),h=e(28),p=e(14),v=e(43),y=e(19),d=e(6),g=e(115),m=e(32),b=e(26),x=e(13),S=e(46),w=e(4),E=e(10),_=e(76),O=e(33),M=e(35),I=e(34).f,P=e(78),F=e(29),V=e(5),A=e(22),j=e(49),k=e(47),T=e(80),N=e(40),L=e(52),C=e(41),z=e(79),q=e(106),R=e(9),D=e(20),H=R.f,B=D.f,W=o.RangeError,G=o.TypeError,Q=o.Uint8Array,U=Array.prototype,$=s.ArrayBuffer,Y=s.DataView,X=A(0),K=A(2),J=A(3),Z=A(4),tt=A(5),nt=A(6),et=j(!0),rt=j(!1),it=T.values,ot=T.keys,ut=T.entries,at=U.lastIndexOf,ct=U.reduce,st=U.reduceRight,ft=U.join,lt=U.sort,ht=U.slice,pt=U.toString,vt=U.toLocaleString,yt=V(\"iterator\"),dt=V(\"toStringTag\"),gt=F(\"typed_constructor\"),mt=F(\"def_constructor\"),bt=c.CONSTR,xt=c.TYPED,St=c.VIEW,wt=A(1,function(t,n){return It(k(t,t[mt]),n)}),Et=u(function(){return 1===new Q(new Uint16Array([1]).buffer)[0]}),_t=!!Q&&!!Q.prototype.set&&u(function(){new Q(1).set({})}),Ot=function(t,n){var e=y(t);if(e<0||e%n)throw W(\"Wrong offset!\");return e},Mt=function(t){if(w(t)&&xt in t)return t;throw G(t+\" is not a typed array!\")},It=function(t,n){if(!(w(t)&&gt in t))throw G(\"It is not a typed array constructor!\");return new t(n)},Pt=function(t,n){return Ft(k(t,t[mt]),n)},Ft=function(t,n){for(var e=0,r=n.length,i=It(t,r);r>e;)i[e]=n[e++];return i},Vt=function(t,n,e){H(t,n,{get:function(){return this._d[e]}})},At=function(t){var n,e,r,i,o,u,a=E(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,h=P(a);if(null!=h&&!_(h)){for(u=h.call(a),r=[],n=0;!(o=u.next()).done;n++)r.push(o.value);a=r}for(l&&c>2&&(s=f(s,arguments[2],2)),n=0,e=d(a.length),i=It(this,e);e>n;n++)i[n]=l?s(a[n],n):a[n];return i},jt=function(){for(var t=0,n=arguments.length,e=It(this,n);n>t;)e[t]=arguments[t++];return e},kt=!!Q&&u(function(){vt.call(new Q(1))}),Tt=function(){return vt.apply(kt?ht.call(Mt(this)):Mt(this),arguments)},Nt={copyWithin:function(t,n){return q.call(Mt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Mt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return z.apply(Mt(this),arguments)},filter:function(t){return Pt(this,K(Mt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return tt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return nt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(Mt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Mt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ft.apply(Mt(this),arguments)},lastIndexOf:function(t){return at.apply(Mt(this),arguments)},map:function(t){return wt(Mt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Mt(this),arguments)},reduceRight:function(t){return st.apply(Mt(this),arguments)},reverse:function(){for(var t,n=Mt(this).length,e=Math.floor(n/2),r=0;r<e;)t=this[r],this[r++]=this[--n],this[n]=t;return this},some:function(t){return J(Mt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return lt.call(Mt(this),t)},subarray:function(t,n){var e=Mt(this),r=e.length,i=m(t,r);return new(k(e,e[mt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,d((void 0===n?r:m(n,r))-i))}},Lt=function(t,n){return Pt(this,ht.call(Mt(this),t,n))},Ct=function(t){Mt(this);var n=Ot(arguments[1],1),e=this.length,r=E(t),i=d(r.length),o=0;if(i+n>e)throw W(\"Wrong length!\");for(;o<i;)this[n+o]=r[o++]},zt={entries:function(){return ut.call(Mt(this))},keys:function(){return ot.call(Mt(this))},values:function(){return it.call(Mt(this))}},qt=function(t,n){return w(t)&&t[xt]&&\"symbol\"!=r(n)&&n in t&&String(+n)==String(n)},Rt=function(t,n){return qt(t,n=b(n,!0))?h(2,t[n]):B(t,n)},Dt=function(t,n,e){return!(qt(t,n=b(n,!0))&&w(e)&&x(e,\"value\"))||x(e,\"get\")||x(e,\"set\")||e.configurable||x(e,\"writable\")&&!e.writable||x(e,\"enumerable\")&&!e.enumerable?H(t,n,e):(t[n]=e.value,t)};bt||(D.f=Rt,R.f=Dt),a(a.S+a.F*!bt,\"Object\",{getOwnPropertyDescriptor:Rt,defineProperty:Dt}),u(function(){pt.call({})})&&(pt=vt=function(){return ft.call(this)});var Ht=v({},Nt);v(Ht,zt),p(Ht,yt,zt.values),v(Ht,{slice:Lt,set:Ct,constructor:function(){},toString:pt,toLocaleString:Tt}),Vt(Ht,\"buffer\",\"b\"),Vt(Ht,\"byteOffset\",\"o\"),Vt(Ht,\"byteLength\",\"l\"),Vt(Ht,\"length\",\"e\"),H(Ht,dt,{get:function(){return this[xt]}}),t.exports=function(t,n,e,r){var s=t+((r=!!r)?\"Clamped\":\"\")+\"Array\",f=\"get\"+t,h=\"set\"+t,v=o[s],y=v||{},m=v&&M(v),b=!v||!c.ABV,x={},E=v&&v.prototype,_=function(t,e){H(t,e,{get:function(){return function(t,e){var r=t._d;return r.v[f](e*n+r.o,Et)}(this,e)},set:function(t){return function(t,e,i){var o=t._d;r&&(i=(i=Math.round(i))<0?0:i>255?255:255&i),o.v[h](e*n+o.o,i,Et)}(this,e,t)},enumerable:!0})};b?(v=e(function(t,e,r,i){l(t,v,s,\"_d\");var o,u,a,c,f=0,h=0;if(w(e)){if(!(e instanceof $||\"ArrayBuffer\"==(c=S(e))||\"SharedArrayBuffer\"==c))return xt in e?Ft(v,e):At.call(v,e);o=e,h=Ot(r,n);var y=e.byteLength;if(void 0===i){if(y%n)throw W(\"Wrong length!\");if((u=y-h)<0)throw W(\"Wrong length!\")}else if((u=d(i)*n)+h>y)throw W(\"Wrong length!\");a=u/n}else a=g(e),o=new $(u=a*n);for(p(t,\"_d\",{b:o,o:h,l:u,e:a,v:new Y(o)});f<a;)_(t,f++)}),E=v.prototype=O(Ht),p(E,\"constructor\",v)):u(function(){v(1)})&&u(function(){new v(-1)})&&L(function(t){new v,new v(null),new v(1.5),new v(t)},!0)||(v=e(function(t,e,r,i){var o;return l(t,v,s),w(e)?e instanceof $||\"ArrayBuffer\"==(o=S(e))||\"SharedArrayBuffer\"==o?void 0!==i?new y(e,Ot(r,n),i):void 0!==r?new y(e,Ot(r,n)):new y(e):xt in e?Ft(v,e):At.call(v,e):new y(g(e))}),X(m!==Function.prototype?I(y).concat(I(m)):I(y),function(t){t in v||p(v,t,y[t])}),v.prototype=E,i||(E.constructor=v));var P=E[yt],F=!!P&&(\"values\"==P.name||null==P.name),V=zt.values;p(v,gt,!0),p(E,xt,s),p(E,St,!0),p(E,mt,v),(r?new v(1)[dt]==s:dt in E)||H(E,dt,{get:function(){return s}}),x[s]=v,a(a.G+a.W+a.F*(v!=y),x),a(a.S,s,{BYTES_PER_ELEMENT:n}),a(a.S+a.F*u(function(){y.of.call(v,1)}),s,{from:At,of:jt}),\"BYTES_PER_ELEMENT\"in E||p(E,\"BYTES_PER_ELEMENT\",n),a(a.P,s,Nt),C(s),a(a.P+a.F*_t,s,{set:Ct}),a(a.P+a.F*!F,s,zt),i||E.toString==pt||(E.toString=pt),a(a.P+a.F*u(function(){new v(1).slice()}),s,{slice:Lt}),a(a.P+a.F*(u(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!u(function(){E.toLocaleString.call([1,2])})),s,{toLocaleString:Tt}),N[s]=F?P:V,i||F||p(E,yt,V)}}else t.exports=function(){}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&\"function\"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if(\"function\"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&\"function\"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError(\"Can't convert object to primitive value\")}},function(t,n,e){function r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var i=e(29)(\"meta\"),o=e(4),u=e(13),a=e(9).f,c=0,s=Object.isExtensible||function(){return!0},f=!e(2)(function(){return s(Object.preventExtensions({}))}),l=function(t){a(t,i,{value:{i:\"O\"+ ++c,w:{}}})},h=t.exports={KEY:i,NEED:!1,fastKey:function(t,n){if(!o(t))return\"symbol\"==r(t)?t:(\"string\"==typeof t?\"S\":\"P\")+t;if(!u(t,i)){if(!s(t))return\"F\";if(!n)return\"E\";l(t)}return t[i].i},getWeak:function(t,n){if(!u(t,i)){if(!s(t))return!0;if(!n)return!1;l(t)}return t[i].w},onFreeze:function(t){return f&&h.NEED&&s(t)&&!u(t,i)&&l(t),t}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return\"Symbol(\".concat(void 0===t?\"\":t,\")_\",(++e+r).toString(36))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(90),i=e(63);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(19),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(3),i=e(91),o=e(63),u=e(62)(\"IE_PROTO\"),a=function(){},c=function(){var t,n=e(60)(\"iframe\"),r=o.length;for(n.style.display=\"none\",e(64).appendChild(n),n.src=\"javascript:\",(t=n.contentWindow.document).open(),t.write(\"<script>document.F=Object<\\/script>\"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=c(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(90),i=e(63).concat(\"length\",\"prototype\");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(13),i=e(10),o=e(62)(\"IE_PROTO\"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:\"function\"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(5)(\"unscopables\"),i=Array.prototype;null==i[r]&&e(14)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError(\"Incompatible receiver, \"+n+\" required!\");return t}},function(t,n,e){var r=e(9).f,i=e(13),o=e(5)(\"toStringTag\");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(0),i=e(24),o=e(2),u=e(66),a=\"[\"+u+\"]\",c=RegExp(\"^\"+a+a+\"*\"),s=RegExp(a+a+\"*$\"),f=function(t,n,e){var i={},a=o(function(){return!!u[t]()||\"​\"!=\"​\"[t]()}),c=i[t]=a?n(l):u[t];e&&(i[e]=c),r(r.P+r.F*a,\"String\",i)},l=f.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(c,\"\")),2&n&&(t=t.replace(s,\"\")),t};t.exports=f},function(t,n){t.exports={}},function(t,n,e){\"use strict\";var r=e(1),i=e(9),o=e(8),u=e(5)(\"species\");t.exports=function(t){var n=r[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+\": incorrect invocation!\");return t}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){var r=e(23);t.exports=Object(\"z\").propertyIsEnumerable(0)?Object:function(t){return\"String\"==r(t)?t.split(\"\"):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(23),i=e(5)(\"toStringTag\"),o=\"Arguments\"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?\"Undefined\":null===t?\"Null\":\"string\"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):\"Object\"==(u=r(n))&&\"function\"==typeof n.callee?\"Arguments\":u}},function(t,n,e){var r=e(3),i=e(18),o=e(5)(\"species\");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[o])?n:i(e)}},function(t,n,e){var r=e(7),i=e(1),o=i[\"__core-js_shared__\"]||(i[\"__core-js_shared__\"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})(\"versions\",[]).push({version:r.version,mode:e(30)?\"pure\":\"global\",copyright:\"© 2019 Denis Pushkarev (zloirock.ru)\"})},function(t,n,e){var r=e(15),i=e(6),o=e(32);t.exports=function(t){return function(n,e,u){var a,c=r(n),s=i(c.length),f=o(u,s);if(t&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(23);t.exports=Array.isArray||function(t){return\"Array\"==r(t)}},function(t,n,e){var r=e(5)(\"iterator\"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:e=!0}},o[r]=function(){return u},t(o)}catch(t){}return e}},function(t,n,e){\"use strict\";var r=e(3);t.exports=function(){var t=r(this),n=\"\";return t.global&&(n+=\"g\"),t.ignoreCase&&(n+=\"i\"),t.multiline&&(n+=\"m\"),t.unicode&&(n+=\"u\"),t.sticky&&(n+=\"y\"),n}},function(t,n,e){\"use strict\";function r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var i=e(46),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if(\"function\"==typeof e){var u=e.call(t,n);if(\"object\"!==r(u))throw new TypeError(\"RegExp exec method returned something other than an Object or null\");return u}if(\"RegExp\"!==i(t))throw new TypeError(\"RegExp#exec called on incompatible receiver\");return o.call(t,n)}},function(t,n,e){\"use strict\";e(108);var r=e(11),i=e(14),o=e(2),u=e(24),a=e(5),c=e(81),s=a(\"species\"),f=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:\"7\"},t},\"7\"!==\"\".replace(t,\"$<a>\")}),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e=\"ab\".split(t);return 2===e.length&&\"a\"===e[0]&&\"b\"===e[1]}();t.exports=function(t,n,e){var h=a(t),p=!o(function(){var n={};return n[h]=function(){return 7},7!=\"\"[t](n)}),v=p?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},\"split\"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[h](\"\"),!n}):void 0;if(!p||!v||\"replace\"===t&&!f||\"split\"===t&&!l){var y=/./[h],d=e(u,h,\"\"[t],function(t,n,e,r,i){return n.exec===c?p&&!i?{done:!0,value:y.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),g=d[0],m=d[1];r(String.prototype,t,g),i(RegExp.prototype,h,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},function(t,n,e){var r=e(17),i=e(103),o=e(76),u=e(3),a=e(6),c=e(78),s={},f={};(n=t.exports=function(t,n,e,l,h){var p,v,y,d,g=h?function(){return t}:c(t),m=r(e,l,n?2:1),b=0;if(\"function\"!=typeof g)throw TypeError(t+\" is not iterable!\");if(o(g)){for(p=a(t.length);p>b;b++)if((d=n?m(u(v=t[b])[0],v[1]):m(t[b]))===s||d===f)return d}else for(y=g.call(t);!(v=y.next()).done;)if((d=i(y,m,v.value,n))===s||d===f)return d}).BREAK=s,n.RETURN=f},function(t,n,e){var r=e(1).navigator;t.exports=r&&r.userAgent||\"\"},function(t,n,e){\"use strict\";var r=e(1),i=e(0),o=e(11),u=e(43),a=e(27),c=e(56),s=e(42),f=e(4),l=e(2),h=e(52),p=e(38),v=e(67);t.exports=function(t,n,e,y,d,g){var m=r[t],b=m,x=d?\"set\":\"add\",S=b&&b.prototype,w={},E=function(t){var n=S[t];o(S,t,\"delete\"==t?function(t){return!(g&&!f(t))&&n.call(this,0===t?0:t)}:\"has\"==t?function(t){return!(g&&!f(t))&&n.call(this,0===t?0:t)}:\"get\"==t?function(t){return g&&!f(t)?void 0:n.call(this,0===t?0:t)}:\"add\"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if(\"function\"==typeof b&&(g||S.forEach&&!l(function(){(new b).entries().next()}))){var _=new b,O=_[x](g?{}:-0,1)!=_,M=l(function(){_.has(1)}),I=h(function(t){new b(t)}),P=!g&&l(function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)});I||((b=n(function(n,e){s(n,b,t);var r=v(new m,n,b);return null!=e&&c(e,d,r[x],r),r})).prototype=S,S.constructor=b),(M||P)&&(E(\"delete\"),E(\"has\"),d&&E(\"get\")),(P||O)&&E(x),g&&S.clear&&delete S.clear}else b=y.getConstructor(n,t,d,x),u(b.prototype,e),a.NEED=!0;return p(b,t),w[t]=b,i(i.G+i.W+i.F*(b!=m),w),g||y.setStrong(b,t,d),b}},function(t,n,e){for(var r,i=e(1),o=e(14),u=e(29),a=u(\"typed_array\"),c=u(\"view\"),s=!(!i.ArrayBuffer||!i.DataView),f=s,l=0,h=\"Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array\".split(\",\");l<9;)(r=i[h[l++]])?(o(r.prototype,a,!0),o(r.prototype,c,!0)):f=!1;t.exports={ABV:s,CONSTR:f,TYPED:a,VIEW:c}},function(t,n,e){var r=e(4),i=e(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){n.f=e(5)},function(t,n,e){var r=e(48)(\"keys\"),i=e(29);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports=\"constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf\".split(\",\")},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),i=e(3),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+\": can't set as prototype!\")};t.exports={set:Object.setPrototypeOf||(\"__proto__\"in{}?function(t,n,r){try{(r=e(17)(Function.call,e(20).f(Object.prototype,\"__proto__\").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n){t.exports=\"\\t\\n\\v\\f\\r   ᠎             　\\u2028\\u2029\\ufeff\"},function(t,n,e){var r=e(4),i=e(65).set;t.exports=function(t,n,e){var o,u=n.constructor;return u!==e&&\"function\"==typeof u&&(o=u.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){\"use strict\";var r=e(19),i=e(24);t.exports=function(t){var n=String(i(this)),e=\"\",o=r(t);if(o<0||o==1/0)throw RangeError(\"Count can't be negative\");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},function(t,n,e){var r=e(19),i=e(24);t.exports=function(t){return function(n,e){var o,u,a=String(i(n)),c=r(e),s=a.length;return c<0||c>=s?t?\"\":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536}}},function(t,n,e){\"use strict\";var r=e(30),i=e(0),o=e(11),u=e(14),a=e(40),c=e(102),s=e(38),f=e(35),l=e(5)(\"iterator\"),h=!([].keys&&\"next\"in[].keys()),p=function(){return this};t.exports=function(t,n,e,v,y,d,g){c(e,n,v);var m,b,x,S=function(t){if(!h&&t in O)return O[t];switch(t){case\"keys\":case\"values\":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+\" Iterator\",E=\"values\"==y,_=!1,O=t.prototype,M=O[l]||O[\"@@iterator\"]||y&&O[y],I=M||S(y),P=y?E?S(\"entries\"):I:void 0,F=\"Array\"==n&&O.entries||M;if(F&&(x=f(F.call(new t)))!==Object.prototype&&x.next&&(s(x,w,!0),r||\"function\"==typeof x[l]||u(x,l,p)),E&&M&&\"values\"!==M.name&&(_=!0,I=function(){return M.call(this)}),r&&!g||!h&&!_&&O[l]||u(O,l,I),a[n]=I,a[w]=p,y)if(m={values:E?I:S(\"values\"),keys:d?I:S(\"keys\"),entries:P},g)for(b in m)b in O||o(O,b,m[b]);else i(i.P+i.F*(h||_),n,m);return m}},function(t,n,e){var r=e(74),i=e(24);t.exports=function(t,n,e){if(r(n))throw TypeError(\"String#\"+e+\" doesn't accept regex!\");return String(i(t))}},function(t,n,e){var r=e(4),i=e(23),o=e(5)(\"match\");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:\"RegExp\"==i(t))}},function(t,n,e){var r=e(5)(\"match\");t.exports=function(t){var n=/./;try{\"/./\"[t](n)}catch(e){try{return n[r]=!1,!\"/./\"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(40),i=e(5)(\"iterator\"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){\"use strict\";var r=e(9),i=e(28);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(46),i=e(5)(\"iterator\"),o=e(40);t.exports=e(7).getIteratorMethod=function(t){if(null!=t)return t[i]||t[\"@@iterator\"]||o[r(t)]}},function(t,n,e){\"use strict\";var r=e(10),i=e(32),o=e(6);t.exports=function(t){for(var n=r(this),e=o(n.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,e),c=u>2?arguments[2]:void 0,s=void 0===c?e:i(c,e);s>a;)n[a++]=t;return n}},function(t,n,e){\"use strict\";var r=e(36),i=e(107),o=e(40),u=e(15);t.exports=e(72)(Array,\"Array\",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,\"keys\"==n?e:\"values\"==n?t[e]:[e,t[e]])},\"values\"),o.Arguments=o.Array,r(\"keys\"),r(\"values\"),r(\"entries\")},function(t,n,e){\"use strict\";var r,i,o=e(53),u=RegExp.prototype.exec,a=String.prototype.replace,c=u,s=(r=/a/,i=/b*/g,u.call(r,\"a\"),u.call(i,\"a\"),0!==r.lastIndex||0!==i.lastIndex),f=void 0!==/()??/.exec(\"\")[1];(s||f)&&(c=function(t){var n,e,r,i,c=this;return f&&(e=new RegExp(\"^\"+c.source+\"$(?!\\\\s)\",o.call(c))),s&&(n=c.lastIndex),r=u.call(c,t),s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),f&&r&&r.length>1&&a.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=c},function(t,n,e){\"use strict\";var r=e(71)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r,i,o,u=e(17),a=e(96),c=e(64),s=e(60),f=e(1),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,y=f.Dispatch,d=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};h&&p||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++d]=function(){a(\"function\"==typeof t?t:Function(t),n)},r(d),d},p=function(t){delete g[t]},\"process\"==e(23)(l)?r=function(t){l.nextTick(u(m,t,1))}:y&&y.now?r=function(t){y.now(u(m,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=b,r=u(o.postMessage,o,1)):f.addEventListener&&\"function\"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+\"\",\"*\")},f.addEventListener(\"message\",b,!1)):r=\"onreadystatechange\"in s(\"script\")?function(t){c.appendChild(s(\"script\")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,e){\"use strict\";var r=e(1),i=e(8),o=e(30),u=e(59),a=e(14),c=e(43),s=e(2),f=e(42),l=e(19),h=e(6),p=e(115),v=e(34).f,y=e(9).f,d=e(79),g=e(38),m=\"prototype\",b=\"Wrong index!\",x=r.ArrayBuffer,S=r.DataView,w=r.Math,E=r.RangeError,_=r.Infinity,O=x,M=w.abs,I=w.pow,P=w.floor,F=w.log,V=w.LN2,A=i?\"_b\":\"buffer\",j=i?\"_l\":\"byteLength\",k=i?\"_o\":\"byteOffset\";function T(t,n,e){var r,i,o,u=new Array(e),a=8*e-n-1,c=(1<<a)-1,s=c>>1,f=23===n?I(2,-24)-I(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=M(t))!=t||t===_?(i=t!=t?1:0,r=c):(r=P(F(t)/V),t*(o=I(2,-r))<1&&(r--,o*=2),(t+=r+s>=1?f/o:f*I(2,1-s))*o>=2&&(r++,o/=2),r+s>=c?(i=0,r=c):r+s>=1?(i=(t*o-1)*I(2,n),r+=s):(i=t*I(2,s-1)*I(2,n),r=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(r=r<<n|i,a+=n;a>0;u[l++]=255&r,r/=256,a-=8);return u[--l]|=128*h,u}function N(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,u=o>>1,a=i-7,c=e-1,s=t[c--],f=127&s;for(s>>=7;a>0;f=256*f+t[c],c--,a-=8);for(r=f&(1<<-a)-1,f>>=-a,a+=n;a>0;r=256*r+t[c],c--,a-=8);if(0===f)f=1-u;else{if(f===o)return r?NaN:s?-_:_;r+=I(2,n),f-=u}return(s?-1:1)*r*I(2,f-n)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function C(t){return[255&t]}function z(t){return[255&t,t>>8&255]}function q(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function R(t){return T(t,52,8)}function D(t){return T(t,23,4)}function H(t,n,e){y(t[m],n,{get:function(){return this[e]}})}function B(t,n,e,r){var i=p(+e);if(i+n>t[j])throw E(b);var o=t[A]._b,u=i+t[k],a=o.slice(u,u+n);return r?a:a.reverse()}function W(t,n,e,r,i,o){var u=p(+e);if(u+n>t[j])throw E(b);for(var a=t[A]._b,c=u+t[k],s=r(+i),f=0;f<n;f++)a[c+f]=s[o?f:n-f-1]}if(u.ABV){if(!s(function(){x(1)})||!s(function(){new x(-1)})||s(function(){return new x,new x(1.5),new x(NaN),\"ArrayBuffer\"!=x.name})){for(var G,Q=(x=function(t){return f(this,x),new O(p(t))})[m]=O[m],U=v(O),$=0;U.length>$;)(G=U[$++])in x||a(x,G,O[G]);o||(Q.constructor=x)}var Y=new S(new x(2)),X=S[m].setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||c(S[m],{setInt8:function(t,n){X.call(this,t,n<<24>>24)},setUint8:function(t,n){X.call(this,t,n<<24>>24)}},!0)}else x=function(t){f(this,x,\"ArrayBuffer\");var n=p(t);this._b=d.call(new Array(n),0),this[j]=n},S=function(t,n,e){f(this,S,\"DataView\"),f(t,x,\"DataView\");var r=t[j],i=l(n);if(i<0||i>r)throw E(\"Wrong offset!\");if(i+(e=void 0===e?r-i:h(e))>r)throw E(\"Wrong length!\");this[A]=t,this[k]=i,this[j]=e},i&&(H(x,\"byteLength\",\"_l\"),H(S,\"buffer\",\"_b\"),H(S,\"byteLength\",\"_l\"),H(S,\"byteOffset\",\"_o\")),c(S[m],{getInt8:function(t){return B(this,1,t)[0]<<24>>24},getUint8:function(t){return B(this,1,t)[0]},getInt16:function(t){var n=B(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=B(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return L(B(this,4,t,arguments[1]))},getUint32:function(t){return L(B(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return N(B(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return N(B(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){W(this,1,t,C,n)},setUint8:function(t,n){W(this,1,t,C,n)},setInt16:function(t,n){W(this,2,t,z,n,arguments[2])},setUint16:function(t,n){W(this,2,t,z,n,arguments[2])},setInt32:function(t,n){W(this,4,t,q,n,arguments[2])},setUint32:function(t,n){W(this,4,t,q,n,arguments[2])},setFloat32:function(t,n){W(this,4,t,D,n,arguments[2])},setFloat64:function(t,n){W(this,8,t,R,n,arguments[2])}});g(x,\"ArrayBuffer\"),g(S,\"DataView\"),a(S[m],u.VIEW,!0),n.ArrayBuffer=x,n.DataView=S},function(t,n){var e=t.exports=\"undefined\"!=typeof window&&window.Math==Math?window:\"undefined\"!=typeof self&&self.Math==Math?self:Function(\"return this\")();\"number\"==typeof __g&&(__g=e)},function(t,n){function e(t){return(e=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}t.exports=function(t){return\"object\"===e(t)?null!==t:\"function\"==typeof t}},function(t,n,e){t.exports=!e(120)(function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(8)&&!e(2)(function(){return 7!=Object.defineProperty(e(60)(\"div\"),\"a\",{get:function(){return 7}}).a})},function(t,n,e){var r=e(1),i=e(7),o=e(30),u=e(61),a=e(9).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});\"_\"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(13),i=e(15),o=e(49)(!1),u=e(62)(\"IE_PROTO\");t.exports=function(t,n){var e,a=i(t),c=0,s=[];for(e in a)e!=u&&r(a,e)&&s.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(s,e)||s.push(e));return s}},function(t,n,e){var r=e(9),i=e(3),o=e(31);t.exports=e(8)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),a=u.length,c=0;a>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){function r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var i=e(15),o=e(34).f,u={}.toString,a=\"object\"==(\"undefined\"==typeof window?\"undefined\":r(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&\"[object Window]\"==u.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(i(t))}},function(t,n,e){\"use strict\";var r=e(8),i=e(31),o=e(50),u=e(45),a=e(10),c=e(44),s=Object.assign;t.exports=!s||e(2)(function(){var t={},n={},e=Symbol(),r=\"abcdefghijklmnopqrst\";return t[e]=7,r.split(\"\").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join(\"\")!=r})?function(t,n){for(var e=a(t),s=arguments.length,f=1,l=o.f,h=u.f;s>f;)for(var p,v=c(arguments[f++]),y=l?i(v).concat(l(v)):i(v),d=y.length,g=0;d>g;)p=y[g++],r&&!h.call(v,p)||(e[p]=v[p]);return e}:s},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){\"use strict\";var r=e(18),i=e(4),o=e(96),u=[].slice,a={},c=function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]=\"a[\"+i+\"]\";a[n]=Function(\"F,a\",\"return new F(\"+r.join(\",\")+\")\")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=u.call(arguments,1),a=function r(){var i=e.concat(u.call(arguments));return this instanceof r?c(n,i.length,i):o(n,i,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(1).parseInt,i=e(39).trim,o=e(66),u=/^[-+]?0[xX]/;t.exports=8!==r(o+\"08\")||22!==r(o+\"0x16\")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(u.test(e)?16:10))}:r},function(t,n,e){var r=e(1).parseFloat,i=e(39).trim;t.exports=1/r(e(66)+\"-0\")!=-1/0?function(t){var n=i(String(t),3),e=r(n);return 0===e&&\"-\"==n.charAt(0)?-0:e}:r},function(t,n,e){var r=e(23);t.exports=function(t,n){if(\"number\"!=typeof t&&\"Number\"!=r(t))throw TypeError(n);return+t}},function(t,n,e){var r=e(4),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,e){\"use strict\";var r=e(33),i=e(28),o=e(38),u={};e(14)(u,e(5)(\"iterator\"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+\" Iterator\")}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(216);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(18),i=e(10),o=e(44),u=e(6);t.exports=function(t,n,e,a,c){r(n);var s=i(t),f=o(s),l=u(s.length),h=c?l-1:0,p=c?-1:1;if(e<2)for(;;){if(h in f){a=f[h],h+=p;break}if(h+=p,c?h<0:l<=h)throw TypeError(\"Reduce of empty array with no initial value\")}for(;c?h>=0:l>h;h+=p)h in f&&(a=n(a,f[h],h,s));return a}},function(t,n,e){\"use strict\";var r=e(10),i=e(32),o=e(6);t.exports=[].copyWithin||function(t,n){var e=r(this),u=o(e.length),a=i(t,u),c=i(n,u),s=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===s?u:i(s,u))-c,u-a),l=1;for(c<a&&a<c+f&&(l=-1,c+=f-1,a+=f-1);f-- >0;)c in e?e[a]=e[c]:delete e[a],a+=l,c+=l;return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){\"use strict\";var r=e(81);e(0)({target:\"RegExp\",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){e(8)&&\"g\"!=/./g.flags&&e(9).f(RegExp.prototype,\"flags\",{configurable:!0,get:e(53)})},function(t,n,e){\"use strict\";var r,i,o,u,a=e(30),c=e(1),s=e(17),f=e(46),l=e(0),h=e(4),p=e(18),v=e(42),y=e(56),d=e(47),g=e(83).set,m=e(236)(),b=e(111),x=e(237),S=e(57),w=e(112),E=c.TypeError,_=c.process,O=_&&_.versions,M=O&&O.v8||\"\",I=c.Promise,P=\"process\"==f(_),F=function(){},V=i=b.f,A=!!function(){try{var t=I.resolve(1),n=(t.constructor={})[e(5)(\"species\")]=function(t){t(F,F)};return(P||\"function\"==typeof PromiseRejectionEvent)&&t.then(F)instanceof n&&0!==M.indexOf(\"6.6\")&&-1===S.indexOf(\"Chrome/66\")}catch(t){}}(),j=function(t){var n;return!(!h(t)||\"function\"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,i=1==t._s,o=0,u=function(n){var e,o,u,a=i?n.ok:n.fail,c=n.resolve,s=n.reject,f=n.domain;try{a?(i||(2==t._h&&L(t),t._h=1),!0===a?e=r:(f&&f.enter(),e=a(r),f&&(f.exit(),u=!0)),e===n.promise?s(E(\"Promise-chain cycle\")):(o=j(e))?o.call(e,c,s):c(e)):s(r)}catch(t){f&&!u&&f.exit(),s(t)}};e.length>o;)u(e[o++]);t._c=[],t._n=!1,n&&!t._h&&T(t)})}},T=function(t){g.call(c,function(){var n,e,r,i=t._v,o=N(t);if(o&&(n=x(function(){P?_.emit(\"unhandledRejection\",i,t):(e=c.onunhandledrejection)?e({promise:t,reason:i}):(r=c.console)&&r.error&&r.error(\"Unhandled promise rejection\",i)}),t._h=P||N(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){g.call(c,function(){var n;P?_.emit(\"rejectionHandled\",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},z=function t(n){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===n)throw E(\"Promise can't be resolved itself\");(e=j(n))?m(function(){var i={_w:r,_d:!1};try{e.call(n,s(t,i,1),s(C,i,1))}catch(t){C.call(i,t)}}):(r._v=n,r._s=1,k(r,!1))}catch(t){C.call({_w:r,_d:!1},t)}}};A||(I=function(t){v(this,I,\"Promise\",\"_h\"),p(t),r.call(this);try{t(s(z,this,1),s(C,this,1))}catch(t){C.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(43)(I.prototype,{then:function(t,n){var e=V(d(this,I));return e.ok=\"function\"!=typeof t||t,e.fail=\"function\"==typeof n&&n,e.domain=P?_.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&k(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=s(z,t,1),this.reject=s(C,t,1)},b.f=V=function(t){return t===I||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!A,{Promise:I}),e(38)(I,\"Promise\"),e(41)(\"Promise\"),u=e(7).Promise,l(l.S+l.F*!A,\"Promise\",{reject:function(t){var n=V(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!A),\"Promise\",{resolve:function(t){return w(a&&this===u?I:this,t)}}),l(l.S+l.F*!(A&&e(52)(function(t){I.all(t).catch(F)})),\"Promise\",{all:function(t){var n=this,e=V(n),r=e.resolve,i=e.reject,o=x(function(){var e=[],o=0,u=1;y(t,!1,function(t){var a=o++,c=!1;e.push(void 0),u++,n.resolve(t).then(function(t){c||(c=!0,e[a]=t,--u||r(e))},i)}),--u||r(e)});return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=V(n),r=e.reject,i=x(function(){y(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return i.e&&r(i.v),e.promise}})},function(t,n,e){\"use strict\";var r=e(18);function i(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError(\"Bad Promise constructor\");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new i(t)}},function(t,n,e){var r=e(3),i=e(4),o=e(111);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){\"use strict\";var r=e(9).f,i=e(33),o=e(43),u=e(17),a=e(42),c=e(56),s=e(72),f=e(107),l=e(41),h=e(8),p=e(27).fastKey,v=e(37),y=h?\"_s\":\"size\",d=function(t,n){var e,r=p(n);if(\"F\"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var f=t(function(t,r){a(t,f,n,\"_i\"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[y]=0,null!=r&&c(r,e,t[s],t)});return o(f.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var e=v(this,n),r=d(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[y]--}return!!r},forEach:function(t){v(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!d(v(this,n),t)}}),h&&r(f.prototype,\"size\",{get:function(){return v(this,n)[y]}}),f},def:function(t,n,e){var r,i,o=d(t,n);return o?o.v=e:(t._l=o={i:i=p(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[y]++,\"F\"!==i&&(t._i[i]=o)),t},getEntry:d,setStrong:function(t,n,e){s(t,n,function(t,e){this._t=v(t,n),this._k=e,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,\"keys\"==t?n.k:\"values\"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},e?\"entries\":\"values\",!e,!0),l(n)}}},function(t,n,e){\"use strict\";var r=e(43),i=e(27).getWeak,o=e(3),u=e(4),a=e(42),c=e(56),s=e(22),f=e(13),l=e(37),h=s(5),p=s(6),v=0,y=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},g=function(t,n){return h(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var e=g(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=p(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,o){var s=t(function(t,r){a(t,s,n,\"_i\"),t._t=n,t._i=v++,t._l=void 0,null!=r&&c(r,e,t[o],t)});return r(s.prototype,{delete:function(t){if(!u(t))return!1;var e=i(t);return!0===e?y(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=i(t);return!0===e?y(l(this,n)).has(t):e&&f(e,this._i)}}),s},def:function(t,n,e){var r=i(o(n),!0);return!0===r?y(t).set(n,e):r[t._i]=e,t},ufstore:y}},function(t,n,e){var r=e(19),i=e(6);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError(\"Wrong length!\");return e}},function(t,n,e){var r=e(34),i=e(50),o=e(3),u=e(1).Reflect;t.exports=u&&u.ownKeys||function(t){var n=r.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(6),i=e(68),o=e(24);t.exports=function(t,n,e,u){var a=String(o(t)),c=a.length,s=void 0===e?\" \":String(e),f=r(n);if(f<=c||\"\"==s)return a;var l=f-c,h=i.call(s,Math.ceil(l/s.length));return h.length>l&&(h=h.slice(0,l)),u?h+a:a+h}},function(t,n,e){var r=e(8),i=e(31),o=e(15),u=e(45).f;t.exports=function(t){return function(n){for(var e,a=o(n),c=i(a),s=c.length,f=0,l=[];s>f;)e=c[f++],r&&!u.call(a,e)||l.push(t?[e,a[e]]:a[e]);return l}}},function(t,n){var e=t.exports={version:\"2.6.9\"};\"number\"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){e(122),t.exports=e(309)},function(t,n,e){\"use strict\";e(123);var r,i=(r=e(296))&&r.__esModule?r:{default:r};i.default._babelPolyfill&&\"undefined\"!=typeof console&&console.warn&&console.warn(\"@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.\"),i.default._babelPolyfill=!0},function(t,n,e){\"use strict\";e(124),e(267),e(269),e(272),e(274),e(276),e(278),e(280),e(282),e(284),e(286),e(288),e(290),e(294)},function(t,n,e){e(125),e(128),e(129),e(130),e(131),e(132),e(133),e(134),e(135),e(136),e(137),e(138),e(139),e(140),e(141),e(142),e(143),e(144),e(145),e(146),e(147),e(148),e(149),e(150),e(151),e(152),e(153),e(154),e(155),e(156),e(157),e(158),e(159),e(160),e(161),e(162),e(163),e(164),e(165),e(166),e(167),e(168),e(169),e(171),e(172),e(173),e(174),e(175),e(176),e(177),e(178),e(179),e(180),e(181),e(182),e(183),e(184),e(185),e(186),e(187),e(188),e(189),e(190),e(191),e(192),e(193),e(194),e(195),e(196),e(197),e(198),e(199),e(200),e(201),e(202),e(203),e(204),e(206),e(207),e(209),e(210),e(211),e(212),e(213),e(214),e(215),e(217),e(218),e(219),e(220),e(221),e(222),e(223),e(224),e(225),e(226),e(227),e(228),e(229),e(80),e(230),e(108),e(231),e(109),e(232),e(233),e(234),e(235),e(110),e(238),e(239),e(240),e(241),e(242),e(243),e(244),e(245),e(246),e(247),e(248),e(249),e(250),e(251),e(252),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(266),t.exports=e(7)},function(t,n,e){\"use strict\";function r(t){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var i=e(1),o=e(13),u=e(8),a=e(0),c=e(11),s=e(27).KEY,f=e(2),l=e(48),h=e(38),p=e(29),v=e(5),y=e(61),d=e(89),g=e(127),m=e(51),b=e(3),x=e(4),S=e(10),w=e(15),E=e(26),_=e(28),O=e(33),M=e(92),I=e(20),P=e(50),F=e(9),V=e(31),A=I.f,j=F.f,k=M.f,T=i.Symbol,N=i.JSON,L=N&&N.stringify,C=v(\"_hidden\"),z=v(\"toPrimitive\"),q={}.propertyIsEnumerable,R=l(\"symbol-registry\"),D=l(\"symbols\"),H=l(\"op-symbols\"),B=Object.prototype,W=\"function\"==typeof T&&!!P.f,G=i.QObject,Q=!G||!G.prototype||!G.prototype.findChild,U=u&&f(function(){return 7!=O(j({},\"a\",{get:function(){return j(this,\"a\",{value:7}).a}})).a})?function(t,n,e){var r=A(B,n);r&&delete B[n],j(t,n,e),r&&t!==B&&j(B,n,r)}:j,$=function(t){var n=D[t]=O(T.prototype);return n._k=t,n},Y=W&&\"symbol\"==r(T.iterator)?function(t){return\"symbol\"==r(t)}:function(t){return t instanceof T},X=function(t,n,e){return t===B&&X(H,n,e),b(t),n=E(n,!0),b(e),o(D,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=O(e,{enumerable:_(0,!1)})):(o(t,C)||j(t,C,_(1,{})),t[C][n]=!0),U(t,n,e)):j(t,n,e)},K=function(t,n){b(t);for(var e,r=g(n=w(n)),i=0,o=r.length;o>i;)X(t,e=r[i++],n[e]);return t},J=function(t){var n=q.call(this,t=E(t,!0));return!(this===B&&o(D,t)&&!o(H,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,C)&&this[C][t])||n)},Z=function(t,n){if(t=w(t),n=E(n,!0),t!==B||!o(D,n)||o(H,n)){var e=A(t,n);return!e||!o(D,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},tt=function(t){for(var n,e=k(w(t)),r=[],i=0;e.length>i;)o(D,n=e[i++])||n==C||n==s||r.push(n);return r},nt=function(t){for(var n,e=t===B,r=k(e?H:w(t)),i=[],u=0;r.length>u;)!o(D,n=r[u++])||e&&!o(B,n)||i.push(D[n]);return i};W||(c((T=function(){if(this instanceof T)throw TypeError(\"Symbol is not a constructor!\");var t=p(arguments.length>0?arguments[0]:void 0),n=function n(e){this===B&&n.call(H,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),U(this,t,_(1,e))};return u&&Q&&U(B,t,{configurable:!0,set:n}),$(t)}).prototype,\"toString\",function(){return this._k}),I.f=Z,F.f=X,e(34).f=M.f=tt,e(45).f=J,P.f=nt,u&&!e(30)&&c(B,\"propertyIsEnumerable\",J,!0),y.f=function(t){return $(v(t))}),a(a.G+a.W+a.F*!W,{Symbol:T});for(var et=\"hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\".split(\",\"),rt=0;et.length>rt;)v(et[rt++]);for(var it=V(v.store),ot=0;it.length>ot;)d(it[ot++]);a(a.S+a.F*!W,\"Symbol\",{for:function(t){return o(R,t+=\"\")?R[t]:R[t]=T(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+\" is not a symbol!\");for(var n in R)if(R[n]===t)return n},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),a(a.S+a.F*!W,\"Object\",{create:function(t,n){return void 0===n?O(t):K(O(t),n)},defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:Z,getOwnPropertyNames:tt,getOwnPropertySymbols:nt});var ut=f(function(){P.f(1)});a(a.S+a.F*ut,\"Object\",{getOwnPropertySymbols:function(t){return P.f(S(t))}}),N&&a(a.S+a.F*(!W||f(function(){var t=T();return\"[null]\"!=L([t])||\"{}\"!=L({a:t})||\"{}\"!=L(Object(t))})),\"JSON\",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(x(n)||void 0!==t)&&!Y(t))return m(n)||(n=function(t,n){if(\"function\"==typeof e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,L.apply(N,r)}}),T.prototype[z]||e(14)(T.prototype,z,T.prototype.valueOf),h(T,\"Symbol\"),h(Math,\"Math\",!0),h(i.JSON,\"JSON\",!0)},function(t,n,e){t.exports=e(48)(\"native-function-to-string\",Function.toString)},function(t,n,e){var r=e(31),i=e(50),o=e(45);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var u,a=e(t),c=o.f,s=0;a.length>s;)c.call(t,u=a[s++])&&n.push(u);return n}},function(t,n,e){var r=e(0);r(r.S,\"Object\",{create:e(33)})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),\"Object\",{defineProperty:e(9).f})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),\"Object\",{defineProperties:e(91)})},function(t,n,e){var r=e(15),i=e(20).f;e(21)(\"getOwnPropertyDescriptor\",function(){return function(t,n){return i(r(t),n)}})},function(t,n,e){var r=e(10),i=e(35);e(21)(\"getPrototypeOf\",function(){return function(t){return i(r(t))}})},function(t,n,e){var r=e(10),i=e(31);e(21)(\"keys\",function(){return function(t){return i(r(t))}})},function(t,n,e){e(21)(\"getOwnPropertyNames\",function(){return e(92).f})},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)(\"freeze\",function(t){return function(n){return t&&r(n)?t(i(n)):n}})},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)(\"seal\",function(t){return function(n){return t&&r(n)?t(i(n)):n}})},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)(\"preventExtensions\",function(t){return function(n){return t&&r(n)?t(i(n)):n}})},function(t,n,e){var r=e(4);e(21)(\"isFrozen\",function(t){return function(n){return!r(n)||!!t&&t(n)}})},function(t,n,e){var r=e(4);e(21)(\"isSealed\",function(t){return function(n){return!r(n)||!!t&&t(n)}})},function(t,n,e){var r=e(4);e(21)(\"isExtensible\",function(t){return function(n){return!!r(n)&&(!t||t(n))}})},function(t,n,e){var r=e(0);r(r.S+r.F,\"Object\",{assign:e(93)})},function(t,n,e){var r=e(0);r(r.S,\"Object\",{is:e(94)})},function(t,n,e){var r=e(0);r(r.S,\"Object\",{setPrototypeOf:e(65).set})},function(t,n,e){\"use strict\";var r=e(46),i={};i[e(5)(\"toStringTag\")]=\"z\",i+\"\"!=\"[object z]\"&&e(11)(Object.prototype,\"toString\",function(){return\"[object \"+r(this)+\"]\"},!0)},function(t,n,e){var r=e(0);r(r.P,\"Function\",{bind:e(95)})},function(t,n,e){var r=e(9).f,i=Function.prototype,o=/^\\s*function ([^ (]*)/;\"name\"in i||e(8)&&r(i,\"name\",{configurable:!0,get:function(){try{return(\"\"+this).match(o)[1]}catch(t){return\"\"}}})},function(t,n,e){\"use strict\";var r=e(4),i=e(35),o=e(5)(\"hasInstance\"),u=Function.prototype;o in u||e(9).f(u,o,{value:function(t){if(\"function\"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,e){var r=e(0),i=e(97);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,n,e){var r=e(0),i=e(98);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,n,e){\"use strict\";var r=e(1),i=e(13),o=e(23),u=e(67),a=e(26),c=e(2),s=e(34).f,f=e(20).f,l=e(9).f,h=e(39).trim,p=r.Number,v=p,y=p.prototype,d=\"Number\"==o(e(33)(y)),g=\"trim\"in String.prototype,m=function(t){var n=a(t,!1);if(\"string\"==typeof n&&n.length>2){var e,r,i,o=(n=g?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var u,c=n.slice(2),s=0,f=c.length;s<f;s++)if((u=c.charCodeAt(s))<48||u>i)return NaN;return parseInt(c,r)}}return+n};if(!p(\" 0o1\")||!p(\"0b1\")||p(\"+0x1\")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(d?c(function(){y.valueOf.call(e)}):\"Number\"!=o(e))?u(new v(m(n)),e,p):m(n)};for(var b,x=e(8)?s(v):\"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger\".split(\",\"),S=0;x.length>S;S++)i(v,b=x[S])&&!i(p,b)&&l(p,b,f(v,b));p.prototype=y,y.constructor=p,e(11)(r,\"Number\",p)}},function(t,n,e){\"use strict\";var r=e(0),i=e(19),o=e(99),u=e(68),a=1..toFixed,c=Math.floor,s=[0,0,0,0,0,0],f=\"Number.toFixed: incorrect invocation!\",l=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*s[e],s[e]=r%1e7,r=c(r/1e7)},h=function(t){for(var n=6,e=0;--n>=0;)e+=s[n],s[n]=c(e/t),e=e%t*1e7},p=function(){for(var t=6,n=\"\";--t>=0;)if(\"\"!==n||0===t||0!==s[t]){var e=String(s[t]);n=\"\"===n?e:n+u.call(\"0\",7-e.length)+e}return n},v=function t(n,e,r){return 0===e?r:e%2==1?t(n,e-1,r*n):t(n*n,e/2,r)};r(r.P+r.F*(!!a&&(\"0.000\"!==8e-5.toFixed(3)||\"1\"!==.9.toFixed(0)||\"1.25\"!==1.255.toFixed(2)||\"1000000000000000128\"!==(0xde0b6b3a7640080).toFixed(0))||!e(2)(function(){a.call({})})),\"Number\",{toFixed:function(t){var n,e,r,a,c=o(this,f),s=i(t),y=\"\",d=\"0\";if(s<0||s>20)throw RangeError(f);if(c!=c)return\"NaN\";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(y=\"-\",c=-c),c>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(c*v(2,69,1))-69)<0?c*v(2,-n,1):c/v(2,n,1),e*=4503599627370496,(n=52-n)>0){for(l(0,e),r=s;r>=7;)l(1e7,0),r-=7;for(l(v(10,r,1),0),r=n-1;r>=23;)h(1<<23),r-=23;h(1<<r),l(1,1),h(2),d=p()}else l(0,e),l(1<<-n,0),d=p()+u.call(\"0\",s);return d=s>0?y+((a=d.length)<=s?\"0.\"+u.call(\"0\",s-a)+d:d.slice(0,a-s)+\".\"+d.slice(a-s)):y+d}})},function(t,n,e){\"use strict\";var r=e(0),i=e(2),o=e(99),u=1..toPrecision;r(r.P+r.F*(i(function(){return\"1\"!==u.call(1,void 0)})||!i(function(){u.call({})})),\"Number\",{toPrecision:function(t){var n=o(this,\"Number#toPrecision: incorrect invocation!\");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,e){var r=e(0);r(r.S,\"Number\",{EPSILON:Math.pow(2,-52)})},function(t,n,e){var r=e(0),i=e(1).isFinite;r(r.S,\"Number\",{isFinite:function(t){return\"number\"==typeof t&&i(t)}})},function(t,n,e){var r=e(0);r(r.S,\"Number\",{isInteger:e(100)})},function(t,n,e){var r=e(0);r(r.S,\"Number\",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(0),i=e(100),o=Math.abs;r(r.S,\"Number\",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,e){var r=e(0);r(r.S,\"Number\",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){var r=e(0);r(r.S,\"Number\",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(0),i=e(98);r(r.S+r.F*(Number.parseFloat!=i),\"Number\",{parseFloat:i})},function(t,n,e){var r=e(0),i=e(97);r(r.S+r.F*(Number.parseInt!=i),\"Number\",{parseInt:i})},function(t,n,e){var r=e(0),i=e(101),o=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),\"Math\",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,e){var r=e(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),\"Math\",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,e){var r=e(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),\"Math\",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,e){var r=e(0),i=e(69);r(r.S,\"Math\",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,e){var r=e(0),i=Math.exp;r(r.S,\"Math\",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,e){var r=e(0),i=e(70);r(r.S+r.F*(i!=Math.expm1),\"Math\",{expm1:i})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{fround:e(170)})},function(t,n,e){var r=e(69),i=Math.pow,o=i(2,-52),u=i(2,-23),a=i(2,127)*(2-u),c=i(2,-126);t.exports=Math.fround||function(t){var n,e,i=Math.abs(t),s=r(t);return i<c?s*(i/c/u+1/o-1/o)*c*u:(e=(n=(1+u/o)*i)-(n-i))>a||e!=e?s*(1/0):s*e}},function(t,n,e){var r=e(0),i=Math.abs;r(r.S,\"Math\",{hypot:function(t,n){for(var e,r,o=0,u=0,a=arguments.length,c=0;u<a;)c<(e=i(arguments[u++]))?(o=o*(r=c/e)*r+1,c=e):o+=e>0?(r=e/c)*r:e;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,n,e){var r=e(0),i=Math.imul;r(r.S+r.F*e(2)(function(){return-5!=i(4294967295,5)||2!=i.length}),\"Math\",{imul:function(t,n){var e=+t,r=+n,i=65535&e,o=65535&r;return 0|i*o+((65535&e>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{log1p:e(101)})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{sign:e(69)})},function(t,n,e){var r=e(0),i=e(70),o=Math.exp;r(r.S+r.F*e(2)(function(){return-2e-17!=!Math.sinh(-2e-17)}),\"Math\",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,e){var r=e(0),i=e(70),o=Math.exp;r(r.S,\"Math\",{tanh:function(t){var n=i(t=+t),e=i(-t);return n==1/0?1:e==1/0?-1:(n-e)/(o(t)+o(-t))}})},function(t,n,e){var r=e(0);r(r.S,\"Math\",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,e){var r=e(0),i=e(32),o=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),\"String\",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,u=0;r>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+\" is not a valid code point\");e.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return e.join(\"\")}})},function(t,n,e){var r=e(0),i=e(15),o=e(6);r(r.S,\"String\",{raw:function(t){for(var n=i(t.raw),e=o(n.length),r=arguments.length,u=[],a=0;e>a;)u.push(String(n[a++])),a<r&&u.push(String(arguments[a]));return u.join(\"\")}})},function(t,n,e){\"use strict\";e(39)(\"trim\",function(t){return function(){return t(this,3)}})},function(t,n,e){\"use strict\";var r=e(71)(!0);e(72)(String,\"String\",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){\"use strict\";var r=e(0),i=e(71)(!1);r(r.P,\"String\",{codePointAt:function(t){return i(this,t)}})},function(t,n,e){\"use strict\";var r=e(0),i=e(6),o=e(73),u=\"\".endsWith;r(r.P+r.F*e(75)(\"endsWith\"),\"String\",{endsWith:function(t){var n=o(this,t,\"endsWith\"),e=arguments.length>1?arguments[1]:void 0,r=i(n.length),a=void 0===e?r:Math.min(i(e),r),c=String(t);return u?u.call(n,c,a):n.slice(a-c.length,a)===c}})},function(t,n,e){\"use strict\";var r=e(0),i=e(73);r(r.P+r.F*e(75)(\"includes\"),\"String\",{includes:function(t){return!!~i(this,t,\"includes\").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0);r(r.P,\"String\",{repeat:e(68)})},function(t,n,e){\"use strict\";var r=e(0),i=e(6),o=e(73),u=\"\".startsWith;r(r.P+r.F*e(75)(\"startsWith\"),\"String\",{startsWith:function(t){var n=o(this,t,\"startsWith\"),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return u?u.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){\"use strict\";e(12)(\"anchor\",function(t){return function(n){return t(this,\"a\",\"name\",n)}})},function(t,n,e){\"use strict\";e(12)(\"big\",function(t){return function(){return t(this,\"big\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"blink\",function(t){return function(){return t(this,\"blink\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"bold\",function(t){return function(){return t(this,\"b\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"fixed\",function(t){return function(){return t(this,\"tt\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"fontcolor\",function(t){return function(n){return t(this,\"font\",\"color\",n)}})},function(t,n,e){\"use strict\";e(12)(\"fontsize\",function(t){return function(n){return t(this,\"font\",\"size\",n)}})},function(t,n,e){\"use strict\";e(12)(\"italics\",function(t){return function(){return t(this,\"i\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"link\",function(t){return function(n){return t(this,\"a\",\"href\",n)}})},function(t,n,e){\"use strict\";e(12)(\"small\",function(t){return function(){return t(this,\"small\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"strike\",function(t){return function(){return t(this,\"strike\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"sub\",function(t){return function(){return t(this,\"sub\",\"\",\"\")}})},function(t,n,e){\"use strict\";e(12)(\"sup\",function(t){return function(){return t(this,\"sup\",\"\",\"\")}})},function(t,n,e){var r=e(0);r(r.S,\"Date\",{now:function(){return(new Date).getTime()}})},function(t,n,e){\"use strict\";var r=e(0),i=e(10),o=e(26);r(r.P+r.F*e(2)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),\"Date\",{toJSON:function(t){var n=i(this),e=o(n);return\"number\"!=typeof e||isFinite(e)?n.toISOString():null}})},function(t,n,e){var r=e(0),i=e(205);r(r.P+r.F*(Date.prototype.toISOString!==i),\"Date\",{toISOString:i})},function(t,n,e){\"use strict\";var r=e(2),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:\"0\"+t};t.exports=r(function(){return\"0385-07-25T07:06:39.999Z\"!=o.call(new Date(-5e13-1))})||!r(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError(\"Invalid time value\");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?\"-\":n>9999?\"+\":\"\";return r+(\"00000\"+Math.abs(n)).slice(r?-6:-4)+\"-\"+u(t.getUTCMonth()+1)+\"-\"+u(t.getUTCDate())+\"T\"+u(t.getUTCHours())+\":\"+u(t.getUTCMinutes())+\":\"+u(t.getUTCSeconds())+\".\"+(e>99?e:\"0\"+u(e))+\"Z\"}:o},function(t,n,e){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+\"\"!=\"Invalid Date\"&&e(11)(r,\"toString\",function(){var t=o.call(this);return t==t?i.call(this):\"Invalid Date\"})},function(t,n,e){var r=e(5)(\"toPrimitive\"),i=Date.prototype;r in i||e(14)(i,r,e(208))},function(t,n,e){\"use strict\";var r=e(3),i=e(26);t.exports=function(t){if(\"string\"!==t&&\"number\"!==t&&\"default\"!==t)throw TypeError(\"Incorrect hint\");return i(r(this),\"number\"!=t)}},function(t,n,e){var r=e(0);r(r.S,\"Array\",{isArray:e(51)})},function(t,n,e){\"use strict\";var r=e(17),i=e(0),o=e(10),u=e(103),a=e(76),c=e(6),s=e(77),f=e(78);i(i.S+i.F*!e(52)(function(t){Array.from(t)}),\"Array\",{from:function(t){var n,e,i,l,h=o(t),p=\"function\"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,g=0,m=f(h);if(d&&(y=r(y,v>2?arguments[2]:void 0,2)),null==m||p==Array&&a(m))for(e=new p(n=c(h.length));n>g;g++)s(e,g,d?y(h[g],g):h[g]);else for(l=m.call(h),e=new p;!(i=l.next()).done;g++)s(e,g,d?u(l,y,[i.value,g],!0):i.value);return e.length=g,e}})},function(t,n,e){\"use strict\";var r=e(0),i=e(77);r(r.S+r.F*e(2)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),\"Array\",{of:function(){for(var t=0,n=arguments.length,e=new(\"function\"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){\"use strict\";var r=e(0),i=e(15),o=[].join;r(r.P+r.F*(e(44)!=Object||!e(16)(o)),\"Array\",{join:function(t){return o.call(i(this),void 0===t?\",\":t)}})},function(t,n,e){\"use strict\";var r=e(0),i=e(64),o=e(23),u=e(32),a=e(6),c=[].slice;r(r.P+r.F*e(2)(function(){i&&c.call(i)}),\"Array\",{slice:function(t,n){var e=a(this.length),r=o(this);if(n=void 0===n?e:n,\"Array\"==r)return c.call(this,t,n);for(var i=u(t,e),s=u(n,e),f=a(s-i),l=new Array(f),h=0;h<f;h++)l[h]=\"String\"==r?this.charAt(i+h):this[i+h];return l}})},function(t,n,e){\"use strict\";var r=e(0),i=e(18),o=e(10),u=e(2),a=[].sort,c=[1,2,3];r(r.P+r.F*(u(function(){c.sort(void 0)})||!u(function(){c.sort(null)})||!e(16)(a)),\"Array\",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(0),o=e(16)([].forEach,!0);r(r.P+r.F*!o,\"Array\",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,e){var r=e(4),i=e(51),o=e(5)(\"species\");t.exports=function(t){var n;return i(t)&&(\"function\"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(1);r(r.P+r.F*!e(16)([].map,!0),\"Array\",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(2);r(r.P+r.F*!e(16)([].filter,!0),\"Array\",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(3);r(r.P+r.F*!e(16)([].some,!0),\"Array\",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(4);r(r.P+r.F*!e(16)([].every,!0),\"Array\",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,e){\"use strict\";var r=e(0),i=e(105);r(r.P+r.F*!e(16)([].reduce,!0),\"Array\",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){\"use strict\";var r=e(0),i=e(105);r(r.P+r.F*!e(16)([].reduceRight,!0),\"Array\",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,e){\"use strict\";var r=e(0),i=e(49)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!e(16)(o)),\"Array\",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,e){\"use strict\";var r=e(0),i=e(15),o=e(19),u=e(6),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!e(16)(a)),\"Array\",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var n=i(this),e=u(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},function(t,n,e){var r=e(0);r(r.P,\"Array\",{copyWithin:e(106)}),e(36)(\"copyWithin\")},function(t,n,e){var r=e(0);r(r.P,\"Array\",{fill:e(79)}),e(36)(\"fill\")},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(5),o=!0;\"find\"in[]&&Array(1).find(function(){o=!1}),r(r.P+r.F*o,\"Array\",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)(\"find\")},function(t,n,e){\"use strict\";var r=e(0),i=e(22)(6),o=\"findIndex\",u=!0;o in[]&&Array(1)[o](function(){u=!1}),r(r.P+r.F*u,\"Array\",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)(o)},function(t,n,e){e(41)(\"Array\")},function(t,n,e){var r=e(1),i=e(67),o=e(9).f,u=e(34).f,a=e(74),c=e(53),s=r.RegExp,f=s,l=s.prototype,h=/a/g,p=/a/g,v=new s(h)!==h;if(e(8)&&(!v||e(2)(function(){return p[e(5)(\"match\")]=!1,s(h)!=h||s(p)==p||\"/a/i\"!=s(h,\"i\")}))){s=function(t,n){var e=this instanceof s,r=a(t),o=void 0===n;return!e&&r&&t.constructor===s&&o?t:i(v?new f(r&&!o?t.source:t,n):f((r=t instanceof s)?t.source:t,r&&o?c.call(t):n),e?this:l,s)};for(var y=function(t){t in s||o(s,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},d=u(f),g=0;d.length>g;)y(d[g++]);l.constructor=s,s.prototype=l,e(11)(r,\"RegExp\",s)}e(41)(\"RegExp\")},function(t,n,e){\"use strict\";e(109);var r=e(3),i=e(53),o=e(8),u=/./.toString,a=function(t){e(11)(RegExp.prototype,\"toString\",t,!0)};e(2)(function(){return\"/a/b\"!=u.call({source:\"a\",flags:\"b\"})})?a(function(){var t=r(this);return\"/\".concat(t.source,\"/\",\"flags\"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):\"toString\"!=u.name&&a(function(){return u.call(this)})},function(t,n,e){\"use strict\";var r=e(3),i=e(6),o=e(82),u=e(54);e(55)(\"match\",1,function(t,n,e,a){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=a(e,t,this);if(n.done)return n.value;var c=r(t),s=String(this);if(!c.global)return u(c,s);var f=c.unicode;c.lastIndex=0;for(var l,h=[],p=0;null!==(l=u(c,s));){var v=String(l[0]);h[p]=v,\"\"===v&&(c.lastIndex=o(s,i(c.lastIndex),f)),p++}return 0===p?null:h}]})},function(t,n,e){\"use strict\";var r=e(3),i=e(10),o=e(6),u=e(19),a=e(82),c=e(54),s=Math.max,f=Math.min,l=Math.floor,h=/\\$([$&`']|\\d\\d?|<[^>]*>)/g,p=/\\$([$&`']|\\d\\d?)/g;e(55)(\"replace\",2,function(t,n,e,v){return[function(r,i){var o=t(this),u=null==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=v(e,t,this,n);if(i.done)return i.value;var l=r(t),h=String(this),p=\"function\"==typeof n;p||(n=String(n));var d=l.global;if(d){var g=l.unicode;l.lastIndex=0}for(var m=[];;){var b=c(l,h);if(null===b)break;if(m.push(b),!d)break;\"\"===String(b[0])&&(l.lastIndex=a(h,o(l.lastIndex),g))}for(var x,S=\"\",w=0,E=0;E<m.length;E++){b=m[E];for(var _=String(b[0]),O=s(f(u(b.index),h.length),0),M=[],I=1;I<b.length;I++)M.push(void 0===(x=b[I])?x:String(x));var P=b.groups;if(p){var F=[_].concat(M,O,h);void 0!==P&&F.push(P);var V=String(n.apply(void 0,F))}else V=y(_,h,O,M,P,n);O>=w&&(S+=h.slice(w,O)+V,w=O+_.length)}return S+h.slice(w)}];function y(t,n,r,o,u,a){var c=r+t.length,s=o.length,f=p;return void 0!==u&&(u=i(u),f=h),e.call(a,f,function(e,i){var a;switch(i.charAt(0)){case\"$\":return\"$\";case\"&\":return t;case\"`\":return n.slice(0,r);case\"'\":return n.slice(c);case\"<\":a=u[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var h=l(f/10);return 0===h?e:h<=s?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):e}a=o[f-1]}return void 0===a?\"\":a})}})},function(t,n,e){\"use strict\";var r=e(3),i=e(94),o=e(54);e(55)(\"search\",1,function(t,n,e,u){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=u(e,t,this);if(n.done)return n.value;var a=r(t),c=String(this),s=a.lastIndex;i(s,0)||(a.lastIndex=0);var f=o(a,c);return i(a.lastIndex,s)||(a.lastIndex=s),null===f?-1:f.index}]})},function(t,n,e){\"use strict\";var r=e(74),i=e(3),o=e(47),u=e(82),a=e(6),c=e(54),s=e(81),f=e(2),l=Math.min,h=[].push,p=!f(function(){RegExp(4294967295,\"y\")});e(55)(\"split\",2,function(t,n,e,f){var v;return v=\"c\"==\"abbc\".split(/(b)*/)[1]||4!=\"test\".split(/(?:)/,-1).length||2!=\"ab\".split(/(?:ab)*/).length||4!=\".\".split(/(.?)(.?)/).length||\".\".split(/()()/).length>1||\"\".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,u,a,c=[],f=(t.ignoreCase?\"i\":\"\")+(t.multiline?\"m\":\"\")+(t.unicode?\"u\":\"\")+(t.sticky?\"y\":\"\"),l=0,p=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,f+\"g\");(o=s.call(v,i))&&!((u=v.lastIndex)>l&&(c.push(i.slice(l,o.index)),o.length>1&&o.index<i.length&&h.apply(c,o.slice(1)),a=o[0].length,l=u,c.length>=p));)v.lastIndex===o.index&&v.lastIndex++;return l===i.length?!a&&v.test(\"\")||c.push(\"\"):c.push(i.slice(l)),c.length>p?c.slice(0,p):c}:\"0\".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):v.call(String(i),e,r)},function(t,n){var r=f(v,t,this,n,v!==e);if(r.done)return r.value;var s=i(t),h=String(this),y=o(s,RegExp),d=s.unicode,g=(s.ignoreCase?\"i\":\"\")+(s.multiline?\"m\":\"\")+(s.unicode?\"u\":\"\")+(p?\"y\":\"g\"),m=new y(p?s:\"^(?:\"+s.source+\")\",g),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===h.length)return null===c(m,h)?[h]:[];for(var x=0,S=0,w=[];S<h.length;){m.lastIndex=p?S:0;var E,_=c(m,p?h:h.slice(S));if(null===_||(E=l(a(m.lastIndex+(p?0:S)),h.length))===x)S=u(h,S,d);else{if(w.push(h.slice(x,S)),w.length===b)return w;for(var O=1;O<=_.length-1;O++)if(w.push(_[O]),w.length===b)return w;S=x=E}}return w.push(h.slice(x)),w}]})},function(t,n,e){var r=e(1),i=e(83).set,o=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,c=\"process\"==e(23)(u);t.exports=function(){var t,n,e,s=function(){var r,i;for(c&&(r=u.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){u.nextTick(s)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);e=function(){f.then(s)}}else e=function(){i.call(r,s)};else{var l=!0,h=document.createTextNode(\"\");new o(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){\"use strict\";var r=e(113),i=e(37);t.exports=e(58)(\"Map\",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=r.getEntry(i(this,\"Map\"),t);return n&&n.v},set:function(t,n){return r.def(i(this,\"Map\"),0===t?0:t,n)}},r,!0)},function(t,n,e){\"use strict\";var r=e(113),i=e(37);t.exports=e(58)(\"Set\",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,\"Set\"),t=0===t?0:t,t)}},r)},function(t,n,e){\"use strict\";var r,i=e(1),o=e(22)(0),u=e(11),a=e(27),c=e(93),s=e(114),f=e(4),l=e(37),h=e(37),p=!i.ActiveXObject&&\"ActiveXObject\"in i,v=a.getWeak,y=Object.isExtensible,d=s.ufstore,g=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(t){if(f(t)){var n=v(t);return!0===n?d(l(this,\"WeakMap\")).get(t):n?n[this._i]:void 0}},set:function(t,n){return s.def(l(this,\"WeakMap\"),t,n)}},b=t.exports=e(58)(\"WeakMap\",g,m,s,!0,!0);h&&p&&(c((r=s.getConstructor(g,\"WeakMap\")).prototype,m),a.NEED=!0,o([\"delete\",\"has\",\"get\",\"set\"],function(t){var n=b.prototype,e=n[t];u(n,t,function(n,i){if(f(n)&&!y(n)){this._f||(this._f=new r);var o=this._f[t](n,i);return\"set\"==t?this:o}return e.call(this,n,i)})}))},function(t,n,e){\"use strict\";var r=e(114),i=e(37);e(58)(\"WeakSet\",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,\"WeakSet\"),t,!0)}},r,!1,!0)},function(t,n,e){\"use strict\";var r=e(0),i=e(59),o=e(84),u=e(3),a=e(32),c=e(6),s=e(4),f=e(1).ArrayBuffer,l=e(47),h=o.ArrayBuffer,p=o.DataView,v=i.ABV&&f.isView,y=h.prototype.slice,d=i.VIEW;r(r.G+r.W+r.F*(f!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,\"ArrayBuffer\",{isView:function(t){return v&&v(t)||s(t)&&d in t}}),r(r.P+r.U+r.F*e(2)(function(){return!new h(2).slice(1,void 0).byteLength}),\"ArrayBuffer\",{slice:function(t,n){if(void 0!==y&&void 0===n)return y.call(u(this),t);for(var e=u(this).byteLength,r=a(t,e),i=a(void 0===n?e:n,e),o=new(l(this,h))(c(i-r)),s=new p(this),f=new p(o),v=0;r<i;)f.setUint8(v++,s.getUint8(r++));return o}}),e(41)(\"ArrayBuffer\")},function(t,n,e){var r=e(0);r(r.G+r.W+r.F*!e(59).ABV,{DataView:e(84).DataView})},function(t,n,e){e(25)(\"Int8\",1,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Uint8\",1,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Uint8\",1,function(t){return function(n,e,r){return t(this,n,e,r)}},!0)},function(t,n,e){e(25)(\"Int16\",2,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Uint16\",2,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Int32\",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Uint32\",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Float32\",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){e(25)(\"Float64\",8,function(t){return function(n,e,r){return t(this,n,e,r)}})},function(t,n,e){var r=e(0),i=e(18),o=e(3),u=(e(1).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!e(2)(function(){u(function(){})}),\"Reflect\",{apply:function(t,n,e){var r=i(t),c=o(e);return u?u(r,n,c):a.call(r,n,c)}})},function(t,n,e){var r=e(0),i=e(33),o=e(18),u=e(3),a=e(4),c=e(2),s=e(95),f=(e(1).Reflect||{}).construct,l=c(function(){function t(){}return!(f(function(){},[],t)instanceof t)}),h=!c(function(){f(function(){})});r(r.S+r.F*(l||h),\"Reflect\",{construct:function(t,n){o(t),u(n);var e=arguments.length<3?t:o(arguments[2]);if(h&&!l)return f(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(s.apply(t,r))}var c=e.prototype,p=i(a(c)?c:Object.prototype),v=Function.apply.call(t,p,n);return a(v)?v:p}})},function(t,n,e){var r=e(9),i=e(0),o=e(3),u=e(26);i(i.S+i.F*e(2)(function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})}),\"Reflect\",{defineProperty:function(t,n,e){o(t),n=u(n,!0),o(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(0),i=e(20).f,o=e(3);r(r.S,\"Reflect\",{deleteProperty:function(t,n){var e=i(o(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){\"use strict\";var r=e(0),i=e(3),o=function(t){this._t=i(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(102)(o,\"Object\",function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}}),r(r.S,\"Reflect\",{enumerate:function(t){return new o(t)}})},function(t,n,e){var r=e(20),i=e(35),o=e(13),u=e(0),a=e(4),c=e(3);u(u.S,\"Reflect\",{get:function t(n,e){var u,s,f=arguments.length<3?n:arguments[2];return c(n)===f?n[e]:(u=r.f(n,e))?o(u,\"value\")?u.value:void 0!==u.get?u.get.call(f):void 0:a(s=i(n))?t(s,e,f):void 0}})},function(t,n,e){var r=e(20),i=e(0),o=e(3);i(i.S,\"Reflect\",{getOwnPropertyDescriptor:function(t,n){return r.f(o(t),n)}})},function(t,n,e){var r=e(0),i=e(35),o=e(3);r(r.S,\"Reflect\",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,e){var r=e(0);r(r.S,\"Reflect\",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(0),i=e(3),o=Object.isExtensible;r(r.S,\"Reflect\",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,e){var r=e(0);r(r.S,\"Reflect\",{ownKeys:e(116)})},function(t,n,e){var r=e(0),i=e(3),o=Object.preventExtensions;r(r.S,\"Reflect\",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,e){var r=e(9),i=e(20),o=e(35),u=e(13),a=e(0),c=e(28),s=e(3),f=e(4);a(a.S,\"Reflect\",{set:function t(n,e,a){var l,h,p=arguments.length<4?n:arguments[3],v=i.f(s(n),e);if(!v){if(f(h=o(n)))return t(h,e,a,p);v=c(0)}if(u(v,\"value\")){if(!1===v.writable||!f(p))return!1;if(l=i.f(p,e)){if(l.get||l.set||!1===l.writable)return!1;l.value=a,r.f(p,e,l)}else r.f(p,e,c(0,a));return!0}return void 0!==v.set&&(v.set.call(p,a),!0)}})},function(t,n,e){var r=e(0),i=e(65);i&&r(r.S,\"Reflect\",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,e){e(268),t.exports=e(7).Array.includes},function(t,n,e){\"use strict\";var r=e(0),i=e(49)(!0);r(r.P,\"Array\",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)(\"includes\")},function(t,n,e){e(270),t.exports=e(7).Array.flatMap},function(t,n,e){\"use strict\";var r=e(0),i=e(271),o=e(10),u=e(6),a=e(18),c=e(104);r(r.P,\"Array\",{flatMap:function(t){var n,e,r=o(this);return a(t),n=u(r.length),e=c(r,0),i(e,r,r,n,0,1,t,arguments[1]),e}}),e(36)(\"flatMap\")},function(t,n,e){\"use strict\";var r=e(51),i=e(4),o=e(6),u=e(17),a=e(5)(\"isConcatSpreadable\");t.exports=function t(n,e,c,s,f,l,h,p){for(var v,y,d=f,g=0,m=!!h&&u(h,p,3);g<s;){if(g in c){if(v=m?m(c[g],g,e):c[g],y=!1,i(v)&&(y=void 0!==(y=v[a])?!!y:r(v)),y&&l>0)d=t(n,e,v,o(v.length),d,l-1)-1;else{if(d>=9007199254740991)throw TypeError();n[d]=v}d++}g++}return d}},function(t,n,e){e(273),t.exports=e(7).String.padStart},function(t,n,e){\"use strict\";var r=e(0),i=e(117),o=e(57),u=/Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(o);r(r.P+r.F*u,\"String\",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,e){e(275),t.exports=e(7).String.padEnd},function(t,n,e){\"use strict\";var r=e(0),i=e(117),o=e(57),u=/Version\\/10\\.\\d+(\\.\\d+)?( Mobile\\/\\w+)? Safari\\//.test(o);r(r.P+r.F*u,\"String\",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,e){e(277),t.exports=e(7).String.trimLeft},function(t,n,e){\"use strict\";e(39)(\"trimLeft\",function(t){return function(){return t(this,1)}},\"trimStart\")},function(t,n,e){e(279),t.exports=e(7).String.trimRight},function(t,n,e){\"use strict\";e(39)(\"trimRight\",function(t){return function(){return t(this,2)}},\"trimEnd\")},function(t,n,e){e(281),t.exports=e(61).f(\"asyncIterator\")},function(t,n,e){e(89)(\"asyncIterator\")},function(t,n,e){e(283),t.exports=e(7).Object.getOwnPropertyDescriptors},function(t,n,e){var r=e(0),i=e(116),o=e(15),u=e(20),a=e(77);r(r.S,\"Object\",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),c=u.f,s=i(r),f={},l=0;s.length>l;)void 0!==(e=c(r,n=s[l++]))&&a(f,n,e);return f}})},function(t,n,e){e(285),t.exports=e(7).Object.values},function(t,n,e){var r=e(0),i=e(118)(!1);r(r.S,\"Object\",{values:function(t){return i(t)}})},function(t,n,e){e(287),t.exports=e(7).Object.entries},function(t,n,e){var r=e(0),i=e(118)(!0);r(r.S,\"Object\",{entries:function(t){return i(t)}})},function(t,n,e){\"use strict\";e(110),e(289),t.exports=e(7).Promise.finally},function(t,n,e){\"use strict\";var r=e(0),i=e(7),o=e(1),u=e(47),a=e(112);r(r.P+r.R,\"Promise\",{finally:function(t){var n=u(this,i.Promise||o.Promise),e=\"function\"==typeof t;return this.then(e?function(e){return a(n,t()).then(function(){return e})}:t,e?function(e){return a(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){e(291),e(292),e(293),t.exports=e(7)},function(t,n,e){var r=e(1),i=e(0),o=e(57),u=[].slice,a=/MSIE .\\./.test(o),c=function(t){return function(n,e){var r=arguments.length>2,i=!!r&&u.call(arguments,2);return t(r?function(){(\"function\"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};i(i.G+i.B+i.F*a,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,n,e){var r=e(0),i=e(83);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,e){for(var r=e(80),i=e(31),o=e(11),u=e(1),a=e(14),c=e(40),s=e(5),f=s(\"iterator\"),l=s(\"toStringTag\"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),y=0;y<v.length;y++){var d,g=v[y],m=p[g],b=u[g],x=b&&b.prototype;if(x&&(x[f]||a(x,f,h),x[l]||a(x,l,g),c[g]=h,m))for(d in r)x[d]||o(x,d,r[d],!0)}},function(t,n,e){(function(t){function n(t){return(n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}var e=function(t){\"use strict\";var e,r=Object.prototype,i=r.hasOwnProperty,o=\"function\"==typeof Symbol?Symbol:{},u=o.iterator||\"@@iterator\",a=o.asyncIterator||\"@@asyncIterator\",c=o.toStringTag||\"@@toStringTag\";function s(t,n,e,r){var i=n&&n.prototype instanceof d?n:d,o=Object.create(i.prototype),u=new P(r||[]);return o._invoke=function(t,n,e){var r=l;return function(i,o){if(r===p)throw new Error(\"Generator is already running\");if(r===v){if(\"throw\"===i)throw o;return V()}for(e.method=i,e.arg=o;;){var u=e.delegate;if(u){var a=O(u,e);if(a){if(a===y)continue;return a}}if(\"next\"===e.method)e.sent=e._sent=e.arg;else if(\"throw\"===e.method){if(r===l)throw r=v,e.arg;e.dispatchException(e.arg)}else\"return\"===e.method&&e.abrupt(\"return\",e.arg);r=p;var c=f(t,n,e);if(\"normal\"===c.type){if(r=e.done?v:h,c.arg===y)continue;return{value:c.arg,done:e.done}}\"throw\"===c.type&&(r=v,e.method=\"throw\",e.arg=c.arg)}}}(t,e,u),o}function f(t,n,e){try{return{type:\"normal\",arg:t.call(n,e)}}catch(t){return{type:\"throw\",arg:t}}}t.wrap=s;var l=\"suspendedStart\",h=\"suspendedYield\",p=\"executing\",v=\"completed\",y={};function d(){}function g(){}function m(){}var b={};b[u]=function(){return this};var x=Object.getPrototypeOf,S=x&&x(x(F([])));S&&S!==r&&i.call(S,u)&&(b=S);var w=m.prototype=d.prototype=Object.create(b);function E(t){[\"next\",\"throw\",\"return\"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function _(t){var e;this._invoke=function(r,o){function u(){return new Promise(function(e,u){!function e(r,o,u,a){var c=f(t[r],t,o);if(\"throw\"!==c.type){var s=c.arg,l=s.value;return l&&\"object\"===n(l)&&i.call(l,\"__await\")?Promise.resolve(l.__await).then(function(t){e(\"next\",t,u,a)},function(t){e(\"throw\",t,u,a)}):Promise.resolve(l).then(function(t){s.value=t,u(s)},function(t){return e(\"throw\",t,u,a)})}a(c.arg)}(r,o,e,u)})}return e=e?e.then(u,u):u()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,\"throw\"===n.method){if(t.iterator.return&&(n.method=\"return\",n.arg=e,O(t,n),\"throw\"===n.method))return y;n.method=\"throw\",n.arg=new TypeError(\"The iterator does not provide a 'throw' method\")}return y}var i=f(r,t.iterator,n.arg);if(\"throw\"===i.type)return n.method=\"throw\",n.arg=i.arg,n.delegate=null,y;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,\"return\"!==n.method&&(n.method=\"next\",n.arg=e),n.delegate=null,y):o:(n.method=\"throw\",n.arg=new TypeError(\"iterator result is not an object\"),n.delegate=null,y)}function M(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type=\"normal\",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:\"root\"}],t.forEach(M,this),this.reset(!0)}function F(t){if(t){var n=t[u];if(n)return n.call(t);if(\"function\"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:V}}function V(){return{value:e,done:!0}}return g.prototype=w.constructor=m,m.constructor=g,m[c]=g.displayName=\"GeneratorFunction\",t.isGeneratorFunction=function(t){var n=\"function\"==typeof t&&t.constructor;return!!n&&(n===g||\"GeneratorFunction\"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]=\"GeneratorFunction\")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(n,e,r,i){var o=new _(s(n,e,r,i));return t.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[c]=\"Generator\",w[u]=function(){return this},w.toString=function(){return\"[object Generator]\"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method=\"next\",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)\"t\"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(\"throw\"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return a.type=\"throw\",a.arg=t,n.next=r,i&&(n.method=\"next\",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if(\"root\"===u.tryLoc)return r(\"end\");if(u.tryLoc<=this.prev){var c=i.call(u,\"catchLoc\"),s=i.call(u,\"finallyLoc\");if(c&&s){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!s)throw new Error(\"try statement without catch or finally\");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,\"finallyLoc\")&&this.prev<r.finallyLoc){var o=r;break}}o&&(\"break\"===t||\"continue\"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method=\"next\",this.next=o.finallyLoc,y):this.complete(u)},complete:function(t,n){if(\"throw\"===t.type)throw t.arg;return\"break\"===t.type||\"continue\"===t.type?this.next=t.arg:\"return\"===t.type?(this.rval=this.arg=t.arg,this.method=\"return\",this.next=\"end\"):\"normal\"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if(\"throw\"===r.type){var i=r.arg;I(e)}return i}}throw new Error(\"illegal catch attempt\")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},\"next\"===this.method&&(this.arg=e),y}},t}(\"object\"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function(\"r\",\"regeneratorRuntime = r\")(e)}}).call(this,e(295)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,\"loaded\",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,\"id\",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){e(297),t.exports=e(119).global},function(t,n,e){var r=e(298);r(r.G,{global:e(85)})},function(t,n,e){var r=e(85),i=e(119),o=e(299),u=e(301),a=e(308),c=function t(n,e,c){var s,f,l,h=n&t.F,p=n&t.G,v=n&t.S,y=n&t.P,d=n&t.B,g=n&t.W,m=p?i:i[e]||(i[e]={}),b=m.prototype,x=p?r:v?r[e]:(r[e]||{}).prototype;for(s in p&&(c=e),c)(f=!h&&x&&void 0!==x[s])&&a(m,s)||(l=f?x[s]:c[s],m[s]=p&&\"function\"!=typeof x[s]?c[s]:d&&f?o(l,r):g&&x[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&\"function\"==typeof l?o(Function.call,l):l,y&&((m.virtual||(m.virtual={}))[s]=l,n&t.R&&b&&!b[s]&&u(b,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(300);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(\"function\"!=typeof t)throw TypeError(t+\" is not a function!\");return t}},function(t,n,e){var r=e(302),i=e(307);t.exports=e(87)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(303),i=e(304),o=e(306),u=Object.defineProperty;n.f=e(87)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if(\"get\"in e||\"set\"in e)throw TypeError(\"Accessors not supported!\");return\"value\"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(86);t.exports=function(t){if(!r(t))throw TypeError(t+\" is not an object!\");return t}},function(t,n,e){t.exports=!e(87)&&!e(120)(function(){return 7!=Object.defineProperty(e(305)(\"div\"),\"a\",{get:function(){return 7}}).a})},function(t,n,e){var r=e(86),i=e(85).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(86);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&\"function\"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if(\"function\"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&\"function\"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError(\"Can't convert object to primitive value\")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){\"use strict\";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.r(n);var i=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.eventEmitter=n,this.quantityVertical=3,this.quantityHorizontal=3,this.distanceVertical=1.58,this.distanceHorizontal=1.58,this.regQuantity=/^[\\d]+$/,this.countImage=1}\nvar n,e,i;\nreturn n=t,(e=[\n    {key:\"init\",value:function(){this.eventEmitter.emit(\"changeQuantityHorizontal\",this.quantityHorizontal),this.eventEmitter.emit(\"changeValueDistanceHorizontal\",this.distanceHorizontal.toFixed(2)),this.eventEmitter.emit(\"changeValueDistanceVertical\",this.distanceVertical.toFixed(2)),this.eventEmitter.emit(\"changeQuantityVertical\",this.quantityVertical)}},\n{key:\"changeDistanceHorizontal\",value:function(t){this.regQuantity.test(t[0].value)&&(this.quantityHorizontal=parseInt(t[0].value)),this.distanceHorizontal=1e3*(.465*(this.quantityHorizontal-1)+.65)/1e3,this.eventEmitter.emit(\"changeQuantityHorizontal\",this.quantityHorizontal),this.eventEmitter.emit(\"changeValueDistanceHorizontal\",this.distanceHorizontal.toFixed(2))}},\n{key:\"changeDistanceVertical\",value:function(t){this.regQuantity.test(t[1].value)&&(this.quantityVertical=parseInt(t[1].value)),this.distanceVertical=1e3*(.465*(this.quantityVertical-1)+.65)/1e3,this.eventEmitter.emit(\"changeValueDistanceVertical\",this.distanceVertical.toFixed(2)),this.eventEmitter.emit(\"changeQuantityVertical\",this.quantityVertical)}},\n{key:\"changeQuantityHorizontal\",value:function(t){this.quantityHorizontal===parseInt(t[0].value)&&t[2].value>=.65?this.quantityHorizontal=Math.round((t[2].value-.65)/.465+1):this.quantityHorizontal=parseInt(t[0].value),this.distanceHorizontal=1e3*(.465*(this.quantityHorizontal-1)+.65)/1e3,this.eventEmitter.emit(\"changeQuantityHorizontal\",this.quantityHorizontal),this.eventEmitter.emit(\"changeValueDistanceHorizontal\",this.distanceHorizontal.toFixed(2))}},\n{key:\"changeQuantityVertical\",value:function(t){this.quantityVertical===parseInt(t[1].value)&&t[3].value>=.65?this.quantityVertical=Math.round((t[3].value-.65)/.465+1):this.quantityVertical=parseInt(t[1].value),this.distanceVertical=1e3*(.465*(this.quantityVertical-1)+.65)/1e3,this.eventEmitter.emit(\"changeValueDistanceVertical\",this.distanceVertical.toFixed(2)),this.eventEmitter.emit(\"changeQuantityVertical\",this.quantityVertical)}},\n\n// расчет пикселей для вентелятора\n\n{key:\"outputValue\",value:function(){\n    var select = document.getElementById(\"calc_fan\");\n    var value = select.options[select.selectedIndex].value; \n    if(value == \"h\")\n    {this.sum=this.quantityVertical*this.quantityHorizontal,this.power=48*this.sum,this.weight=.7*this.sum,this.screen=\"\".concat(dsee65h*this.quantityHorizontal-dsee65h_dist*(this.quantityHorizontal-1),\"x\").concat(dsee65h*this.quantityVertical-dsee65h_dist*(this.quantityVertical-1)),this.eventEmitter.emit(\"changeOutputValue\",[this.sum,this.screen,this.power,this.weight.toFixed(2)])\n    }else if(value == \"x\")\n    {this.sum=this.quantityVertical*this.quantityHorizontal,this.power=48*this.sum,this.weight=.7*this.sum,this.screen=\"\".concat(dsee65x*this.quantityHorizontal-dsee65x_dist*(this.quantityHorizontal-1),\"x\").concat(dsee65x*this.quantityVertical-dsee65x_dist*(this.quantityVertical-1)),this.eventEmitter.emit(\"changeOutputValue\",[this.sum,this.screen,this.power,this.weight.toFixed(2)])\n    }\n}},\n\n{key:\"createImage\",value:function(){for(var t=[],n=[],e=100,r=0;r<this.quantityVertical;r++){t[r]=[],n[r]=[];for(var i=0;i<this.quantityHorizontal;i++){this.countImage++;var o=document.createElement(\"div\");e++,o.style.zIndex=e,o.classList.add(\"output-image__image\"),this.countImage%2==0&&(o.style.transform=\"rotate(45deg)\"),this.quantityHorizontal%2==0&&r%2!=0&&i%2==0?o.style.transform=\"rotate(45deg)\":this.quantityHorizontal%2==0&&r%2!=0&&i%2!=0&&(o.style.transform=\"rotate(0deg)\"),t[r][i]=o}}for(var u=0;u<this.quantityVertical;u++)for(var a=0;a<this.quantityHorizontal;a++)a>0&&(t[u][a].style.left=\"\".concat(-25*a,\"%\")),u>0&&(t[u][a].style.top=\"\".concat(-25*u,\"%\"));for(var c=document.createDocumentFragment(),s=0;s<this.quantityVertical;s++)for(var f=0;f<this.quantityHorizontal;f++)c.append(t[s][f]);this.countImage=0,this.eventEmitter.emit(\"createImage\",{x:c,quantityHorizontal:this.quantityHorizontal,quantityVertical:this.quantityVertical,matrix:t})}}])&&r(n.prototype,e),i&&r(n,i),t}();function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.model=n}var n,e,r;return n=t,(e=[{key:\"init\",value:function(){var t=this;setTimeout(function(){t.model.init()},1e3)}},\n{key:\"changeOutputValue1\",value:function(t){this.model.changeDistanceHorizontal(t),this.model.changeDistanceVertical(t),this.model.createImage(),this.model.outputValue()}},\n{key:\"changeOutputValue2\",value:function(t){this.model.changeQuantityHorizontal(t),this.model.changeQuantityVertical(t),this.model.createImage(),this.model.outputValue()}},\n{key:\"createFieldImage\",value:function(){this.model.createImage(),this.model.outputValue()}}\n])&&o(n.prototype,e),r&&o(n,r),t}(),a={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:\"normal\",autoplay:!0,timelineOffset:0},c={duration:1e3,delay:0,endDelay:0,easing:\"easeOutElastic(1, .5)\",round:0},s=[\"translateX\",\"translateY\",\"translateZ\",\"rotate\",\"rotateX\",\"rotateY\",\"rotateZ\",\"scale\",\"scaleX\",\"scaleY\",\"scaleZ\",\"skew\",\"skewX\",\"skewY\",\"perspective\"],f={CSS:{},springs:{}};function l(t,n,e){return Math.min(Math.max(t,n),e)}function h(t,n){return t.indexOf(n)>-1}function p(t,n){return t.apply(null,n)}var v={arr:function(t){return Array.isArray(t)},obj:function(t){return h(Object.prototype.toString.call(t),\"Object\")},pth:function(t){return v.obj(t)&&t.hasOwnProperty(\"totalLength\")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||v.svg(t)},str:function(t){return\"string\"==typeof t},fnc:function(t){return\"function\"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return v.hex(t)||v.rgb(t)||v.hsl(t)},key:function(t){return!a.hasOwnProperty(t)&&!c.hasOwnProperty(t)&&\"targets\"!==t&&\"keyframes\"!==t}};function y(t){var n=/\\(([^)]+)\\)/.exec(t);return n?n[1].split(\",\").map(function(t){return parseFloat(t)}):[]}function d(t,n){var e=y(t),r=l(v.und(e[0])?1:e[0],.1,100),i=l(v.und(e[1])?100:e[1],.1,100),o=l(v.und(e[2])?10:e[2],.1,100),u=l(v.und(e[3])?0:e[3],.1,100),a=Math.sqrt(i/r),c=o/(2*Math.sqrt(i*r)),s=c<1?a*Math.sqrt(1-c*c):0,h=1,p=c<1?(c*a-u)/s:-u+a;function d(t){var e=n?n*t/1e3:t;return e=c<1?Math.exp(-e*c*a)*(h*Math.cos(s*e)+p*Math.sin(s*e)):(h+p*e)*Math.exp(-e*a),0===t||1===t?t:1-e}return n?d:function(){var n=f.springs[t];if(n)return n;for(var e=0,r=0;;)if(1===d(e+=1/6)){if(++r>=16)break}else r=0;var i=e*(1/6)*1e3;return f.springs[t]=i,i}}function g(t){return void 0===t&&(t=10),function(n){return Math.round(n*t)*(1/t)}}var m,b,x=function(){var t=11,n=1/(t-1);function e(t,n){return 1-3*n+3*t}function r(t,n){return 3*n-6*t}function i(t){return 3*t}function o(t,n,o){return((e(n,o)*t+r(n,o))*t+i(n))*t}function u(t,n,o){return 3*e(n,o)*t*t+2*r(n,o)*t+i(n)}return function(e,r,i,a){if(0<=e&&e<=1&&0<=i&&i<=1){var c=new Float32Array(t);if(e!==r||i!==a)for(var s=0;s<t;++s)c[s]=o(s*n,e,i);return function(t){return e===r&&i===a?t:0===t||1===t?t:o(f(t),r,a)}}function f(r){for(var a=0,s=1,f=t-1;s!==f&&c[s]<=r;++s)a+=n;var l=a+(r-c[--s])/(c[s+1]-c[s])*n,h=u(l,e,i);return h>=.001?function(t,n,e,r){for(var i=0;i<4;++i){var a=u(n,e,r);if(0===a)return n;n-=(o(n,e,r)-t)/a}return n}(r,l,e,i):0===h?l:function(t,n,e,r,i){var u,a,c=0;do{(u=o(a=n+(e-n)/2,r,i)-t)>0?e=a:n=a}while(Math.abs(u)>1e-7&&++c<10);return a}(r,a,a+n,e,i)}}}(),S=(m={linear:function(){return function(t){return t}}},b={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var n,e=4;t<((n=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}},Elastic:function(t,n){void 0===t&&(t=1),void 0===n&&(n=.5);var e=l(t,1,10),r=l(n,.1,2);return function(t){return 0===t||1===t?t:-e*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/e))*(2*Math.PI)/r)}}},[\"Quad\",\"Cubic\",\"Quart\",\"Quint\",\"Expo\"].forEach(function(t,n){b[t]=function(){return function(t){return Math.pow(t,n+2)}}}),Object.keys(b).forEach(function(t){var n=b[t];m[\"easeIn\"+t]=n,m[\"easeOut\"+t]=function(t,e){return function(r){return 1-n(t,e)(1-r)}},m[\"easeInOut\"+t]=function(t,e){return function(r){return r<.5?n(t,e)(2*r)/2:1-n(t,e)(-2*r+2)/2}}}),m);function w(t,n){if(v.fnc(t))return t;var e=t.split(\"(\")[0],r=S[e],i=y(t);switch(e){case\"spring\":return d(t,n);case\"cubicBezier\":return p(x,i);case\"steps\":return p(g,i);default:return p(r,i)}}function E(t){try{return document.querySelectorAll(t)}catch(t){return}}function _(t,n){for(var e=t.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<e;o++)if(o in t){var u=t[o];n.call(r,u,o,t)&&i.push(u)}return i}function O(t){return t.reduce(function(t,n){return t.concat(v.arr(n)?O(n):n)},[])}function M(t){return v.arr(t)?t:(v.str(t)&&(t=E(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function I(t,n){return t.some(function(t){return t===n})}function P(t){var n={};for(var e in t)n[e]=t[e];return n}function F(t,n){var e=P(t);for(var r in t)e[r]=n.hasOwnProperty(r)?n[r]:t[r];return e}function V(t,n){var e=P(t);for(var r in n)e[r]=v.und(t[r])?n[r]:t[r];return e}function A(t){return v.rgb(t)?(e=/rgb\\((\\d+,\\s*[\\d]+,\\s*[\\d]+)\\)/g.exec(n=t))?\"rgba(\"+e[1]+\",1)\":n:v.hex(t)?function(t){var n=t.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,function(t,n,e,r){return n+n+e+e+r+r}),e=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(n);return\"rgba(\"+parseInt(e[1],16)+\",\"+parseInt(e[2],16)+\",\"+parseInt(e[3],16)+\",1)\"}(t):v.hsl(t)?function(t){var n,e,r,i=/hsl\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%\\)/g.exec(t)||/hsla\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%,\\s*([\\d.]+)\\)/g.exec(t),o=parseInt(i[1],10)/360,u=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100,c=i[4]||1;function s(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t}if(0==u)n=e=r=a;else{var f=a<.5?a*(1+u):a+u-a*u,l=2*a-f;n=s(l,f,o+1/3),e=s(l,f,o),r=s(l,f,o-1/3)}return\"rgba(\"+255*n+\",\"+255*e+\",\"+255*r+\",\"+c+\")\"}(t):void 0;var n,e}function j(t){var n=/[+-]?\\d*\\.?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(n)return n[1]}function k(t,n){return v.fnc(t)?t(n.target,n.id,n.total):t}function T(t,n){return t.getAttribute(n)}function N(t,n,e){if(I([e,\"deg\",\"rad\",\"turn\"],j(n)))return n;var r=f.CSS[n+e];if(!v.und(r))return r;var i=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(i),i.style.position=\"absolute\",i.style.width=100+e;var u=100/i.offsetWidth;o.removeChild(i);var a=u*parseFloat(n);return f.CSS[n+e]=a,a}function L(t,n,e){if(n in t.style){var r=n.replace(/([a-z])([A-Z])/g,\"$1-$2\").toLowerCase(),i=t.style[n]||getComputedStyle(t).getPropertyValue(r)||\"0\";return e?N(t,i,e):i}}function C(t,n){return v.dom(t)&&!v.inp(t)&&(T(t,n)||v.svg(t)&&t[n])?\"attribute\":v.dom(t)&&I(s,n)?\"transform\":v.dom(t)&&\"transform\"!==n&&L(t,n)?\"css\":null!=t[n]?\"object\":void 0}function z(t){if(v.dom(t)){for(var n,e=t.style.transform||\"\",r=/(\\w+)\\(([^)]*)\\)/g,i=new Map;n=r.exec(e);)i.set(n[1],n[2]);return i}}function q(t,n,e,r){var i=h(n,\"scale\")?1:0+function(t){return h(t,\"translate\")||\"perspective\"===t?\"px\":h(t,\"rotate\")||h(t,\"skew\")?\"deg\":void 0}(n),o=z(t).get(n)||i;return e&&(e.transforms.list.set(n,o),e.transforms.last=n),r?N(t,o,r):o}function R(t,n,e,r){switch(C(t,n)){case\"transform\":return q(t,n,r,e);case\"css\":return L(t,n,e);case\"attribute\":return T(t,n);default:return t[n]||0}}function D(t,n){var e=/^(\\*=|\\+=|-=)/.exec(t);if(!e)return t;var r=j(t)||0,i=parseFloat(n),o=parseFloat(t.replace(e[0],\"\"));switch(e[0][0]){case\"+\":return i+o+r;case\"-\":return i-o+r;case\"*\":return i*o+r}}function H(t,n){if(v.col(t))return A(t);if(/\\s/g.test(t))return t;var e=j(t),r=e?t.substr(0,t.length-e.length):t;return n?r+n:r}function B(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function W(t){for(var n,e=t.points,r=0,i=0;i<e.numberOfItems;i++){var o=e.getItem(i);i>0&&(r+=B(n,o)),n=o}return r}function G(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case\"circle\":return function(t){return 2*Math.PI*T(t,\"r\")}(t);case\"rect\":return function(t){return 2*T(t,\"width\")+2*T(t,\"height\")}(t);case\"line\":return function(t){return B({x:T(t,\"x1\"),y:T(t,\"y1\")},{x:T(t,\"x2\"),y:T(t,\"y2\")})}(t);case\"polyline\":return W(t);case\"polygon\":return function(t){var n=t.points;return W(t)+B(n.getItem(n.numberOfItems-1),n.getItem(0))}(t)}}function Q(t,n){var e=n||{},r=e.el||function(t){for(var n=t.parentNode;v.svg(n)&&v.svg(n.parentNode);)n=n.parentNode;return n}(t),i=r.getBoundingClientRect(),o=T(r,\"viewBox\"),u=i.width,a=i.height,c=e.viewBox||(o?o.split(\" \"):[0,0,u,a]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:u/c[2],h:a/c[3]}}function U(t,n){function e(e){void 0===e&&(e=0);var r=n+e>=1?n+e:0;return t.el.getPointAtLength(r)}var r=Q(t.el,t.svg),i=e(),o=e(-1),u=e(1);switch(t.property){case\"x\":return(i.x-r.x)*r.w;case\"y\":return(i.y-r.y)*r.h;case\"angle\":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function $(t,n){var e=/[+-]?\\d*\\.?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?/g,r=H(v.pth(t)?t.totalLength:t,n)+\"\";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:v.str(t)||n?r.split(e):[]}}function Y(t){return _(t?O(v.arr(t)?t.map(M):M(t)):[],function(t,n,e){return e.indexOf(t)===n})}function X(t){var n=Y(t);return n.map(function(t,e){return{target:t,id:e,total:n.length,transforms:{list:z(t)}}})}function K(t,n){var e=P(n);if(/^spring/.test(e.easing)&&(e.duration=d(e.easing)),v.arr(t)){var r=t.length;2===r&&!v.obj(t[0])?t={value:t}:v.fnc(n.duration)||(e.duration=n.duration/r)}var i=v.arr(t)?t:[t];return i.map(function(t,e){var r=v.obj(t)&&!v.pth(t)?t:{value:t};return v.und(r.delay)&&(r.delay=e?0:n.delay),v.und(r.endDelay)&&(r.endDelay=e===i.length-1?n.endDelay:0),r}).map(function(t){return V(t,e)})}function J(t,n){var e=[],r=n.keyframes;for(var i in r&&(n=V(function(t){for(var n=_(O(t.map(function(t){return Object.keys(t)})),function(t){return v.key(t)}).reduce(function(t,n){return t.indexOf(n)<0&&t.push(n),t},[]),e={},r=function(r){var i=n[r];e[i]=t.map(function(t){var n={};for(var e in t)v.key(e)?e==i&&(n.value=t[e]):n[e]=t[e];return n})},i=0;i<n.length;i++)r(i);return e}(r),n)),n)v.key(i)&&e.push({name:i,tweens:K(n[i],t)});return e}function Z(t,n){var e;return t.tweens.map(function(r){var i=function(t,n){var e={};for(var r in t){var i=k(t[r],n);v.arr(i)&&1===(i=i.map(function(t){return k(t,n)})).length&&(i=i[0]),e[r]=i}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}(r,n),o=i.value,u=v.arr(o)?o[1]:o,a=j(u),c=R(n.target,t.name,a,n),s=e?e.to.original:c,f=v.arr(o)?o[0]:s,l=j(f)||j(c),h=a||l;return v.und(u)&&(u=s),i.from=$(f,h),i.to=$(D(u,f),h),i.start=e?e.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=w(i.easing,i.duration),i.isPath=v.pth(o),i.isColor=v.col(i.from.original),i.isColor&&(i.round=1),e=i,i})}var tt={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,i){if(r.list.set(n,e),n===r.last||i){var o=\"\";r.list.forEach(function(t,n){o+=n+\"(\"+t+\") \"}),t.style.transform=o}}};function nt(t,n){X(t).forEach(function(t){for(var e in n){var r=k(n[e],t),i=t.target,o=j(r),u=R(i,e,o,t),a=D(H(r,o||j(u)),u),c=C(i,e);tt[c](i,e,a,t.transforms,!0)}})}function et(t,n){return _(O(t.map(function(t){return n.map(function(n){return function(t,n){var e=C(t.target,n.name);if(e){var r=Z(n,t),i=r[r.length-1];return{type:e,property:n.name,animatable:t,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(t,n)})})),function(t){return!v.und(t)})}function rt(t,n){var e=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},i={};return i.duration=e?Math.max.apply(Math,t.map(function(t){return r(t)+t.duration})):n.duration,i.delay=e?Math.min.apply(Math,t.map(function(t){return r(t)+t.delay})):n.delay,i.endDelay=e?i.duration-Math.max.apply(Math,t.map(function(t){return r(t)+t.duration-t.endDelay})):n.endDelay,i}var it=0;var ot,ut=[],at=[],ct=function(){function t(){ot=requestAnimationFrame(n)}function n(n){var e=ut.length;if(e){for(var r=0;r<e;){var i=ut[r];if(i.paused){var o=ut.indexOf(i);o>-1&&(ut.splice(o,1),e=ut.length)}else i.tick(n);r++}t()}else ot=cancelAnimationFrame(ot)}return t}();function st(t){void 0===t&&(t={});var n,e=0,r=0,i=0,o=0,u=null;function s(t){var n=window.Promise&&new Promise(function(t){return u=t});return t.finished=n,n}var f=function(t){var n=F(a,t),e=F(c,t),r=J(e,t),i=X(t.targets),o=et(i,r),u=rt(o,e),s=it;return it++,V(n,{id:s,children:[],animatables:i,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(t);s(f);function h(){var t=f.direction;\"alternate\"!==t&&(f.direction=\"normal\"!==t?\"normal\":\"reverse\"),f.reversed=!f.reversed,n.forEach(function(t){return t.reversed=f.reversed})}function p(t){return f.reversed?f.duration-t:t}function v(){e=0,r=p(f.currentTime)*(1/st.speed)}function y(t,n){n&&n.seek(t-n.timelineOffset)}function d(t){for(var n=0,e=f.animations,r=e.length;n<r;){var i=e[n],o=i.animatable,u=i.tweens,a=u.length-1,c=u[a];a&&(c=_(u,function(n){return t<n.end})[0]||c);for(var s=l(t-c.start-c.delay,0,c.duration)/c.duration,h=isNaN(s)?1:c.easing(s),p=c.to.strings,v=c.round,y=[],d=c.to.numbers.length,g=void 0,m=0;m<d;m++){var b=void 0,x=c.to.numbers[m],S=c.from.numbers[m]||0;b=c.isPath?U(c.value,h*x):S+h*(x-S),v&&(c.isColor&&m>2||(b=Math.round(b*v)/v)),y.push(b)}var w=p.length;if(w){g=p[0];for(var E=0;E<w;E++){p[E];var O=p[E+1],M=y[E];isNaN(M)||(g+=O?M+O:M+\" \")}}else g=y[0];tt[i.type](o.target,i.property,g,o.transforms),i.currentValue=g,n++}}function g(t){f[t]&&!f.passThrough&&f[t](f)}function m(t){var a=f.duration,c=f.delay,v=a-f.endDelay,m=p(t);f.progress=l(m/a*100,0,100),f.reversePlayback=m<f.currentTime,n&&function(t){if(f.reversePlayback)for(var e=o;e--;)y(t,n[e]);else for(var r=0;r<o;r++)y(t,n[r])}(m),!f.began&&f.currentTime>0&&(f.began=!0,g(\"begin\")),!f.loopBegan&&f.currentTime>0&&(f.loopBegan=!0,g(\"loopBegin\")),m<=c&&0!==f.currentTime&&d(0),(m>=v&&f.currentTime!==a||!a)&&d(a),m>c&&m<v?(f.changeBegan||(f.changeBegan=!0,f.changeCompleted=!1,g(\"changeBegin\")),g(\"change\"),d(m)):f.changeBegan&&(f.changeCompleted=!0,f.changeBegan=!1,g(\"changeComplete\")),f.currentTime=l(m,0,a),f.began&&g(\"update\"),t>=a&&(r=0,f.remaining&&!0!==f.remaining&&f.remaining--,f.remaining?(e=i,g(\"loopComplete\"),f.loopBegan=!1,\"alternate\"===f.direction&&h()):(f.paused=!0,f.completed||(f.completed=!0,g(\"loopComplete\"),g(\"complete\"),!f.passThrough&&\"Promise\"in window&&(u(),s(f)))))}return f.reset=function(){var t=f.direction;f.passThrough=!1,f.currentTime=0,f.progress=0,f.paused=!0,f.began=!1,f.loopBegan=!1,f.changeBegan=!1,f.completed=!1,f.changeCompleted=!1,f.reversePlayback=!1,f.reversed=\"reverse\"===t,f.remaining=f.loop,n=f.children;for(var e=o=n.length;e--;)f.children[e].reset();(f.reversed&&!0!==f.loop||\"alternate\"===t&&1===f.loop)&&f.remaining++,d(f.reversed?f.duration:0)},f.set=function(t,n){return nt(t,n),f},f.tick=function(t){i=t,e||(e=i),m((i+(r-e))*st.speed)},f.seek=function(t){m(p(t))},f.pause=function(){f.paused=!0,v()},f.play=function(){f.paused&&(f.completed&&f.reset(),f.paused=!1,ut.push(f),v(),ot||ct())},f.reverse=function(){h(),v()},f.restart=function(){f.reset(),f.play()},f.reset(),f.autoplay&&f.play(),f}function ft(t,n){for(var e=n.length;e--;)I(t,n[e].animatable.target)&&n.splice(e,1)}\"undefined\"!=typeof document&&document.addEventListener(\"visibilitychange\",function(){document.hidden?(ut.forEach(function(t){return t.pause()}),at=ut.slice(0),st.running=ut=[]):at.forEach(function(t){return t.play()})}),st.version=\"3.1.0\",st.speed=1,st.running=ut,st.remove=function(t){for(var n=Y(t),e=ut.length;e--;){var r=ut[e],i=r.animations,o=r.children;ft(n,i);for(var u=o.length;u--;){var a=o[u],c=a.animations;ft(n,c),c.length||a.children.length||o.splice(u,1)}i.length||o.length||r.pause()}},st.get=R,st.set=nt,st.convertPx=N,st.path=function(t,n){var e=v.str(t)?E(t)[0]:t,r=n||100;return function(t){return{property:t,el:e,svg:Q(e),totalLength:G(e)*(r/100)}}},st.setDashoffset=function(t){var n=G(t);return t.setAttribute(\"stroke-dasharray\",n),n},st.stagger=function(t,n){void 0===n&&(n={});var e=n.direction||\"normal\",r=n.easing?w(n.easing):null,i=n.grid,o=n.axis,u=n.from||0,a=\"first\"===u,c=\"center\"===u,s=\"last\"===u,f=v.arr(t),l=f?parseFloat(t[0]):parseFloat(t),h=f?parseFloat(t[1]):0,p=j(f?t[1]:t)||0,y=n.start||0+(f?l:0),d=[],g=0;return function(t,n,v){if(a&&(u=0),c&&(u=(v-1)/2),s&&(u=v-1),!d.length){for(var m=0;m<v;m++){if(i){var b=c?(i[0]-1)/2:u%i[0],x=c?(i[1]-1)/2:Math.floor(u/i[0]),S=b-m%i[0],w=x-Math.floor(m/i[0]),E=Math.sqrt(S*S+w*w);\"x\"===o&&(E=-S),\"y\"===o&&(E=-w),d.push(E)}else d.push(Math.abs(u-m));g=Math.max.apply(Math,d)}r&&(d=d.map(function(t){return r(t/g)*g})),\"reverse\"===e&&(d=d.map(function(t){return o?t<0?-1*t:-t:Math.abs(g-t)}))}return y+(f?(h-l)/g:l)*(Math.round(100*d[n])/100)+p}},st.timeline=function(t){void 0===t&&(t={});var n=st(t);return n.duration=0,n.add=function(e,r){var i=ut.indexOf(n),o=n.children;function u(t){t.passThrough=!0}i>-1&&ut.splice(i,1);for(var a=0;a<o.length;a++)u(o[a]);var s=V(e,F(c,t));s.targets=s.targets||t.targets;var f=n.duration;s.autoplay=!1,s.direction=n.direction,s.timelineOffset=v.und(r)?f:D(r,f),u(n),n.seek(s.timelineOffset);var l=st(s);u(l),o.push(l);var h=rt(o,t);return n.delay=h.delay,n.endDelay=h.endDelay,n.duration=h.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},st.easing=w,st.penner=S,st.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t};var lt=st;function ht(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var pt=function(){function t(n,e,r){\n    !function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.controller=n,this.eventEmitter=r,this.sizeValueHorizontal=document.getElementById(\"sizeValueHorizontal\"),this.sizeValueVertical=document.getElementById(\"sizeValueVertical\"),this.quantityValueHorizontal=document.getElementById(\"quantityValueHorizontal\"),this.quantityValueVertical=document.getElementById(\"quantityValueVertical\"),this.calculacor=document.querySelector(\".calculator_fan\"),this.value=document.body.querySelectorAll(\".size-value__text\"),\n    this.outputValue=document.body.querySelectorAll(\"[data-outputValue]\"),\n    this.outputImageHeight=document.querySelector(\".output-image__height\"),this.outputImageWidth=document.querySelector(\".output-image__width\"),this.calculacor.addEventListener(\"change\",this),this.calculacor.addEventListener(\"click\",this),this.outputImage=document.querySelector(\".output-image\"),this.outputImage.addEventListener(\"mouseover\",this),this.outputImage.addEventListener(\"mouseout\",this),this.containerLineHeight=document.querySelector(\".container-line-height\"),this.containerLineWidth=document.querySelector(\".container-line-width\"),this.btnMinusSizeValueHorizontal=document.getElementById(\"btnMinusSizeValueHorizontal\"),this.btnPlusSizeValueHorizontal=document.getElementById(\"btnPlusSizeValueHorizontal\"),this.btnMinusSizeValueVertical=document.getElementById(\"btnMinusSizeValueVertical\"),this.btnPlusSizeValueVertical=document.getElementById(\"btnPlusSizeValueVertical\"),\n    this.btnMinusQuantityValueHorizontal=document.getElementById(\"btnMinusQuantityValueHorizontal\"),\n    this.btnPlusQuantityValueHorizontal=document.getElementById(\"btnPlusQuantityValueHorizontal\"),\n    this.btnMinusQuantityValueVertical=document.getElementById(\"btnMinusQuantityValueVertical\"),\n    this.btnPlusQuantityValueVertical=document.getElementById(\"btnPlusQuantityValueVertical\"),\n\n    this.changeDistanceVertical(),\n    this.changeDistanceHorizontal(),\n    this.changeQuantityHorizontal(),\n    this.changeQuantityVertical(),\n    this.changeOutputValue(),\n    this.createFieldImage(),\n    this.controller.init(),\n    this.controller.createFieldImage()  \n}\nvar n,e,r;return n=t,(e=[{key:\"handleEvent\",value:function(){var t=event.target,n=0;t===this.btnMinusSizeValueHorizontal&&this.value[0].value-1>=1&&this.value[0].value>.65?(--this.value[0].value,n++):t===this.btnPlusSizeValueHorizontal?(this.value[0].value++,n++):t===this.btnMinusSizeValueVertical&&this.value[1].value-1>=1&&this.value[3].value>.65?(--this.value[1].value,n++):t===this.btnPlusSizeValueVertical?(this.value[1].value++,n++):t===this.btnMinusQuantityValueHorizontal&&this.value[0].value-1>=1?(--this.value[0].value,n++):t===this.btnPlusQuantityValueHorizontal?(this.value[0].value++,n++):t===this.btnMinusQuantityValueVertical&&this.value[1].value-1>=1?(--this.value[1].value,n++):t===this.btnPlusQuantityValueVertical&&(this.value[1].value++,n++),t.closest(\".size-value\")&&\"change\"===event.type||1===n?this.controller.changeOutputValue2(this.value):(t.closest(\".quantity-value\")&&\"change\"===event.type||1===n)&&this.controller.changeOutputValue1(this.value),\nt.classList.contains(\"output-image__image\")&&\"mouseover\"===event.type&&(t.classList.add(\"start\"),this.animationStart(t)),t.classList.contains(\"output-image__image\")&&\"mouseout\"===event.type&&this.animationEnd(t)}},\n{key:\"animationStart\",value:function(t){this.animationSt=lt({targets:t,rotate:[this.findAngle(t),this.findAngle(t)+360],duration:1200,easing:\"linear\",loop:!0})}},{key:\"animationEnd\",value:function(t){lt.remove(t),this.animationSt=lt({targets:t,rotate:[this.findAngle(t),this.findAngle(t)+720],duration:8e3,easing:\"easeOutQuart\",loop:1})}},{key:\"findAngle\",value:function(t){var n=new RegExp(\"d+\"),e=t.style.transform;return e=+e.slice(7,e.search(n))}},\n{key:\"changeDistanceVertical\",value:function(){var t=this;this.eventEmitter.subscribe(\"changeValueDistanceVertical\",function(n){t.sizeValueVertical.value=+n,t.outputImageHeight.textContent=\"\".concat(n.split(\".\").join(\",\"),\"м\")})}},\n{key:\"changeDistanceHorizontal\",value:function(){var t=this;this.eventEmitter.subscribe(\"changeValueDistanceHorizontal\",function(n){t.sizeValueHorizontal.value=+n,t.outputImageWidth.textContent=\"\".concat(n.split(\".\").join(\",\"),\"м\")})}},\n{key:\"changeQuantityVertical\",value:function(){var t=this;this.eventEmitter.subscribe(\"changeQuantityVertical\",function(n){t.quantityValueVertical.value=n,document.querySelector('[name=\"Кол-во устройств по вертикали Dsee 65H\"]')&&(document.querySelector('[name=\"Кол-во устройств по вертикали Dsee 65H\"]').value=n)})}},{key:\"changeQuantityHorizontal\",value:function(){var t=this;this.eventEmitter.subscribe(\"changeQuantityHorizontal\",function(n){t.quantityValueHorizontal.value=n,document.querySelector('[name=\"Кол-во устройств по горизонтали Dsee 65H\"]')&&(document.querySelector('[name=\"Кол-во устройств по горизонтали Dsee 65H\"]').value=n)})}},\n{key:\"changeOutputValue\",value:function(){var t=this;this.eventEmitter.subscribe(\"changeOutputValue\",function(n){t.outputValue.forEach(function(t,e){t.textContent=n[e],\"quantity\"===t.dataset.outputvalue&&(/^1$/.test(t.textContent)||/^[2,3,4,5,6,7,8,9](?=[1])/.test(t.textContent)?document.querySelector(\"[data-quantityword]\").textContent=\"устройство\":/^[2,3,4]$/.test(t.textContent)||/^[[2,3,4,5,6,7,8,9](?=[2,3,4])/.test(t.textContent)?document.querySelector(\"[data-quantityword]\").textContent=\"устройства\":document.querySelector(\"[data-quantityword]\").textContent=\"устройств\")})})}},\n{key:\"removeAnimationOutputValue\",value:function(){this.outputValue.forEach(function(t){t.classList.remove(\"animationChangeOutputValueText\")})}},\n{key:\"animationOutputValue\",value:function(){this.outputValue.forEach(function(t){t.classList.add(\"animationChangeOutputValueText\")})}},\n{key: \"createFieldImage\",\nvalue: function() {\n    var t = this;\n    this.eventEmitter.subscribe(\"createImage\", function(n) {\n        for (var e = 0, r = t.outputImage.childElementCount; e < r; e++)\n            t.outputImage.children.item(0).remove();\n        if (t.removeAnimationOutputValue(),\n        t.containerLineHeight.style.left = \"0px\",\n        t.containerLineWidth.style.top = \"0px\",\n        t.outputImage.textContent = \"\",\n        n.quantityHorizontal * n.quantityVertical <= 50) {\n            var i = 0\n              , o = parseFloat(getComputedStyle(t.outputImage).width)\n              , u = parseFloat(getComputedStyle(t.outputImage).height)\n              , a = o / n.quantityHorizontal\n              , c = u / n.quantityVertical;\n            i = a > c ? c : a,\n            t.outputImage.style.gridTemplateColumns = \"repeat(\".concat(n.quantityHorizontal, \", \").concat(i, \"px)\"),\n            t.outputImage.style.gridTemplateRows = \"repeat(\".concat(n.quantityVertical, \", \").concat(i, \"px)\"),\n            t.outputImage.append(n.x);\n            var s = -parseFloat(getComputedStyle(t.outputImage.lastChild).left) / 2\n              , f = -parseFloat(getComputedStyle(t.outputImage.lastChild).top) / 2;\n            if (navigator.userAgent.toLowerCase().indexOf(\"firefox\") > -1) {\n                var l = t.outputImage.lastChild\n                  , h = l.style.left\n                  , p = l.style.top\n                  , v = l.getBoundingClientRect().left\n                  , y = l.getBoundingClientRect().top;\n                l.style.left = \"0.0%\",\n                l.style.top = \"0.0%\",\n                s = (l.getBoundingClientRect().left - v) / 2,\n                f = (l.getBoundingClientRect().top - y) / 2,\n                l.style.left = \"\".concat(h),\n                l.style.top = \"\".concat(p)\n            }\n            t.outputImage.style.transform = \"translate(\".concat(s, \"px ,\").concat(f, \"px)\");\n            var d = (i * n.quantityHorizontal - parseFloat(getComputedStyle(t.outputImageWidth).width)) / 2 - 10 - s;\n            document.body.getElementsByClassName(\"output-image__line-width\")[0].style.width = \"\".concat(d, \"px\"),\n            document.body.getElementsByClassName(\"output-image__line-width\")[1].style.width = \"\".concat(d, \"px\");\n            var g = parseFloat(getComputedStyle(t.outputImage.firstElementChild).height) * n.quantityVertical / 2 - 15.6 - f;\n            document.body.getElementsByClassName(\"output-image__line-height\")[0].style.height = \"\".concat(g, \"px\"),\n            document.body.getElementsByClassName(\"output-image__line-height\")[1].style.height = \"\".concat(g, \"px\"),\n            t.animationOutputValue();\n            var m = (o - n.quantityHorizontal * c) / 2;\n            m > 0 && (t.containerLineHeight.style.left = \"\".concat(m, \"px\"));\n            var b = (u - n.quantityVertical * a) / 2;\n            b > 0 && (t.containerLineWidth.style.top = \"\".concat(b, \"px\"))\n        } else\n            t.outputImage.style.transform = \"translate(\".concat(0, \"px ,\", 0, \"px)\"),\n            t.outputImage.style.gridTemplateColumns = \"1fr\",\n            t.outputImage.style.gridTemplateRows = \"0.5fr\",\n            t.outputImage.innerHTML = \"Максимально доступное количество устройств к визуализации 50 шт.<br>\\n                                                Если Вас интересует видеостена больше, чем из 50 устройств,<br>\\n                                                пожалуйста, свяжитесь с менеджером компании\"\n    })\n}\n}]) && ht(n.prototype, e),\nr && ht(n, r),\nt\n}();\n\nfunction vt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var yt=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.events={}}var n,e,r;return n=t,(e=[{key:\"emit\",value:function(t,n){var e=this.events[t];e&&e.forEach(function(t){t.call(null,n)})}},{key:\"subscribe\",value:function(t,n){var e=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(n),function(){e.events[t]=e.events[t].filter(function(t){return n!==t})}}}])&&vt(n.prototype,e),r&&vt(n,r),t}()),dt=new i(yt);new pt(new u(dt),dt,yt)}]);\n"}
			</script>
		</RawHtml>
	</Theme>;
});