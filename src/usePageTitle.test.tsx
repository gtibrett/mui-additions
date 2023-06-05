import {renderHook} from '@testing-library/react';
import usePageTitle from './usePageTitle';

const siteTitle = 'site name';

describe('usePageTitle.ts', () => {
	test('set', async () => {
		const title = 'test title';
		renderHook(() => usePageTitle(title, siteTitle));
		
		expect(document.title).toBe(`${title} - ${siteTitle}`);
	});
	
	test('env var based site title', async () => {
		const title                                    = 'test title';
		
		renderHook(() => usePageTitle(title));
		expect(document.title).toBe(`${title}`);
		
		process.env.REACT_APP_MUI_ADDITIONS_SITE_TITLE = 'site title';
		
		renderHook(() => usePageTitle(title));
		expect(document.title).toBe(`${title} - site title`);
	});
	
	test('failed set', async () => {
		const title = <span>test title</span>;
		renderHook(() => usePageTitle(String(title), siteTitle));
		
		expect(document.title).toBe(`[object Object] - ${siteTitle}`);
	});
});