const size = (size: number) => {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    dispatchEvent: vi.fn(),
    matches: query === `(min-width: ${size}px)`,
    media: '',
    onchange: null,
    removeEventListener: vi.fn(),
    removeListener: vi.fn()
  }))
}

const object = {
  value: vi.fn().mockImplementation(() => ({})),
  writable: true
}

Object.defineProperty(window, 'matchMedia', object)

export default size
