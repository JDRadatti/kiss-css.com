import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),

                about: resolve(__dirname, 'docs/getting-started/about.html'),
                setup: resolve(__dirname, 'docs/getting-started/setup.html'),
                template: resolve(__dirname, 'docs/getting-started/template.html'),
                customization: resolve(__dirname, 'docs/getting-started/customization.html'),

                dropdown: resolve(__dirname, 'docs/components/dropdown.html'),
                accordian: resolve(__dirname, 'docs/components/accordian.html'),
                card: resolve(__dirname, 'docs/components/card.html'),
                navigation: resolve(__dirname, 'docs/components/navigation.html'),
                tooltip: resolve(__dirname, 'docs/components/tooltip.html'),

                button: resolve(__dirname, 'docs/base/button.html'),
                icon: resolve(__dirname, 'docs/base/icon.html'),
                color: resolve(__dirname, 'docs/base/color.html'),
                layout: resolve(__dirname, 'docs/base/layout.html'),
                link: resolve(__dirname, 'docs/base/link.html'),
                spacing: resolve(__dirname, 'docs/base/spacing.html'),
                state_layer: resolve(__dirname, 'docs/base/state-layer.html'),
                typography: resolve(__dirname, 'docs/base/typography.html'),

                checkbox: resolve(__dirname, 'docs/forms/checkbox.html'),
                radio: resolve(__dirname, 'docs/forms/radio.html'),
                input: resolve(__dirname, 'docs/forms/input.html'),
                textarea: resolve(__dirname, 'docs/forms/textarea.html'),
                range: resolve(__dirname, 'docs/forms/range.html'),
                select: resolve(__dirname, 'docs/forms/select.html'),
                switch: resolve(__dirname, 'docs/forms/switch.html'),

            },
        },
    },
})
