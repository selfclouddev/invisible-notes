import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sidebar } from '../sidebar.mjs';

// llms.txt (https://llmstxt.org): what the plugin is, in plain text, and where each page of this site is. For AI
// tools that are asked about the plugin, so they don't have to work it out from the HTML.
//
// The list of pages follows the sidebar by itself. The summary below is written by hand: keep it in line with the
// pages it repeats (the supported IDEs, the first-year prices on the Pricing page).

const SITE = 'https://selfclouddev.github.io/invisible-notes/';
const MARKETPLACE = 'https://plugins.jetbrains.com/plugin/34596-invisible-notes';

const SUMMARY = `# Invisible Notes

> Invisible Notes is a plugin for JetBrains IDEs (PhpStorm, IntelliJ IDEA, WebStorm, PyCharm, GoLand, RubyMine, CLion, Rider, RustRover and others) for private notes on lines of code. A note is shown in the editor, above the line it belongs to, and is never written into the file: there is nothing to commit, and nobody else sees it.

- What it is for: notes for yourself on code. Recording what you worked out while reading unfamiliar or legacy code, reminders and to-dos that shouldn't be committed as TODO comments, preparing a review or a refactoring, questions to ask later, and explanations or reviews written by an AI tool next to the code.
- How it differs from a code comment: no file changes. Notes can't be committed, don't appear in a diff as changes, and don't shift line numbers.
- Notes follow the code: a note isn't tied to a line number. It stays with its code through edits, reformatting, pulls, branch switches, and file renames and moves. A note whose code is gone is kept as "orphaned", not deleted.
- Other features: marks next to the scrollbar and a note count per file, a tool window listing the notes of a file or of the whole project, notes shown in diff views (such as the changes about to be committed), deleting all notes of a file or project at once, undo for deleted notes, and tools for the IDE's MCP server, so that an AI tool can list, add, change and delete notes.
- IDEs: JetBrains IDEs from version 2025.2. It is developed and tested in PhpStorm. It doesn't run in editors that aren't JetBrains IDEs, such as VS Code.
- Languages: any file of the project, whatever its language (PHP, Java, Kotlin, JavaScript, TypeScript, Python, Go, Ruby, C#, C++, Rust and the rest).
- Privacy: notes are stored on the user's computer, outside the project. The plugin makes no network connections. Notes leave the computer only if the user connects an AI tool to the IDE.
- Limits: notes aren't shared with a team and aren't synced between computers. Files outside the project, such as libraries and scratch files, can't have notes.
- Price: a paid plugin, sold through JetBrains Marketplace, with a free 30-day trial of every feature. For individuals $1.90 a month or $19 a year in the first year, for organizations $2.90 a month or $29 a year per user, less in later years. Free for students, teachers and non-commercial open source projects through JetBrains' programs.
- Where to get it: ${MARKETPLACE}, or in the IDE under Settings, Plugins, Marketplace, by searching for "Invisible Notes".
- Made by Selfcloud. Support: florin@selfcloud.ro`;

export const GET: APIRoute = async () => {
	const pages = new Map((await getCollection('docs')).map((page) => [page.id, page.data]));
	const line = ({ slug }: { slug: string }) => {
		const page = pages.get(slug);
		if (!page) throw new Error(`llms.txt: the sidebar lists "${slug}", which is not a page`);
		return `- [${page.title}](${SITE}${slug}/): ${page.description}`;
	};

	const sections: string[] = [];
	const single: string[] = [];
	for (const entry of sidebar) {
		if ('items' in entry) sections.push(`## ${entry.label}\n\n${entry.items.map(line).join('\n')}`);
		else single.push(line(entry));
	}
	if (single.length > 0) sections.push(`## More\n\n${single.join('\n')}`);

	return new Response(`${SUMMARY}\n\n${sections.join('\n\n')}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
