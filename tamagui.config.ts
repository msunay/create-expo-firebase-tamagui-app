import { config as configBase } from '@tamagui/config/v3'
import { createMedia, createTamagui } from 'tamagui'


export const config = createTamagui({
  ...configBase,
  media: createMedia({
    xs: { maxWidth: 660 },
  })
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
