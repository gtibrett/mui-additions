export default function usePageTitle(newTitle: string, siteTitle: string = process.env.REACT_APP_MUI_ADDITIONS_SITE_TITLE || '') {
	document.title = `${newTitle}${siteTitle ? ` - ${siteTitle}` : ''}`;
}