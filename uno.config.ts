// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography, presetUno, presetWebFonts,
    transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            neutral100: 'hsl(221, 100%, 96%)',
            neutral200: 'hsl(241, 100%, 89%)',
            neutral700: 'hsl(224, 30%, 27%)',

            primary300: 'hsl(252, 100%, 67%)',
            primary400: 'hsl(241, 81%, 54%)',

            circleTop: 'hsla(256, 72%, 46%, 1)',
            circleBottom: 'hsla(241, 72%, 46%, 0)',

            accent1: 'hsl(0, 100%, 67%)',
            accent2: 'hsl(39, 100%, 56%)',
            accent3: 'hsl(166, 100%, 37%)',
            accent4: 'hsl(234, 85%, 45%)',


        }
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'Hanken Grotesk:500,700,800'
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})