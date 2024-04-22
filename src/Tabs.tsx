import {TabContext, TabList, TabListProps, TabPanel} from '@mui/lab';
import {Grid, Tab as MuiTab} from '@mui/material';
import {ReactNode, SyntheticEvent, useCallback, useState} from 'react';

export type TabContent = {
	id: string;
	label: string;
	content: ReactNode;
	actions?: ReactNode;
}

type TabsProps = {
	tabs: TabContent[];
	active?: TabContent['id'];
	color?: TabListProps['indicatorColor'];
}

export default function Tabs(props: TabsProps) {
	const {tabs, color = 'secondary'} = props;
	const [active, setActive]         = useState<string>(props.active || tabs[0].id);
	
	const handleTabChange = useCallback((event: SyntheticEvent, newValue: string) => {
		setActive(newValue);
	}, [setActive]);
	
	const activeTab = tabs.find(t => t.id === active);
	const panel     = !!activeTab ? <TabPanel value={activeTab.id}>{activeTab.content}</TabPanel> : null;
	
	return (
		<TabContext value={active}>
			<Grid container spacing={1} sx={{borderBottom: 1, borderColor: 'divider'}}>
				<Grid item xs>
					<TabList onChange={handleTabChange} textColor={color} indicatorColor={color}>
						{tabs.map(t => <MuiTab key={t.id} label={t.label} value={t.id}/>)}
					</TabList>
				</Grid>
				{activeTab?.actions && <Grid item>{activeTab.actions}</Grid>}
			</Grid>
			{panel}
		</TabContext>
	);
}