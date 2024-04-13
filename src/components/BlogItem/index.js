// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <P className="blog-published-date">{publishedDate}</P>
      </div>
      <P className="description">{description}</P>
    </li>
  )
}

export default BlogItem
