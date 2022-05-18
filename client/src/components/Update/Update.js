import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Update.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Form from '../Form/Form';


const Update = (props) => {
    const [editAuthor, setEditAuthor] = useState({
        name: '',
    });
    const [errors, setErrors] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setEditAuthor(res.data);
            
        })
        .catch((err) => console.log(err));
    }, [id]);


    const handleSubmitEdit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, editAuthor)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log('err.response=', err.response);
            console.log('err.response.data=', err.response.data);
            console.log('err.response.data.errors=', err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    };

    const onChangeHandler = (e) => {
        const newStateObject = {...editAuthor};
        newStateObject[e.target.name]  = e.target.value
        console.log('e.target.name = ', e.target.name);
        console.log('e.target.value =', e.target.value);
        setEditAuthor(newStateObject);
    };


    return (
        <>
            <Header 
                headerTitle={'Add Favorite Author'}
                link={'/'}
                linkText={'Home'}
            />
            <Form 
            handleSubmit={handleSubmitEdit} 
            author={editAuthor}
            errors={errors}
            buttonText={'Update Author'} 
            onChangeHandler={onChangeHandler} 
            />
    </>
    );
};

export default Update;