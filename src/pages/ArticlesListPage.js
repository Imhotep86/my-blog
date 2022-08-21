import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
    // React fragment below
    <>
    <h1>Articles</h1>
    <ArticlesList  articles={articleContent}/>
    </>
);

export default ArticlesListPage;