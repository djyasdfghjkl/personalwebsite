export type topNavigationBarType = {
  bgColor?: string // 背景颜色
  textColor?: string // 文字颜色
  borderColor?: string // 边框颜色
  borderWidth?: string // 边框宽度
  borderRadius?: string // 边框圆角
  shadow?: string // 阴影
  type?: 'dropdown' | 'text' // 导航栏类型（下拉或文本）
  height?: string // 高度
  width?: string // 宽度
  dropdownData?: any[] // 下拉数据
}
