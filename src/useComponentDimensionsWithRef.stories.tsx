import type {Meta, StoryObj} from '@storybook/react';
import {LoremIpsum} from './stories/Mocks';
import {Alert, Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow} from './stories/ProxyComponents';
import useComponentDimensionsWithRef from './useComponentDimensionsWithRef';

const HookContainer = () => {
	const {ref, dimensions} = useComponentDimensionsWithRef();
	
	return (
		<Grid container spacing={2} alignItems="stretch">
			<Grid item xs={12}>
				<Alert variant="outlined" severity="info">Resize window to see effect of hook</Alert>
			</Grid>
			<Grid item xs={8}>
				<Card variant="outlined" sx={{height: '100%'}}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell variant="head" component="th" scope="col">Height</TableCell>
								<TableCell variant="head" component="th" scope="col">Width</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell variant="body" component="td">{dimensions.height}</TableCell>
								<TableCell variant="body" component="td">{dimensions.width}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Card>
			</Grid>
			<Grid item xs={4} ref={ref}>
				<Card variant="outlined" sx={{height: '100%'}}>
					<CardContent>
						<LoremIpsum/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

type Story = StoryObj<typeof HookContainer>;

const meta = {
	title:      'MUI/useComponentDimensionsWithRef',
	component:  HookContainer,
	render:     HookContainer,
	tags:       ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: "Monitoring a components rendered dimensions and reacting to them is difficult, but often useful. (i.e. dynamically adjusting height to match width for square elements)\n" +
				           "\n" +
				           "This hook returns a `ref`, `dimensions`, and the referenced `node` to facilitate tracking an element's dimensions\n" +
				           "\n" +
				           "```tsx\n" +
				           "import {useComponentDimensionsWithRef} from '@gtibrett/mui-additions';\n" +
				           "\n" +
				           "export default function SquareContainer() {\n" +
				           "    const {ref, dimensions} = useComponentDimensionsWithRef();\n" +
				           "    \n" +
				           "    return (\n" +
				           "        <div ref={ref} style={{height: dimensions.width}}>\n" +
				           "            I am in a square\n" +
				           "        </div>\n" +
				           "    );\n" +
				           "}\n" +
				           "```"
			}
		}
	}
} satisfies Meta<typeof HookContainer>;

export default meta;

export const DocsOnly: Story = {};