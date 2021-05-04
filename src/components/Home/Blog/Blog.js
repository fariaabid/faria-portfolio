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
            // blogLink: 'https://rezafset.medium.com/some-essential-concepts-of-javascript-90b69caca46',
        },
        {
            img: blogPic2,
            blogTitle: 'React Core Concepts',
            // blogLink: 'https://rezafset.medium.com/react-core-concepts-48444bb8904f',
        },
        {
            img: blogPic3,
            blogTitle: 'JavaScript Interview Question',
            // blogLink: 'https://rezafset.medium.com/some-important-tricky-concepts-of-javascript-affb664fe7a0'
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
                                            href='www.medium.com'
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