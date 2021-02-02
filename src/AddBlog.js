import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Michael');
    const [isSending, setIsSending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {title, body, author}
        setIsSending(true)
        const sendBlog = async () => {
            try {
                await fetch('http://localhost:8000/blogs', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(newBlog)
                })
                
            } catch (error) {
                console.log(error)
            }
        }
        sendBlog();
        history.push('/');
        setIsSending(false);
    }
    return (
        <div className="create">
            <h1>Add New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <label> Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange= { (e) => setTitle(e.target.value)}
                />
                <label> Body:</label>
                <textarea value={body} required onChange={(e) => setBody(e.target.value)}>
                    
                </textarea>

                <label> Author </label>
                <select value= {author} onChange= {(e) => setAuthor(e.target.value)}>
                    <option value="Michael">Michael</option>
                    <option value="Oluwakayode">Oluwakayode</option>
                </select>
                {!isSending && <button>Add Blog</button> }
                {isSending && <button disabled>Posting blog...</button>}
                {/* {!isSending ? <button>Add Blod</button> : <button>Sending</button>} */}
            </form>
        </div>
    )
}

export default AddBlog
