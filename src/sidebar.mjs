// The site's pages, in reading order. Used for the sidebar (astro.config.mjs) and for the list of pages in
// llms.txt (src/pages/llms.txt.ts): a page added here appears in both.
export const sidebar = [
	{
		label: 'Start here',
		items: [
			{ label: "What it's for", slug: 'getting-started/what-its-for' },
			{ label: 'Installation', slug: 'getting-started/installation' },
			{ label: 'Your first note', slug: 'getting-started/first-note' },
		],
	},
	{
		label: 'Guides',
		items: [
			{ label: 'Working with notes', slug: 'guides/working-with-notes' },
			{ label: 'Finding your notes', slug: 'guides/finding-notes' },
			{ label: 'How notes follow your code', slug: 'guides/following-code' },
			{ label: 'Notes in diff views', slug: 'guides/diff-views' },
			{ label: 'Where notes are stored', slug: 'guides/storage' },
			{ label: 'Notes for AI tools', slug: 'guides/ai-tools' },
		],
	},
	{
		label: 'Reference',
		items: [
			{ label: 'Keyboard shortcuts', slug: 'reference/shortcuts' },
			{ label: 'FAQ', slug: 'reference/faq' },
			{ label: 'Release notes', slug: 'reference/release-notes' },
		],
	},
	{
		label: 'Licensing',
		items: [
			{ label: 'Pricing and trial', slug: 'licensing/pricing' },
			{ label: 'License agreement (EULA)', slug: 'licensing/eula' },
			{ label: 'Privacy', slug: 'licensing/privacy' },
			{ label: 'Third-party software', slug: 'licensing/third-party' },
		],
	},
	{ label: 'Support', slug: 'support' },
];
