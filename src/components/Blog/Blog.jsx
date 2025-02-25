import { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';

const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(WORDPRESS_API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="blog-section">
      <h2 className="blog-heading">BLOG</h2>
      <div className="blog-heading-line"></div>

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.id} className="blog-post">
            <div className="blog-image">
              <img 
                src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150'} 
                alt={post.title.rendered} 
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title.rendered}</h3>
              <div className="blog-date">{new Date(post.date).toLocaleDateString()}</div>
              <p className="blog-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={post.link} className="read-more">
                Read more
                <span className="read-more-icon">
                  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                </span>
              </a>
            </div>
          </article>
        ))
      ) : (
        <p>No posts available.</p>
      )}

      <div className="blog-buttom-line"></div>
    </section>
  );
}

export default Blog;