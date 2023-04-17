const size = (size: number) => {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    matches: query === `(min-width: ${size}px)`,
    media: '',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn()
  }))
}

const object = {
  writable: true,
  value: vi.fn().mockImplementation(() => ({}))
}

Object.defineProperty(window, 'matchMedia', object)

export default size
