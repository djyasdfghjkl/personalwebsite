<template>
  <div class="landing-page">
    <!-- Navigation Bar -->
    <nav class="nav-bar">
      <div class="nav-left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABICAMAAADrhxZZAAABamlDQ1BJQ0MgcHJvZmlsZQAAeJx1kL1Lw1AUxU+rUtA6iA4dHDKJQ9TSCnZxaCsURTBUBatTmn4JbXwkKVJxE1cp+B9YwVlwsIhUcHFwEEQHEd2cOim4aHjel1TaIt7H5f04nHO5XMAbUBkr9gIo6ZaRTMSktdS65HuDh55TqmayqKIsCv79u+vz0fXeT4hZTbt2ENlPXJfOLpd2ngJTf/1d1Z/Jmhr939RBjRkW4JGJlW2LCd4lHjFoKeKq4LzLx4LTLp87npVknPiWWNIKaoa4SSynO/R8B5eKZa21g9jen9VXl8Uc6lHMYRMmGIpQUYEEBeF//NOOP44tcldgUC6PAizKREkRE7LE89ChYRIycQhB6pC4c+t+D637yW1t7xWYbXDOL9raQgM4naGT1dvaeAQYGgBu6kw1VEfqofbmcsD7CTCYAobvKLNh5sIhd3t/DOh74fxjDPAdAnaV868jzu0ahZ+BK/0HFylqvBRFrjsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAG8UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQICAgCAgIBAQEHBwcGBgYH9/f////9/f38/Pz5CQkO/v75+fn////////////////////////////////////////zAwML+/v////////1BQULCwsAAAAP///4+Pj////////////////xALASAWAQAAAG1MA5xtBcuNB9qYB/muCOmjB6t3Bj8sAh8WAbuCBi8hApttBT4sAv///043A6t4BW1NAzwICh4EBQ8CAjYGCuscJuocJr4XH5ISGFgLDiwFCB0EBVgKD4MQFa8VHeobK+ogJWcNETsHCtwbJOkcJuodJuocJu8gIP///+odJuwdJuodKOocJ2UNEc0YIngQEA4CAkoJDK+vr/vU1vJxd+sqNO5HT/FjavOAhfeqru7h4vSNkvBjavrGyf3j5P///wAAAPaboP3x8aCgoAAAAPevCPuvCH1XBOOfB/uvCPquCIxiBfmuCPqtCPmuB/itCfevCE82A/muB/SvBfmvCvivB/mtCPetCLuDCHxYBPevCGXtUgMAAACUdFJOUwBAf6/f/++/j1Bgz58gMHBfEP////////////////9AcI+fv4BQIGAQ///vf///kN//b88woP//gP////////////////+Q////gP//z8////////////8wMP///4Cf7xCw71Bgv9//IP///////////////////6+w////oCB//69Av//fYO9wYP/PMFBwgGBAQEBaK7G2AAAFTklEQVR4nO2Y61vcRBSHA90sLQUqy+7i7LJkr9lAUGKBFUpboSLeXbBctFSt9xv1rqCiVq33tqL+w2bmTDKZyUyS5/ExfNnfF3YnZ2dezjkzOWc0raeeeuqpp/9Lff2nMrquZwdOnzlBisGzOlNmaPhkKEaCFITk3Elg3JfVQzp9AhhhCldDaWMMSzF0vT9djNEMLJsby5O/heJ4AUb6UuXoh0XvRwjl3L/5EkJlmqxpYtCoFFwMsn4RfyjC4GCKHEM0KghN5CpuZMqoVEaTCRxiVGv1RqPebJkxK5jtWt1Vs2VFWdHsGEcor0+4gSnlpvLFaT0mQ4yajXw12uoVzJlkhn10xQcQmtInXY7yNEKVB+norIKigXg5MwqKpIbaLF2xUEGlh0ruhwlsPk5Hs7KfWDUUliOLznk7oaGm+Qd6kaZnvuLvF1eS94w5J8FwVQ3xis6gkrqEHVvjk+CF/MRYwR8M7xjT8YJdbZmmOd9acOTz+7yNZrQh1gh3gnYedsWNLKow6vNsrO1IPGJRjIYRNgyDnPEIli4sX7wEurz8yNIKHQ+9ZMDXjsGPNmH+4GgtqSHRIFlt9colURcfJU8GBPsZMs1caPtVYVU23lYkpWELhqBF8MZaiOPKqozDtOUY3rpN76vlqPbGPDGsSTlcj6xd5ige06Unal2989bxI9sjJP6xpYbgOuGRx+Hq8bVliMgTT3b8wbO8O8gUbdnsmuYEHeJIdzKowXkO9NTT3PZYXV3tBL8/8yxnTZzfkM+uGcQF8LlF/JbA0NNz3Y3N56/qMm1t7+x2uy+E/hOFO6gPYDvXIw0boS3zYhe0sbtzbXtvbwvr6t72tZ3Njevw5KWguR3+RwJqslg4khRgqoYC83I3Tq/cYNbzUWGh/q7jTxbZVUpDkmavBgZuvBbL0X1dWKgZmtYTW90QFxJkC9nzRjxG901m3o7YBNz0McAkbEGOt3ZjMd7eeYfnUGZfYPo4jjmew33Jvfvezu51JcPm9lbwVRfnDz4u6wmAQbQ0fX//pgDwwYcfffzJ/qfwmNVCrejpLT+N5/2MjQEG0dJ0Gn0Gy3/+BdbBAaKCfoYVqWaC/bLuE6mOMYrJ0tgrTcsex03EawqesyKVvOWUpW7g8EpwflT9rzQseknFkRMDcxiZIIHF1yMT1eHPUxoWHcVwsMC0o/zdDkQdXiEKzwkvH7+9juXw70IsW+0QKBi9XU2+iEVG8BmbZFBPGBf9S/835BUiLyugNPFcAGVRqPzDgpKOzTHLOL6K5mAJAg6RFUIwOzvklPXYeSTkzoC7wkCG7BeEDtwNu/+1wIH37SkMwroYElvJ/IARSB0jqSFO0+wwbqOOkFwVjDCCcUfYr8hOQDZ/utP2kQsYrcz5FsE6REJUSAd1TvtGpzcNEk2TkAxnuW7Ka0scRmJ5rXSLW3NBbcj9F+SAwsmaV3CMQYq6LU7wQtUDQc5h1TCMds3vHusGSABB9mG1xRkecoYZ3BOMZsnBLhVOD0ywyF8/WOsKbo9PDI1SYAVBxwX7uNQKhwXaBvEWxGsP4zhiDFFwTuKQkswKu0NxMWUuyH4Q5tDMZhQJNyfucHMSI5wd6itUs624VBDP/QhDnoNEJrxl8BVIZlTJ4coyqk2ZqkkNxfcgBhkTMI4KLka6l/3ffndLh2tTXxV8MbTy/Q9pUvyIW1rc3OeOAKUyXXSd0bntjv/0c2oYv0CDf4FcdxRyuRwpBju3aPv/a0ocv7GLl9u/w9VLZ2WJXcv8kRKHdufuvT+pjo/v/jX89z/Hx97AveM7aWH01FNPPfX0n/QvRqSDFUbV0z8AAAAASUVORK5CYII="
          alt="联系方式" class="logo" />
        <div class="nav-links">
          <coolBtn>首页</coolBtn>
          <coolBtn>下载</coolBtn>
        </div>
      </div>
      <div class="nav-right">
        <coolBtn>我的能力</coolBtn>
        <coolBtn>我的经历</coolBtn>
        <coolBtn class="login-btn">关于我</coolBtn>
        <div class="media-controls">
          <button class="icon-btn">
            <i class="fas fa-play"></i>
          </button>
          <button class="icon-btn">
            <i class="fas fa-sync-alt"></i>
          </button>
          <button class="icon-btn">
            <i class="fas fa-volume-up"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <h1 class="title">
        <div class="subtitle">欢迎来到我的个人网站</div>
        <div class="version">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px"
            height="300px">
            <polygon class="g-polygon-wrap" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
            <polygon class="g-polygon-move" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
            <!-- 中心文字 -->
            <text x="150" y="150" font-family="Arial" font-size="18" fill="#fff" text-anchor="middle"
              alignment-baseline="middle">
              DJY
            </text>
          </svg>
        </div>
      </h1>
    </main>

    <!-- Platform Selection -->
    <footer class="platform-selection">
      <div class="platform-list">
        <coolBtn class="platform-item">
          小易支付
        </coolBtn>
        <div class="separator">|</div>
        <coolBtn class="platform-item">
          启明行动
        </coolBtn>
        <div class="separator">|</div>
        <coolBtn class="platform-item">
          湖南田长
        </coolBtn>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import coolBtn from "@/components/coolBtn/index.vue"
