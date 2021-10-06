import React from "react";
import { useOverrides, Override, StackItem, SocialMedia, Stack } from "@quarkly/components";
import { Image, Link, Section } from "@quarkly/widgets";
import BurgerMenu from "./BurgerMenu";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Header",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"order": "0",
			"align-self": "auto",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Logo",
			"md-width": "75%",
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
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"position": "relative",
			"transition": "opacity 200ms ease",
			"quarkly-title": "Link"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/615abb7e29a0a1001e6c97d6/images/logo-black.svg?v=2021-10-06T14:35:21.222Z",
			"width": "150px",
			"z-index": "3",
			"display": "inline-block",
			"alt": "logo promovsn.ru",
			"title": "promovsn.ru"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "block",
			"quarkly-title": "Menu",
			"md-width": "25%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"md-justify-content": "flex-end"
		}
	},
	"burgerMenu": {
		"kind": "BurgerMenu",
		"props": {}
	},
	"burgerMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "menu",
			"lg-transform": "translateY(0px) translateX(0px)",
			"lg-transition": "transform 400ms ease 0s",
			"md-position": "fixed",
			"display": "flex",
			"md-left": 0,
			"md-top": 0,
			"md-width": "100%",
			"md-height": "100%",
			"padding": "0px 0 0px 0"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"text-transform": "uppercase",
			"text-align": "center",
			"padding": "8px 20px 8px 20px",
			"md-padding": "16px 40px 16px 40px",
			"display": "inline-block"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"md-color": "--dark",
			"md-opacity": ".5",
			"md-transition": "opacity .15s ease 0s",
			"md-hover-opacity": "1",
			"md-active-opacity": "1",
			"md-font": "16px/24px sans-serif",
			"font": "--base",
			"text-decoration-line": "initial",
			"color": "--dark",
			"opacity": ".5",
			"transition": "opacity .15s ease 0s",
			"hover-opacity": "1",
			"letter-spacing": "0.5px",
			"text-transform": "initial"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"md-opacity": "1",
			"md-cursor": "default",
			"opacity": "1",
			"color": "--primary",
			"cursor": "default"
		}
	},
	"overrideOverride5": {
		"kind": "Override",
		"props": {
			"slot": "link-about"
		}
	},
	"overrideOverride6": {
		"kind": "Override",
		"props": {
			"slot": "link-team"
		}
	},
	"overrideOverride7": {
		"kind": "Override",
		"props": {
			"slot": "link-work"
		}
	},
	"overrideOverride8": {
		"kind": "Override",
		"props": {
			"slot": "link-contact"
		}
	},
	"burgerMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon,icon-close",
			"category": "md",
			"icon": MdMenu
		}
	},
	"burgerMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "md",
			"icon": MdMenu,
			"size": "36px"
		}
	},
	"burgerMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "menu-open",
			"md-top": 0,
			"md-bottom": 0,
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "center",
			"md-justify-content": "center"
		}
	},
	"burgerMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "icon-open",
			"md-position": "fixed",
			"md-top": "24px",
			"md-right": "calc(4% + 4px)"
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
			"border-radius": "50%",
			"color": "--grey",
			"hover-color": "--light",
			"background": "transparent",
			"hover-background": "transparent",
			"margin": "0 8px"
		}
	}
};

const Header = props => {
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
				{"        "}
				<Link {...override("link")}>
					<Image {...override("image")} />
				</Link>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<BurgerMenu {...override("burgerMenu")}>
					<Override {...override("burgerMenuOverride")}>
						<Override {...override("overrideOverride")} />
						<Override {...override("overrideOverride1")} />
						<Override {...override("overrideOverride2")} />
						<Override {...override("overrideOverride3")} />
						<Override {...override("overrideOverride4")} />
						<Override {...override("overrideOverride5")} />
						<Override {...override("overrideOverride6")} />
						<Override {...override("overrideOverride7")} />
						<Override {...override("overrideOverride8")} />
					</Override>
					<Override {...override("burgerMenuOverride1")} />
					<Override {...override("burgerMenuOverride2")} />
					<Override {...override("burgerMenuOverride3")} />
					<Override {...override("burgerMenuOverride4")} />
				</BurgerMenu>
				{"    "}
			</StackItem>
			<SocialMedia {...override("socialMedia")}>
				<Override {...override("socialMediaOverride")} />
			</SocialMedia>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;