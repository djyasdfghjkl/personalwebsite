<template>
  <main>
    <div class="container">
      <!-- 舞台层 -->
      <div class="stage">
        <!-- 控制层 -->
        <div class="control">
          <!-- 图片层 -->
          <div class="imgWrap">
            <div class="img img1">
              <img src="https://static.apdnews.com/image/20161228/1482898199741754.jpg">
            </div>
            <div class="img img2"><img
                src="https://i.pinimg.com/originals/e8/ba/25/e8ba252917952f23dfc9715e942e654e.jpg"></div>
            <div class="img img3"><img
                src="https://www.womenly.net/wp-content/uploads/2017/03/Tips-to-Maintain-the-Soft-Skin.jpg"></div>
            <div class="img img4"><img
                src="https://usa-grlk5lagedl.stackpathdns.com/production/usa/images/1607033935377530-bella-hadid-world-s-most-beautiful-woman.jpeg?w=868&h=660&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb&fit=crop">
            </div>
            <div class="img img5"><img
                src="https://c4.wallpaperflare.com/wallpaper/290/224/929/women-face-choker-portrait-wallpaper-preview.jpg">
            </div>
            <div class="img img6"><img
                src="https://webneel.com/wallpaper/sites/default/files/images/09-2018/beautiful-woman-wallpaper-annnevreva.jpg">
            </div>
            <div class="img img7"><img
                src="http://mywordsnthoughts.com/myworld/wp-content/uploads/2018/01/beautiful-neck.jpg"></div>
            <div class="img img8"><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8kEsEE3hJ64aU-_TKQJtvKDtTOGQfT3A4A&usqp=CAU">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
$imgCount : 8;

.container {
  position: relative;
  height: 100vh;
  background: #000;
  overflow: hidden;
}

.stage {
  position: relative;
  width: 800px;
  height: 240px;
  margin: 20px auto;
  perspective: 2000px;
  transform-style: preserve-3d;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .5));

  .control {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateZ(-2000px) rotateY(50deg) rotateZ(0deg);
    animation: rotate 30s linear infinite;

    .imgWrap {
      position: absolute;
      width: 400px;
      height: 400px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-style: preserve-3d;

      .img {
        position: absolute;
        width: 500px;
        height: 400px;
        line-height: 400px;
        text-align: center;
        font-size: 120px;
        top: 0;
        left: 0;
        transform-style: preserve-3d;
        transform-origin: 50% 50% 0px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @for $i from 1 through $imgCount {
        .img#{$i} {
          // transform: rotateY(35 + ($i * 45deg)) translateZ(482.84px) ;
          transform: rotateY(35 + ($i * 45deg)) translateZ(650px);
        }
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: translateZ(-2000px) rotateY(0deg);
  }

  50% {
    transform: translateZ(-2000px) rotateY(-360deg);
  }

  100% {
    transform: translateZ(-2000px) rotateY(-720deg);
  }
}
</style>
