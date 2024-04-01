import {deepOrange, pink} from '@mui/material/colors';
import type {StorybookConfig} from "@storybook/react-webpack5";

const config: StorybookConfig = {
	stories:     ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons:      [
		'@storybook/addon-essentials',
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-themes'
	],
	framework:   {
		name:    '@storybook/react-webpack5',
		options: {}
	},
	swc:         () => ({
		jsc: {
			transform: {
				react: {
					runtime: 'automatic'
				}
			}
		}
	}),
	docs:        {
		autodocs: 'tag'
	},
	managerHead: (head) => `
        ${head}
        <style>
            div[data-item-id$="--docs-only"] { display: none; }
            .sidebar-item > a svg[type=story] {
                color: ${deepOrange[700]};
            }
            .sidebar-item > a svg[type=document] {
                color: ${pink[700]};
            }
            .sidebar-item[data-selected=true] > a svg {
                color: inherit !important;
            }
            .docblock-argstable button {
                color: #FFF;
            }
            .sb-bar button[title="Theme"] {
                text-transform: capitalize;
            }
        </style>
    `
};
export default config;
