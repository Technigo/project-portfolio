// BlogSection.jsx

import './BlogSection.css'
import data from './blogs.json'
import { BlogCard } from './BlogCard'

export const BlogSection = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">My journey</h2>
      <div className="project-container"> 
        {data.blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
