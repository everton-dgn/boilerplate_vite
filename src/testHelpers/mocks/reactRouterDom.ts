import { ReactNode } from 'react'

export const mockedUseNavigate = vi.fn()
export const mockedUseParams = vi.fn()
export const mockedUseRoutes = vi.fn()
export const mockedUseLocation = vi.fn()

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Link: ({ children }: { children: ReactNode }) => children,
  Navigate: ({ children }: { children: ReactNode }) => children,
  Outlet: ({ children }: { children: ReactNode }) => children,
  useLocation: () => mockedUseLocation,
  useNavigate: () => mockedUseNavigate,
  useParams: mockedUseParams,
  useRoutes: mockedUseRoutes
}))
