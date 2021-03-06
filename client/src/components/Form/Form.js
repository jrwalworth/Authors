import { Link, useNavigate } from 'react-router-dom';
import './Form.css'

const Form = (props) => {
    const {handleSubmit, onChangeHandler, author, errors, buttonText} = props;
    // const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    return (
        <div>
            <form onSubmit={handleSubmit} className="Form">
            { errors.name && <span className='errors'>{errors.name.message}</span>}
                <section className='input-area d-flex align-items-center'>
                    <label  className='form-label col-3' htmlFor="name">Author Name</label>
                    <input className="form-control m-4" type="text" value={author.name} name='name' onChange={onChangeHandler}/>
                </section>
                <Link to='/' className="btn btn-primary mt-3 me-3">Cancel</Link>
                <input type="submit" value={buttonText} className="btn btn-primary mt-3" />
            </form>
        </div>
    )
}

export default Form