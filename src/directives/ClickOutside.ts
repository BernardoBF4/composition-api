export default {
  mounted(el, binding: any) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__)
  },
}
