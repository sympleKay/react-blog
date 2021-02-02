import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data:blog, isLoading, error} = useFetch(`http://localhost:8000/blogs/${id}`)
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE'
            })
            history.push('/');
        } catch (error) {
            console.log (error)
        }
    }
    return (
        <div className="blog-details">
            { isLoading && <h4>Fetching Blog</h4>}  
            { error && <h1>{error}</h1>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written by { blog.author } </p>
                    <p>{ blog.body }</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
