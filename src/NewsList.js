import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from '../node_modules/axios/index';
import usePromise from './lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
    title : '제목',
    description : '내용',
    url : 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
};

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=70414065b47b4dedb2823a8b089b9a1b`);
    }
    , [category]);

    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!response){
        return null;
    }
    if(error){
        return <NewsListBlock>에러 발생</NewsListBlock>
    }
    
    
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;