import setPageTitle from './setPageTitle';

const siteTitle = 'site name';

describe('setPageTitle.ts', () => {
	test('set', async () => {
		const title = 'test title';
		setPageTitle(title, siteTitle);
		
		expect(document.title).toBe(`${title} - ${siteTitle}`);
	});
	
	test('env var based site title', async () => {
		const title = 'test title';
		
		setPageTitle(title);
		expect(document.title).toBe(`${title}`);
		
		process.env.REACT_APP_MUI_ADDITIONS_SITE_TITLE = 'site title';
		
		setPageTitle(title);
		expect(document.title).toBe(`${title} - site title`);
	});
	
	test('failed set', async () => {
		const title = <span>test title</span>;
		setPageTitle(String(title), siteTitle);
		
		expect(document.title).toBe(`[object Object] - ${siteTitle}`);
	});
});