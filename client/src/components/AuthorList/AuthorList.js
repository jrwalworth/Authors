import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
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

    return (
        <>
            <div>Author List</div>
            <div className="container grid">
                {  authors &&
                    authors.map((author, index) => (
                        <div key={index} className="card m-3">
                            <h3 className="card-title">{author.name}</h3>
                            <Link to={`authors/${author._id}`}>{author.name} quotes...</Link>
                            <div>
                            <Link to={"/authors/edit/" + author._id} className="btn btn-sm btn-outline-dark m-1" >Edit</Link>
                            <button onClick={(e) => {}} className="btn btn-sm btn-outline-dark m-1" >Delete</button>
                            </div>
                        </div>
                    )) 
                }

            </div> 
        
        </>
        
    )
};

export default AuthorList;