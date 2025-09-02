import React from 'react'
import './Blog.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import blog_data from '../../assets/blog_data.js'

const Blog = () => {
  return (
    <div id="blog" className='blog'>
      <div className="blog-title">
        <h1>Legal Blog</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="blog-container">
        {blog_data.map((blog, index) => {
          return (
            <div key={index} className='blog-flip-card'>
              <div className='blog-flip-card-inner'>
                {/* Front Side */}
                <div className='blog-flip-card-front'>
                  <h3>{blog.s_no}</h3>
                  <h2>{blog.s_name}</h2>
                  <p>{ blog.s_desc}</p>
                </div>
                {/* Back Side */}
                <div className='blog-flip-card-back'>
                  <p>{blog.s_stats}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog