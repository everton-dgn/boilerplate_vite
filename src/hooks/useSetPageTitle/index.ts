import { useLayoutEffect } from 'react'

import type { UseSetPageTitleProps } from './types'

export const useSetPageTitle = ({ pageTitle }: UseSetPageTitleProps): void => {
  useLayoutEffect(() => {
    document.title = pageTitle
  }, [pageTitle])
}
