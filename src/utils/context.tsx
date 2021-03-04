import React, { useState, useContext, createContext } from 'react'

type TransportContextType = {
  plate: string
  setPlate: (plate: string) => void
}

const PlateContext = createContext<TransportContextType>({
  plate: '',
  setPlate: (): void => {
    throw new Error('A função setParam dever ser substituída')
  }
})

const PlatePrivider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [plate, setPlate] = useState<string>('')
  return (
    <PlateContext.Provider value={{ plate, setPlate }}>
      {children}
    </PlateContext.Provider>
  )
}

export const usePlate = () => {
  const context = useContext(PlateContext)
  if (!context) throw new Error('usePlate deve set usado em um PlatePrivider')
  return { ...context }
}
export default PlatePrivider
