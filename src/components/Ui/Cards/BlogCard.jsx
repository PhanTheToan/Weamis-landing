import Link from "next/link";
import ArrowRightIcon from "../Icon/ArrowRight";
import { Image } from "react-bootstrap";
const BlogCard = ({ post }) => {
  return (
    <div>
      <div className="single-post-item">
        <div className="post-thumbnail">
          <Image src={post?.image} alt="" />
        </div>
        <div className="post-content">
          <div className="post-meta">
            <div className="post-category">
              <Link href="">{post?.category}</Link>
            </div>
            <div className="post-date">{post?.date}</div>
          </div>
          <Link href={post?.link}>
            <h3 className="entry-title">{post?.title}</h3>
          </Link>
          <p>{post?.description}</p>
          <Link className="post-read-more" href={post?.link}>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
