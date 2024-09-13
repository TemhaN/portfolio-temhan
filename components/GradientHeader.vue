<template>
	<div class="gradient-container">
		<div class="gradient-header"></div>
		<div class="overlay"></div>
	</div>
</template>

<script>
export default {
  mounted() {
    this.startGradientAnimation();
  },
  methods: {
    startGradientAnimation() {
      const element = this.$el.querySelector('.gradient-header');
      let hue = 220; // Начальный оттенок основного цвета

      setInterval(() => {
        hue = (hue + 1) % 360;
        const mainColor = `hsl(${hue}, 60%, 65%)`; // Основной цвет
        const color1 = this.generateColor(hue, -30, 60); // Насыщенный цвет
        const color3 = this.generateColor(hue, 30, 70); // Светлый цвет

        element.style.background = `
          linear-gradient(to right, 
          ${color1} 10%, 
          ${mainColor} 50%, 
          ${color3} 90%), 
          linear-gradient(135deg, 
          transparent 0%, 
          rgba(255, 255, 255, 0.5) 50%, 
          rgba(255, 255, 255, 1) 100%)`;
      }, 50); // Скорость смены для плавного перехода
    },
    generateColor(hue, shift, lightness) {
      const newHue = (hue + shift + 360) % 360; // Сдвиг оттенка по кругу
      return `hsl(${newHue}, 60%, ${lightness}%)`; // Разные светлоты для создания насыщенных и светлых цветов
    }
  }
}


</script>
