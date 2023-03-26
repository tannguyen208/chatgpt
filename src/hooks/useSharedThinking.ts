import {useCallback, useState} from 'react'
import {useBetween} from 'use-between'

interface UseThinkingOutput {
  opened: boolean
  setOpenThinking: () => void
  setCloseThinking: () => void
}

export function useThinking(defaultValue?: boolean): UseThinkingOutput {
  const [opened, setValue] = useState(!!defaultValue)

  const setOpenThinking = useCallback(() => setValue(true), [])
  const setCloseThinking = useCallback(() => setValue(false), [])

  return {opened, setOpenThinking, setCloseThinking}
}

export const useSharedThinking = () => useBetween(useThinking)

