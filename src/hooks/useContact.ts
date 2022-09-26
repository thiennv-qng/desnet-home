import { useCallback } from 'react'

export const useContact = () => {
  const onContact = useCallback(() => {
    return window.open('mailto: hello@descartes.network', '_blank')
  }, [])

  return onContact
}
