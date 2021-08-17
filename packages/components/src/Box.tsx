/** @jsx jsx */
import {
  ArrayInterpolation,
  CSSObject,
  Interpolation,
  jsx,
  useTheme,
} from '@emotion/react'
import { forwardRef } from 'react'
import {
  css,
  get,
  ThemeUICSSObject,
  ThemeUICSSProperties,
  ThemeUIStyleObject,
} from '@theme-ui/css'
import type { Assign } from '..'

const boxSystemProps = [
  // space scale props (inherited from @styled-system/space)
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  // color props (inherited from @styled-system/color)
  'color',
  'backgroundColor',
  'bg',
  'opacity',
] as const

type BoxSystemPropsKeys = typeof boxSystemProps[number]
type BoxSystemProps = Pick<ThemeUICSSProperties, BoxSystemPropsKeys>

export interface BoxOwnProps extends BoxSystemProps {
  as?: React.ElementType
  variant?: string
  css?: Interpolation<any>
  sx?: ThemeUIStyleObject
}

export interface BoxProps
  extends Omit<
    Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps>,
    'ref'
  > {}

/**
 * @internal
 */
export const __isBoxStyledSystemProp = (prop: string) =>
  (boxSystemProps as readonly string[]).includes(prop)

const pickSystemProps = (props: BoxOwnProps) => {
  const res: Pick<BoxOwnProps, typeof boxSystemProps[number]> = {}
  for (const key of boxSystemProps) {
    ;(res as Record<string, unknown>)[key] = props[key]
  }
  return res
}

const __Box = forwardRef<any, BoxProps>(function Box(props, ref) {
  const theme = useTheme()

  interface __BoxInternalProps {
    __css: ThemeUICSSObject
    __themeKey?: string
  }

  const {
    __themeKey = 'variants',
    __css,
    variant,
    css: cssProp,
    sx,
    as: Component = 'div',
    ...rest
  } = props as BoxProps & __BoxInternalProps

  const baseStyles: CSSObject = {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  }

  const __cssStyles = css(__css)(theme)

  const variantInTheme =
    get(theme, `${__themeKey}.${variant}`) || get(theme, variant)
  const variantStyles = variantInTheme && css(variantInTheme)(theme)

  const sxPropStyles = css(sx)(theme)

  const systemPropsStyles = css(pickSystemProps(rest))(theme)

  const style: ArrayInterpolation<unknown> = [
    baseStyles,
    __cssStyles,
    variantStyles,
    sxPropStyles,
    systemPropsStyles,
    cssProp,
  ]

  boxSystemProps.forEach((name) => {
    delete (rest as Record<string, unknown>)[name]
  })

  return <Component ref={ref} css={style} {...rest} />
})

/**
 * Use the Box component as a layout primitive to add margin, padding, and colors to content.
 * @see https://theme-ui.com/components/box
 */
export const Box = __Box as typeof __Box & {
  /**
   * @deprecated
   */
  withComponent: (Component: React.ElementType) => React.ComponentType<BoxProps>
}

Box.withComponent =
  (component) =>
  ({ as, ...props }) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[theme-ui] You’re using the `.withComponent` API on a Theme UI component. This API will be deprecated in the next version; pass the `as` prop instead.'
      )
    }
    return <Box as={component} {...props} />
  }

export default Box