"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "~/components/Ui/Cards/BlogCard";
import CategoryCard from "~/components/Ui/Cards/CategoryCard";
import PostCard from "~/components/Ui/Cards/PostCard";
import TagCard from "~/components/Ui/Cards/TagCard";
import { Image } from "react-bootstrap";
const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./db/blogs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="row">
          <div div className="col-lg-8">
            {blogData.map((post) => (
              <BlogCard key={post?.id} post={post} />
            ))}
            <div class="zubuz-navigation">
              <nav class="navigation pagination" aria-label="Posts">
                <div class="nav-links">
                  <span aria-current="page" class="page-numbers current">
                    1
                  </span>
                  <Link class="page-numbers" href="">
                    2
                  </Link>
                  <Link class="next page-numbers" href="">
                    next
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="right-sidebar">
              <div class="widget">
                <div class="wp-block-search__inside-wrapper">
                  <input
                    type="search"
                    placeholder="Search..."
                    class="wp-block-search__input"
                  />
                  <button id="wp-block-search__button" type="submit">
                    <Image src="/images/icon/search.svg" alt="" />
                  </button>
                </div>
              </div>
              <CategoryCard />
              <PostCard />
              <TagCard />
              <div class="zubuz-blog-contact">
                <h3>How can we help you?</h3>
                <p>
                  We are here to help you! Tell us how we can help and we’ll get
                  in touch within next 24hrs
                </p>
                <Link href="">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
