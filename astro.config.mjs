// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Published with GitHub Pages at https://selfclouddev.github.io/invisible-notes/ (see .github/workflows/deploy.yml).
// Links inside pages include the /invisible-notes base; change them too if the site moves to its own domain.
export default defineConfig({
	site: 'https://selfclouddev.github.io',
	base: '/invisible-notes',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Invisible Notes',
			description:
				'Private notes on lines of code for PhpStorm and other JetBrains IDEs, never written into your files.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/theme.css'],
			social: [{ icon: 'email', label: 'Email support', href: 'mailto:florin@selfcloud.ro' }],
			sidebar: [
				{
					label: 'Start here',
					items: [
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
						{ label: 'Where notes are stored', slug: 'guides/storage' },
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
			],
		}),
	],
});
