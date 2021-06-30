/**
 * 依赖color插件，在此基础上封装部分转换函数
 * 参考文档说明：https://www.npmjs.com/package/color
 */
import Color from 'color'

// 调色板
export function getPalette(color) {
  const normalColor = Color(color).hex().toString().toLowerCase()
  // active
  const darkColor1 = mixBlack(normalColor, 0.1)
  const darkColor2 = mixBlack(normalColor, 0.2)
  const darkColor3 = mixBlack(normalColor, 0.3)
  const darkColor4 = mixBlack(normalColor, 0.4)
  // light
  const lightColor1 = mixWhite(normalColor, 0.2)
  const lightColor2 = mixWhite(normalColor, 0.4)
  const lightColor3 = mixWhite(normalColor, 0.6)
  const lightColor4 = mixWhite(normalColor, 0.8)
  const lightColor5 = mixWhite(normalColor, 0.9)
  const lightColor6 = mixWhite(normalColor, 0.95)

  return [
    darkColor4,
    darkColor3,
    darkColor2,
    darkColor1,
    normalColor,
    lightColor1,
    lightColor2,
    lightColor3,
    lightColor4,
    lightColor5,
    lightColor6,
  ]
}

// getObject
export function toObject(color) {
  return Color(color).object()
}

// getHex
export function toHex(color, toLowerCase = true) {
  const hex = Color(color).hex().toString()
  return toLowerCase ? hex.toLowerCase() : hex
}

// getRgbArr
export function toRgbArr(color) {
  return Color(color).rgb().array()
}

// getHslArr
export function toHslArr(color) {
  return Color(color).hsl()
}

// grayscale
export function grayscale(color) {
  return Color(color).grayscale().toString()
}

/**
 * 两个颜色值比较
 */
export function isEqual(color1, color2) {
  return Color(color1).toString() === Color(color2).toString()
}

// 是否是light
export function isLight(color) {
  return Color(color).isLight()
}

// 是否是light
export function isDark(color) {
  return Color(color).isDark()
}

/**
 * 混合色，浓度
 */
export function mix(mixColor, color, concentration) {
  return Color(color).mix(Color(mixColor), concentration).hex().toLowerCase()
}

export function mixWhite(color, concentration) {
  return mix('#ffffff', color, concentration)
}

export function mixBlack(color, concentration) {
  return mix('#000000', color, concentration)
}

export function alpha(color, alpha) {
  return Color(color).alpha(alpha).toString()
}

export function fade(color, fade) {
  return Color(color).fade(fade).toString()
}

export function lighten(color, concentration) {
  return Color(color).lighten(concentration).toString()
}

export function darken(color, concentration) {
  return Color(color).darken(concentration).toString()
}
