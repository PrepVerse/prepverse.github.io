import React from 'react'
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Giscus, { GiscusProps, Theme } from '@giscus/react'

export type GiscusConfig = GiscusProps & { darkTheme: Theme }

const defaultConfig: Partial<GiscusProps> & { darkTheme: string } = {
    id: 'comments',
    repo: "PrepVerse/CodePoint",
    repoId: "R_kgDOItEdJw",
    category: "Q&A",
    categoryId: "DIC_kwDOItEdJ84CZ4tA",
    mapping: 'pathname',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    lang: 'en',
    theme: 'light',
    darkTheme: 'dark_dimmed',
}

export default function Comment(): JSX.Element {
    const themeConfig = useThemeConfig() as ThemeConfig & { giscus: GiscusConfig }
    const giscus = { ...defaultConfig, ...themeConfig.giscus }
    giscus.theme = useColorMode().colorMode === 'dark' ? giscus.darkTheme : giscus.theme
    return (
        <BrowserOnly fallback={<div>Loading Comments...</div>}>
        {() => <Giscus {...giscus} />}
        </BrowserOnly>
    )
}