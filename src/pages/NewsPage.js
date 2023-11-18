import React from 'react';
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Categories from '../components/Categories';
import NewsList from '../NewsList';

const NewsPage = () => {
    const param = useParams()
    const category = param.category || 'all';

    return (
        <>
            <Categories/>
            <NewsList category={category}/>  
        </>
    );

}
export default NewsPage;