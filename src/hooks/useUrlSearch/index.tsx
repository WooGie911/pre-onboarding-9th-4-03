import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

interface SearchParams {
  [key: string]: string
}

function useUrlSearch() {
  const [urlTerm, serUrlTerm] = useSearchParams()

  const setSearchParams = useCallback(
    (setParams: SearchParams) => {
      Object.keys(setParams).forEach(key => {
        urlTerm.set(key, setParams[key])
        serUrlTerm(urlTerm)
      })
    },
    [urlTerm, serUrlTerm]
  )

  const getSearchParams = useCallback(
    (searchParam: string) => {
      const urlParam = urlTerm.get(searchParam)
      if (urlParam !== null) {
        return urlParam
      }
      return ''
    },
    [urlTerm]
  )

  return {
    setSearchParams,
    getSearchParams,
  }
}

export default useUrlSearch