import React, { useState, useEffect } from 'react';
import './Author.css';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import Embed from 'react-embed';
import Header from '../Header/Header';

const Author = (props) => {
    const [author, setAuthor] = useState({});
    const {id} = useParams();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
        .then((res) => {
            // console.log(res.data);
            setAuthor(res.data);
        })
        .catch(err => console.log('Error', err));
    }, []);


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

    const aName = author.name;
    console.log(aName);
    const formatAuthor = aName.replaceAll(' ', '+');
    console.log(formatAuthor);
    const url = `https://www.goodreads.com/search?q=${formatAuthor}&search%5Bsource%5D=goodreads&search_type=quotes&tab=quotes`;


    return (
        <>
            <Header 
            headerTitle={author.name}
            link={'/'}
            linkText={'Go Home'}
            />
            <div className="mt-3">
                { formatAuthor &&
                    <Embed url={url}>test</Embed>
                }
                
            </div>

        </>
    );
};

export default Author;