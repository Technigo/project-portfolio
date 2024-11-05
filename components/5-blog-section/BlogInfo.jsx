// BlogInfo.jsx

export const BlogInfo = ({ blog }) => {
  return (
    <div className="project-info">
      <p className="date">{blog.date}</p>
      <h3 className="project-title">{blog.name}</h3>
      <p className="blog-description">{blog.description}</p>
    </div>
  )
}
