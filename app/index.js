import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  class Slider {
    constructor() {
      this.slider = document.querySelector(".slider");
      this.image1Container = document.querySelector(".container__imageOne");
      this.image2Container = document.querySelector(".container__imageSecond");
      this.imageOne = document.querySelector(".imageOne");
      this.imageSecond = document.querySelector(".imageSecond");
      this.sliderDivider = document.querySelector(".slider__divider");
      this.sliderHandle = document.querySelector(".slider__handle");
      this.draggable = false;
      this.renderSlider();
      this.initEvent();
      window.addEventListener("resize", this.renderSlider);
    }
    renderSlider = () => {
      this.sliderWidth = this.slider.offsetWidth;
      this.sliderOffsetLeft = this.slider.offsetLeft;
      this.imageOne.style.width = `${this.sliderWidth}px`;
      this.imageSecond.style.width = `${this.sliderWidth}px`;
    };
    initEvent = () => {
      this.sliderHandle.addEventListener("mousedown", () => {
        this.draggable = true;
      });
      this.sliderHandle.addEventListener("mouseup", () => {
        this.draggable = false;
      });
      window.addEventListener("mousemove", event => {
        if (this.draggable) {
          this.move(event.clientX);
        }
      });
    };
    move = clientX => {
      const finishOffset = this.finishOffset(clientX);
      const percent = (finishOffset / this.sliderWidth) * 100;
      this.sliderDivider.style.left = `${percent}%`;
      this.image2Container.style.width = `${percent}%`;
    };

    finishOffset = clientX => {
      const offset = clientX - this.sliderOffsetLeft;
      if (offset < 0) {
        return 0;
      } else if (offset > this.sliderWidth) {
        return this.sliderWidth;
      } else {
        return offset;
      }
    };
  }
  new Slider();
});
