// BlogImage.jsx

export const BlogImage = ({ blog }) => {
  return (
    <div>
      <img src={blog.image} alt={blog.name} className="project-image" />
    </div>
  )
}
