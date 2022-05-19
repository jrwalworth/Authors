import React, { useState, useEffect } from 'react';
import './Author.css';
import {useNavigate, useParams, Link} from 'react-router-dom';
import { FaThumbsUp, FaSortAlphaDown } from 'react-icons/fa';
import axios from 'axios';
import Embed from 'react-embed';
import Header from '../Header/Header';


const Author = (props) => {
    const [author, setAuthor] = useState({});
    const [likes, setLikes] = useState(0);
    const {authors, setAuthors} = props;
    const navigate = useNavigate();
    const {id} = useParams();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
        .then((res) => {
            // console.log(res.data);
            setAuthor(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
        .then((res) => {
            setAuthors(authors.filter(author => author._id !== authorId));
        })
        .catch((err) => {
            console.log('Error', err);
        });
    };

    const likeAuthor = (authorId) => {
        axios.put('http://localhost:8000/api/authors/' + authorId)
        .then((res) => {
            console.log('res', res);
            console.log('res.data', res.data);
            console.log('authordata', author.likes);
            setLikes(author.likes = author.likes + 1);
            //disable like button after click.
            navigate('/');
        })
        .catch((err) => console.log(err));
    };


    // const getQuotes = (props) => {
    //     const [quotes, setQuotes] = useState([]);
    //     const aName = author.name;
    //     console.log(aName);
    //     const formatAuthor = aName.replaceAll(' ', '+');
    //     console.log(formatAuthor)
    //     const url = `https://www.goodreads.com/search?q=${formatAuthor}&search%5Bsource%5D=goodreads&search_type=quotes&tab=quotes`
    //     axios(url)
    //     .then((res) => {
    //         const html = res.data;
    //         console.log(html);
    //     }).catch(err => console.log(err));
    // };
    // getQuotes();

    // const aName = author.name;
    // console.log(aName);
    // const formatAuthor = aName.replaceAll(' ', '+');
    // console.log(formatAuthor);
    // const url = `https://www.goodreads.com/search?q=${formatAuthor}&search%5Bsource%5D=goodreads&search_type=quotes&tab=quotes`;


    return (
        <>
            <Header 
            headerTitle={author.name}
            link={'/'}
            linkText={'Go Home'}
            />
            <div className="mt-3">
                <p>Quotes go here...</p>
                <div className="actions d-flex justify-content-between align-items-center">
                    <div className="likes d-flex justify-content-around align-items-center">
                        <span className="m-1">{likes}</span>
                        <FaThumbsUp className='like m-1' onClick={(e) => {likeAuthor(author._id)}}/>
                    </div>
                    <div>
                        <Link to={"/authors/edit/" + author._id} className="btn btn-sm btn-outline-dark m-1" >Edit</Link>
                        <button onClick={(e) => {deleteAuthor(author._id)}} className="btn btn-sm btn-outline-dark m-1" >Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Author;