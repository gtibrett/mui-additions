import {TabContext, TabList, TabListProps, TabPanel} from '@mui/lab';
import {Box, Tab as MuiTab} from '@mui/material';
import {ReactNode, SyntheticEvent, useState} from 'react';

export type TabContent = {
	id: string;
	label: string;
	content: ReactNode;
}

type TabsProps = {
	tabs: TabContent[];
	active?: TabContent['id'];
	color?: TabListProps['indicatorColor'];
}

export default function Tabs({tabs, active = '', color = 'secondary'}: TabsProps) {
	const [activeTab, setActiveTab] = useState<string>(active || tabs[0].id);
	
	const handleTabChange = (event: SyntheticEvent, newValue: string) => {
		setActiveTab(newValue);
	};
	
	return (
		<TabContext value={activeTab}>
			<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
				<TabList onChange={handleTabChange} textColor={color} indicatorColor={color}>
					{tabs.map(t => <MuiTab key={t.id} label={t.label} value={t.id}/>)}
				</TabList>
			</Box>
			{tabs.map(t => <TabPanel key={t.id} value={t.id}>{t.content}</TabPanel>)}
		</TabContext>
	);
}