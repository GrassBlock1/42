import {defineConfig} from 'vitepress'
import {generateSidebar} from 'vitepress-sidebar';

const vitepressSidebarOptions = {
    /* Options... */
    documentRootPath: '/',
    scanStartPath: 'contents',
    resolvePath: 'contents',
    useTitleFromFileHeading: true,
    hyphenToSpace: true,
    capitalizeFirst: true,
    excludeFolders: ['vitepress-how-to']
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "[book @ GB ~]",
    description: "All the stuffs here",
    rewrites: {
        'contents/:page*': ':page*'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        search: {
            provider: 'local',
            options: {
                miniSearch: {
                    options: {
                        tokenize: (term) => {
                            if (typeof term === 'string') term = term.toLowerCase();
                            // @ts-ignore
                            const segmenter = Intl.Segmenter && new Intl.Segmenter("zh", { granularity: "word" });
                            if (!segmenter) return [term];
                            const tokens = [];
                            for (const seg of segmenter.segment(term)) {
                                // @ts-ignore
                                tokens.push(seg.segment);
                            }
                            return tokens;
                        },
                    },
                    searchOptions: {
                        combineWith: 'AND', // important for search chinese
                        processTerm: (term) => {
                            if (typeof term === 'string') term = term.toLowerCase();
                            // @ts-ignore
                            const segmenter = Intl.Segmenter && new Intl.Segmenter("zh", { granularity: "word" });
                            if (!segmenter) return term;
                            const tokens = [];
                            for (const seg of segmenter.segment(term)) {
                                // @ts-ignore
                                tokens.push(seg.segment);
                            }
                            return tokens;
                        },
                    },
                },
            }
        },

        sidebar: generateSidebar(vitepressSidebarOptions),

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        footer: {
            message: 'Under CC-BY-NC-SA 4.0',
            copyright: 'Copyright © 2025 GrassBlock'
        }
    }
})
