import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import './AddAuthor.css';
import Header from '../Header/Header';
import Form from '../Form/Form';

const AddAuthor = (props) => {
    const { author } = props;
    const [newAuthor, setNewAuthor] = useState({
        name: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleSubmitNew = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log('err.response=', err.response);
            console.log('err.response.data=', err.response.data);
            console.log('err.response.data.errors=', err.response.data.error);
            setErrors(err.response.data.errors);
        });
    };

    const onChangeHandler = (e) => {
        const newStateObject = {...newAuthor};
        newStateObject[e.target.name]  = e.target.value
        console.log('e.target.name = ', e.target.name);
        console.log('e.target.value =', e.target.value);
        setNewAuthor(newStateObject);
    };
    
    return (
        <>
            <Header 
                headerTitle={'Add Favorite Author'}
                link={'/'}
                linkText={'Home'}
            />
            <Form 
            handleSubmit={handleSubmitNew} 
            author={newAuthor}
            errors={errors}
            buttonText={'Add Author'} 
            onChangeHandler={onChangeHandler} />
        </>
            
    )
};

export default AddAuthor;