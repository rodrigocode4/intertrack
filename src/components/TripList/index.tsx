import React from 'react'
import * as S from './styled'
import TripItem from 'components/TripItem'

const TripList = () => {
  return (
    <>
      <S.UL>
        {[1, 2, 3, 4].map((_, index) => (
          <S.LI key={index}>
            <TripItem distance={index + 1} TimeOfTravel={'00:00:00'} />
          </S.LI>
        ))}
      </S.UL>
    </>
  )
}

export default TripList
