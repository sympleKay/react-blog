import { Link } from 'react-router-dom';
const BlogList = ( {blogs, title} ) => {

    return (
        <div>
            <h1>{title}</h1>
            {blogs.map((blog) => (
               <div className="blog-preview" key=  {blog.id}> 
                    <Link to={`/blogpost/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Author: {blog.author}</p>
                    </Link>
                </div>
            ))} 
        </div>
    )
}

export default BlogList
