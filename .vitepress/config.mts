import {defineConfig} from 'vitepress'
import {generateSidebar} from 'vitepress-sidebar';

const vitepressSidebarOptions = {
    /* Options... */
    documentRootPath: '/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    hyphenToSpace: false,
    capitalizeFirst: true,
    useFolderLinkFromIndexFile: true,
    useFolderTitleFromIndexFile: true,
    excludeFilesByFrontmatterFieldName: true,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 1,
    manualSortFileNameByPriority: ['introduction.md'],
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
            {text: '首页', link: '/'},
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

        sidebar: generateSidebar([
            {
                ...vitepressSidebarOptions,
                scanStartPath: 'contents',
                resolvePath: '/',
            }
        ]),

        socialLinks: [
            {icon: 'github', link: 'https://github.com/GrassBlock1/42'}
        ],

        footer: {
            message: 'Under CC-BY-NC-SA 4.0',
            copyright: 'Copyright © 2025 GrassBlock'
        }
    }
})