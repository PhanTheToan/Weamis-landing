import Link from "next/link";
import ArrowRightIcon from "../Icon/ArrowRight";
import { Image } from "react-bootstrap";
const BlogCard = (title, category, image, date, link) => {
  return (
    <div className="col-xl-4 col-lg-6">
      <div className="zubuz-blog-wrap">
        <Link href={link}>
          <div className="zubuz-blog-thumb">
            <Image src={image} alt="" />
            <div className="zubuz-blog-categorie">{category}</div>
          </div>
        </Link>
        <div className="zubuz-blog-data">
          <p>{date}</p>
          <Link href={link}>
            <h3>{title}</h3>
          </Link>
          <Link href={link} className="zubuz-blog-btn">
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
