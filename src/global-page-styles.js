import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    },
    "index": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    },
    "about": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    },
    "team": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    },
    "work": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    },
    "contact": {
        "width": "",
        "height": "",
        "overflow-x": "visible",
        "font": "16px "
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
