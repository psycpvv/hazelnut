import useRawMedia from 'use-media'

const useMedia = () => ({
  isSm: useRawMedia({ minWidth: '576px' }),
  isMd: useRawMedia({ minWidth: '768px' }),
  isLg: useRawMedia({ minWidth: '992px' }),
  isXl: useRawMedia({ minWidth: '1200px' }),
  is2xl: useRawMedia({ minWidth: '1400px' }),
})

export default useMedia
