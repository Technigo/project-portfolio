// BlogCard.jsx

import { BlogImage } from './BlogImage.jsx'
import { BlogInfo } from './BlogInfo.jsx'
import { BlogButton } from './BlogButton.jsx'

export const BlogCard = ({ blog }) => {
  return (
    <div className="project-card">
      <BlogImage blog={blog} />
      <BlogInfo blog={blog} />
      <BlogButton />
    </div>
  )
}
