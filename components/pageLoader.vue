<template lang="html">
    <div class="page-loader" id="page-loader">
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-bar"></div>
        <div class="loader-ball"></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
@bar-color: #bbb;
@ball-color: #aaa;

.loop(@i) when (@i =< 5) {
  &:nth-child(@{i}) {
    left: (@i - 1) * 18px;
    transform: scale(1, @i * .2);
    animation: ~"barUp@{i} 4s infinite";
  }
  .loop(@i + 1);
}

.page-loader {
  .legacy & {
    display: none;
  }

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -45px;
  width: 90px;
  height: 100px;

  .loader-bar {
    position: absolute;
    bottom: 0;
    width: 12px;
    height: 50%;
    background: @bar-color;
    transform-origin: center bottom;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, .2);
    .loop(1);
  }

  .loader-ball {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 12px;
    height: 12px;
    background: @ball-color;
    border-radius: 50%;
    animation: ball 4s infinite;
  }
}

// IE9
.page-loader-legacy {
  .legacy & {
    display: block;
  }

  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 18px;
  width: 150px;
  height: 100px;
  margin-top: -50px;
  margin-left: -75px;
  line-height: 100px;
  background: @ball-color;
  color: #fff;
  border-radius: 8px;
  text-align: center;
}

@keyframes ball {
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(9px, -14px);
  }
  10% {
    transform: translate(18px, -10px);
  }
  17% {
    transform: translate(27px, -24px)
  }
  20% {
    transform: translate(36px, -20px)
  }
  27% {
    transform: translate(45px, -34px)
  }
  30% {
    transform: translate(54px, -30px)
  }
  37% {
    transform: translate(63px, -44px)
  }
  40% {
    transform: translate(72px, -40px)
  }
  50% {
    transform: translate(72px, 0)
  }
  57% {
    transform: translate(63px, -14px)
  }
  60% {
    transform: translate(54px, -10px)
  }
  67% {
    transform: translate(45px, -24px)
  }
  70% {
    transform: translate(36px, -20px)
  }
  77% {
    transform: translate(27px, -34px)
  }
  80% {
    transform: translate(18px, -30px)
  }
  87% {
    transform: translate(9px, -44px)
  }
  90% {
    transform: translate(0, -40px)
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes barUp1 {
  0% {
    transform: scale(1, .2);
  }
  40% {
    transform: scale(1, .2);
  }
  50% {
    transform: scale(1, 1);
  }
  90% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, .2);
  }
}

@keyframes barUp2 {
  0% {
    transform: scale(1, .4);
  }
  40% {
    transform: scale(1, .4);
  }
  50% {
    transform: scale(1, .8);
  }
  90% {
    transform: scale(1, .8);
  }
  100% {
    transform: scale(1, .4);
  }
}

@keyframes barUp3 {
  0% {
    transform: scale(1, .6);
  }
  100% {
    transform: scale(1, .6);
  }
}

@keyframes barUp4 {
  0% {
    transform: scale(1, .8);
  }
  40% {
    transform: scale(1, .8);
  }
  50% {
    transform: scale(1, .4);
  }
  90% {
    transform: scale(1, .4);
  }
  100% {
    transform: scale(1, .8);
  }
}

@keyframes barUp5 {
  0% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1, .2);
  }
  90% {
    transform: scale(1, .2);
  }
  100% {
    transform: scale(1, 1);
  }
}

</style>
