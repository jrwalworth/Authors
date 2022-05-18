import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import {} from 'react-icons/fa';
import './AuthorList.css';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
        .then((res) => {
            console.log(res.data);
            setAuthors(res.data);
        })
        .catch((err) => console.log('Error getting authors', err));
        }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then((res) => {
            setAuthors(authors.filter(author => author._id != authorId));
        })
        .catch((err) => {
            console.log('Error', err);
        });
    };

    return (
        <>
            <Header 
            headerTitle={'Author List'}
            link={'/new'}
            linkText={'Add Author'}
            />
            <div className="container grid">
                {  authors &&
                    authors.map((author, index) => (
                        <div key={index} className="card m-3">
                            <h3 className="card-title">{author.name}</h3>
                            <Link to={`authors/${author._id}`}>Get quotes from {author.name}...</Link>
                            <div className="d-flex justify-content-between">
                                <div className="likes">
                                    <button>Likes</button>
                                </div>
                                <div>
                                <Link to={"/authors/edit/" + author._id} className="btn btn-sm btn-outline-dark m-1" >Edit</Link>
                                <button onClick={(e) => {deleteAuthor(author._id)}} className="btn btn-sm btn-outline-dark m-1" >Delete</button>
                                </div>
                                
                            </div>
                        </div>
                    )) 
                }

            </div> 
        
        </>
        
    )
};

export default AuthorList;