import React from 'react';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Header from '../Header/Header';
import { FaThumbsUp, FaSortAlphaDown } from 'react-icons/fa';
import './AuthorList.css';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);
    const {author, likes, setLIkes} = props;
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
        .then((res) => {
            console.log(res.data);
            setAuthors(res.data);
            // setLikes(...AuthorList, res.data);
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


    const handleSort = () => {
        const sortedAuthors = [...authors].sort((a,b) => {
            return a.name > b.name ? 1 : -1
        });
        setAuthors(sortedAuthors);
    };


    return (
        <>
            <Header 
            headerTitle={'Author List'}
            link={'/new'}
            linkText={'Add Author'}
            />
            <div className="sort">
                <FaSortAlphaDown onClick={handleSort} className='sort'>
                    <span className="sort-tooltip">Click to sort authors</span>
                </FaSortAlphaDown>
            </div>
            
            <div className="container grid">
                {  authors &&
                    authors.map((author, index) => (
                        <div key={index} className="card">
                            <h3 className="card-title">{author.name}</h3>
                            <Link to={`authors/${author._id}`}>View {author.name} Details...</Link>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="likes d-flex justify-content-around align-items-center">
                                    <span className="m-1">{likes}</span>
                                    <FaThumbsUp className='like m-1'/>
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