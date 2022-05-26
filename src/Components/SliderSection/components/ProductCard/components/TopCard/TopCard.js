import React from 'react'
import styles from './styles'

const TopCard = ({ hasDiscount, imageUrl }) => {
  return (
    <styles.Wrapper>
      <styles.Image src={imageUrl} />
      {hasDiscount && (
        <>
          <styles.HighLight />
          <styles.Text>
            OFF
          </styles.Text>
        </>
      )}
    </styles.Wrapper>
  )
}

export default TopCard