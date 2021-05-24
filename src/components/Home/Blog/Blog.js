import React, { useState } from 'react';
import blogPic1 from '../../../resource/blog/javacript.png';
import blogPic2 from '../../../resource/blog/react.jpg';
import blogPic3 from '../../../resource/blog/javascrip interview.jpg';
import './Blog.css';

const Blog = () => {
    const [blogInfo] = useState([
        {
            img: blogPic1,
            blogTitle: 'Essential Concepts of JavaScript',
            blogLink: 'https://faria182550.medium.com/essential-concepts-of-javascript-b8153fe7ef2f',
        },
        {
            img: blogPic2,
            blogTitle: 'Fundamental Concepts of React',
            blogLink: 'https://faria182550.medium.com/fundamental-concepts-of-react-9465064b6147',
        },
        {
            img: blogPic3,
            blogTitle: 'JavaScript Tricky Concepts',
            blogLink: 'https://faria182550.medium.com/javascript-tricky-concept-e411f7a48ee5'
        }
    ])
    return (
        <div style={{ backgroundColor: '#fffaf0' }}>
            <div id="blog" className="container pt-lg-5 pt-5" style={{ overflowX: 'hidden' }}>
                <h1 className="text-center text-uppercase" >Blog</h1>
                <div className="row mt-5">
                    {
                        blogInfo.map(blog =>
                            <div className="col-lg-4 col-md-6 mb-sm-5 mb-5">
                                <div className="card blog">
                                    <img class="card-img-top blog-img" src={blog.img} alt="" />
                                    <div className="card-body">
                                        <h5 class="card-title font-weight-bold">{blog.blogTitle}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            style={{ textDecoration: 'none' }}
                                            href={blog.blogLink}
                                            target="_blank"
                                        >
                                            <button className="btn blog-btn btn-block">
                                                <span className="text-light">Read</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;