interface Platform {
  name: string
  icon: string
  link: string
}

const platforms = ref<Platform[]>([
  { name: 'iOS', icon: 'fa-apple', link: '#' },
  { name: 'Android', icon: 'fa-android', link: '#' },
  { name: 'Windows', icon: 'fa-windows', link: '#' },
  { name: 'Linux', icon: 'fa-linux', link: '#' },
  { name: 'macOS', icon: 'fa-apple', link: '#' }
])

onMounted(() => {
  // Add any initialization logic here
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #7eb6e9 0%, #295baa 100%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Navigation Bar Styles */
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  height: 32px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a,
.nav-right a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-right a:hover {
  color: white;
}

.nav-links a.active {
  color: white;
}



.media-controls {
  display: flex;
  gap: 1rem;
}

.icon-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.icon-btn:hover {
  opacity: 1;
}

/* Main Content Styles */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  text-align: center;
  padding: 2rem;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  opacity: 0.9;
}

.version {
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
}

/* Platform Selection Styles */
.platform-selection {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

.platform-list {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.platform-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.platform-item:hover {
  opacity: 1;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-bar {
    padding: 1rem;
  }

  .nav-links,
  .nav-right a:not(.login-btn) {
    display: none;
  }

  .subtitle {
    font-size: 1.8rem;
  }

  .version {
    font-size: 5rem;
  }

  .platform-list {
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .subtitle {
    font-size: 1.5rem;
  }

  .version {
    font-size: 4rem;
  }

  .platform-list {
    flex-direction: column;
    gap: 0.5rem;
  }

  .separator {
    display: none;
  }
}

svg {
  margin: auto;
  overflow: visible;
  transform: scalex(.9);
}

.g-polygon-wrap,
.g-polygon-move {
  fill: none;
  stroke: rgb(175, 187, 10);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.g-polygon-move {
  transform-origin: center center;
  transform: scale(1.05);
  stroke: linear-gradinet(180deg, rgba(229, 245, 10, 0.301), transprent);
  stroke-width: 1.5;
  stroke-dasharray: 280, 700;
  stroke-dashoffset: 8;
  animation: move 2.4s infinite linear;
}

@keyframes move {
  0% {
    stroke-dashoffset: 8;
  }

  100% {
    stroke-dashoffset: -972;
  }
}

svg text {
  text-transform: uppercase;
  animation: stroke 10s infinite linear;
  letter-spacing: 10px;
  font-size: 50px;
  /* fill: rgb(229, 245, 10); */
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(150, 148, 60);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 0.2;
  }

  50% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(160, 158, 54);
    stroke-width: 0.5;
  }

  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(176, 189, 59);
    stroke-width: 1;
  }

  90% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgb(229, 245, 10);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
    animation-delay: 5s;
    /* 在最后完成后延迟 5 秒再重新启动动画*/
  }

  100% {
    fill: rgba(72, 138, 20, 0);
    /*保持最终颜色*/
    stroke: rgb(229, 245, 10);
    /*保持最终颜色*/
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;

  }
}
</style>
