import { Theme } from '../types'

import { ScaleProperty } from './scales-utility-types'

export const space: Record<keyof SpaceCSSProperties, 'space'> = {
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  marginBlock: 'space',
  marginBlockEnd: 'space',
  marginBlockStart: 'space',
  marginInline: 'space',
  marginInlineEnd: 'space',
  marginInlineStart: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  paddingBlock: 'space',
  paddingBlockEnd: 'space',
  paddingBlockStart: 'space',
  paddingInline: 'space',
  paddingInlineEnd: 'space',
  paddingInlineStart: 'space',
  inset: 'space',
  insetBlock: 'space',
  insetBlockEnd: 'space',
  insetBlockStart: 'space',
  insetInline: 'space',
  insetInlineEnd: 'space',
  insetInlineStart: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
}

export type Space = ScaleProperty<Theme['space']>

export interface SpaceCSSProperties {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: Space
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: Space
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: Space
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: Space
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: Space
  /**
   * The **`marginX`** is shorthand for using both **`margin-left`** and **`margin-right`** CSS properties. They set the margin area on the left and right side of an element. A positive value
   * places it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginX?: Space
  /**
   * The **`marginY`** is shorthard for using both **`margin-top`** and **`margin-bottom`** CSS properties. They set the margin area on the top and bottom of an element. A positive value places
   * it farther from its neighbors, while a negative value places it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginY?: Space
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **66**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  marginBlock?: Space
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: Space
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: Space
  /**
   * The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'margin-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **66**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  marginInline?: Space
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | **79** | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: Space
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'margin-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | **79** | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: Space
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * **Syntax**: `[ <length> | <percentage> ]{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: Space
  /**
   * The **`padding-top`** padding area on the top of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: Space
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: Space
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: Space
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: Space
  /**
   * The **`paddingX`** is shorthand property for CSS properties **`padding-left`** and **`padding-right`**. They set the width of the padding area on the left and right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingX?: Space
  /**
   * The **`paddingY`** is shorthand property for CSS properties **`padding-top`** and **`padding-bottom`**. They set the width of the padding area on the top and bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingY?: Space
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **66**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  paddingBlock?: Space
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: Space
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: Space
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   *
   * **Syntax**: `<'padding-left'>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **66**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  paddingInline?: Space
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | **79** | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: Space
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'padding-left'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | **79** | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */

  paddingInlineStart?: Space
  /**
   * The **`inset`** CSS property defines the logical block and inline start and end offsets of an element, which map to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,4}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **66**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  inset?: Space
  /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  insetBlock?: Space
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  insetBlockEnd?: Space
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  insetBlockStart?: Space
  /**
   * The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  insetInline?: Space
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  insetInlineEnd?: Space
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  insetInlineStart?: Space
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: Space
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: Space
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: Space
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Syntax**: `<length> | <percentage> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: Space
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * **Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`
   *
   * @deprecated
   */
  gridGap?: Space
  /**
   * The **`grid-column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: Space
  /**
   * The **`grid-row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: Space
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * **Syntax**: `<'row-gap'> <'column-gap'>?`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **66** | **61**  |   No   | **16** | No  |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: Space
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * |   No   | **63**  | **3** _-x-_ |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  | **10**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: Space
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **63**  |   No   |  No  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: Space
}