/**
 * url 图片地址，默认或者找不到则不显示
 * width 图片宽度,默认满宽
 * height 图片高度
 * radius 图片圆角,默认20px
 * borderWidth 图片边框宽度，默认1
 * borderColor 图片边框颜色,默认#fff
 * isGroundGlass 是否是毛玻璃效果,可传值透明度，默认false
 * shadow 传值[x,y,blur,color]
 * showModel 展示模式,默认none
 */
interface imagePropsType {
  url: string
  width?: number
  height?: number
  radius?: number
  borderWidth?: number
  borderColor?: string
  isGroundGlass?: boolean
  shadow?: [number, number, number, string]
  showModel?: string
}

// 导出所有
export type { imagePropsType }
