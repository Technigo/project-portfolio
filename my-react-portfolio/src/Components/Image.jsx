import { useState } from 'react'
import repoImages from './images-tags.json'
import './images.css'

export const Image = ({ items }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const repoImage = repoImages.find((img) => img.repoName === items.name)

  return (
    <div className="images">
      {repoImage && (
        <img
          src={isFlipped ? repoImage.imageFlipped : repoImage.imageUrl}
          alt={items.name}
          className={isFlipped ? 'flipped' : ''}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        />
      )}
    </div>
  )
}
