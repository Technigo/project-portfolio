import { useState } from 'react'
import repoImages from '../project-images.json'
import './images.css'

export const Image = ({ items }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  // matching the pictures based on repository name and JSON file repoName key's value
  const repoImage = repoImages.find((img) => img.repoName === items.name)

  return (
    <div className="images">
      {repoImage && (
        <img
          // change picture on event mouseHover
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
