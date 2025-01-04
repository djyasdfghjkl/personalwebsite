<script setup lang="ts">
</script>

<template>
  <main>
    <a class="container">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <text class="text" x="50%" y="50%" text-anchor="middle" dy=".3em" color="white">
          <slot></slot>
        </text>

      </svg>
    </a>

  </main>
</template>

<style scoped lang="scss">
@use "../../styles/mixins" as mixins;

$default: #ffcc00;
$pink: deeppink;

.container {
  text-align: center;
  color: $default;
  color: white;

  *,
  *:before,
  *:after {
    @include mixins.transition(2.4s);
    @include mixins.box-sizing(border-box);
  }
}

[class^="container"] {
  display: block;
  position: relative;
  color: $default;
  text-decoration: none;
  @include mixins.size(100px, 50px);
  margin: 50px auto;
  overflow: hidden;

  .outline {
    @include mixins.coverer;
    stroke: $default;
    stroke-width: 2px;
    fill: transparent;
  }

  .text {
    @include mixins.relative(-40px);
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    fill: wheat;
  }

  &:hover {
    .outline {
      stroke: $pink;
    }

    .text {
      color: $pink;
    }
  }
}

.container {
  @include mixins.transition(1s); // 调用 transition mixin
  @include mixins.size(150px, 50px); // 调用 size mixin

  .outline {
    stroke-dasharray: 25 25;
    stroke-dashoffset: -588;
  }

  &:hover {
    .outline {
      stroke-dasharray: 50 50;
      stroke-dashoffset: -275;
    }
  }
}

@include mixins.keyframes(woop) {
  0% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
  }

  40%,
  50% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -250;
  }

  100% {
    stroke-dasharray: 600 0;
    stroke-dashoffset: 25;
  }
}

@include mixins.keyframes(bounceRight) {
  0% {
    @include mixins.translateX(-100%);
  }

  30% {
    @include mixins.translateX(-100%);
  }

  40%,
  60%,
  80%,
  100% {
    @include mixins.translateX(0);
  }

  50% {
    @include mixins.translateX(-30%);
  }

  70% {
    @include mixins.translateX(-15%);
  }

  90% {
    @include mixins.translateX(-7.5%);
  }
}

.container:hover {
  animation: colorChange 2s ease-in-out;
}

@keyframes colorChange {
  0% {
    fill: #ffcc00; // 初始颜色
  }

  40%,
  60%,
  80% {
    fill: deeppink; // 中间的颜色
  }

  100% {
    fill: deeppink; // 最终颜色
  }
}
</style>
