<template>
  <div :style="{
    width: width + 'px',
    height: height + 'px',
    borderRadius: radius + 'px',
    borderWidth: borderWidth + 'px',
    borderColor: borderColor,
    borderStyle: 'solid',
    boxShadow: shadow ? `${shadow[0]}px ${shadow[1]}px ${shadow[2]}px ${shadow[3]}` : '',
    backdropFilter: isGroundGlass ? 'blur(100px)' : 'none', // 实现毛玻璃效果
    backgroundAttachment: isGroundGlass ? 'fixed' : 'none'
  }" class="image-container">
    <el-image :src="url" :fit="showModel" :width="width" :height="height" style="border-radius: inherit;" />
  </div>
</template>

<script setup lang="ts">
import type { imagePropsType } from "@/components/Y_image/index";

const props = defineProps<imagePropsType>();

/**
 * url 图片地址
 * width 图片宽度
 * height 图片高度
 * radius 图片圆角
 * borderWidth 图片边框宽度
 * borderColor 图片边框颜色
 * isGroundGlass 是否是毛玻璃效果
 * shadow 是否是阴影效果
 * showModel 展示模式
 */
const {
  url,
  width,
  height,
  radius,
  borderWidth,
  borderColor,
  isGroundGlass,
  shadow,
  showModel
} = props;
</script>

<style scoped lang="scss">
.image-container {
  position: relative;
  overflow: hidden;

  /* 确保内容不会超出容器 */
  &::after {
    position: absolute;
    content: "";
    background: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(100px);
    z-index: 0;
  }
}

.el-image {
  display: block;
  object-fit: cover;
  /* 保持图片的比例并裁剪 */
}
</style>
