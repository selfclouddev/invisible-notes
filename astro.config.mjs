// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/sidebar.mjs';

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
				'Invisible Notes is a plugin for PhpStorm, IntelliJ IDEA and other JetBrains IDEs: private notes on lines of code, never written into your files.',
			logo: { src: './src/assets/logo.svg' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/theme.css'],
			social: [{ icon: 'email', label: 'Email support', href: 'mailto:florin@selfcloud.ro' }],
			// A plain-text summary of the plugin and of this site, for AI tools (src/pages/llms.txt.ts).
			head: [
				{
					tag: 'link',
					attrs: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: '/invisible-notes/llms.txt' },
				},
			],
			sidebar,
		}),
	],
});
