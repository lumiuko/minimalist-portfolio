const base = {
  enter: 'transiton transition-all duration-150',
  leave: 'transiton transition-all duration-150'
}

const slideY = {
  ...base,
  enterFrom: 'opacity-0 translate-y-1',
  enterTo: 'opacity-100 translate-y-0',
  leaveFrom: 'opacity-100 translate-y-0',
  leaveTo: 'opacity-0 translate-y-1'
}

export { slideY }
