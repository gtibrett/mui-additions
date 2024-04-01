import setPageTitle from './setPageTitle';

export default function usePageTitle(newTitle: string, siteTitle: string = process.env.REACT_APP_MUI_ADDITIONS_SITE_TITLE || '') {
	console.warn('%c [@gtibrett/mui-additions] `usePageTitle` is deprecated. Please use `setPageTitle` instead', 'font-weight: bold');
	setPageTitle(newTitle, siteTitle);
}