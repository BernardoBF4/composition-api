type Element = HTMLElement & {
  __ClickOutsideHandler__: (event: MouseEvent) => void
}

export default {
  mounted(el: Element, binding: any) {
    el.__ClickOutsideHandler__ = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value()
      }
    }
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unmounted(el: Element) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__)
  },
}
