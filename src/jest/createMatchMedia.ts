import mediaQuery, {MediaValues} from 'css-mediaquery';

export default function createMatchMedia(mock: Partial<MediaValues>) {
	return (query: string) => {
		return {
			matches:             mediaQuery.match(query, mock),
			media:               '',
			addListener:         () => {
			},
			removeListener:      () => {
			},
			onchange:            () => {
			},
			addEventListener:    () => {
			},
			removeEventListener: () => {
			},
			dispatchEvent:       () => true
		};
	};
}