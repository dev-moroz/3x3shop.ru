import React from "react";
import { useOverrides, Override, StackItem, SocialMedia, Stack } from "@quarkly/components";
import { Image, Section } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Footer",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Logo",
			"md-width": "50%",
			"width": "25%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/615abb7e29a0a1001e6c97d6/images/logo-black.svg?v=2021-10-06T14:35:21.222Z"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Side",
			"width": "75%",
			"md-width": "50%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"youtube": "https://www.youtube.com/channel/UCB7ZGrn7IJ4BVxGt51RLulw",
			"instagram": "https://www.instagram.com/promovsn/",
			"vkontakte": "https://vk.com/promovsn"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"background": "none",
			"border-radius": "50%"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "--dark"
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			margin="0px 32px 0px 32px"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Image {...override("image")} />
				{"        "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<SocialMedia {...override("socialMedia")}>
					<Override {...override("socialMediaOverride")} />
					<Override {...override("socialMediaOverride1")} />
				</SocialMedia>
				{"   "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;