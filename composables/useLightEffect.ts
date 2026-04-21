export const useLightEffect = () => {
  const x = ref(0);
  const y = ref(0);

  const onMouseMove = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };

  onMounted(() => {
    if (process.client) {
      window.addEventListener("mousemove", onMouseMove);
    }
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("mousemove", onMouseMove);
    }
  });

  return { x, y };
};
