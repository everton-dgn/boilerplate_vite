import type { ReactNode } from 'react'

export const mockedUseNavigate = vi.fn()
export const mockedUseParams = vi.fn()
export const mockedUseRoutes = vi.fn()
export const mockedUseLocation = vi.fn()

const actualImports = vi.importActual('react-router-dom') as unknown as Record<
  string,
  unknown
>
vi.mock('react-router-dom', () => ({
  ...actualImports,
  Link: ({ children }: { children: ReactNode }) => children,
  Navigate: ({ children }: { children: ReactNode }) => children,
  Outlet: ({ children }: { children: ReactNode }) => children,
  useLocation: () => mockedUseLocation,
  useNavigate: () => mockedUseNavigate,
  useParams: mockedUseParams,
  useRoutes: mockedUseRoutes
}))
