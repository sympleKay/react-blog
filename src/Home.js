import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {isLoading && <h4>Blogs loading...</h4>}
            {blogs && <BlogList blogs={blogs} title= "All Blog Post" />}
            {error && <h1>{error}</h1>}
        </div>
     );
}
 
export default Home;