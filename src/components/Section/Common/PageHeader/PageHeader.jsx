import Link from "next/link";

const PageHeader = ({ title, image_background}) => {
  return (
<div 
  className="zubuz-breadcrumb" 
  style={{
    backgroundImage: `url('${image_background}')`, // Update with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    // padding: "60px 0",
    position: "relative"
  }}
>
  {/* Add overlay for better text visibility */}
  <div 
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)" // Dark overlay
    }}
  />
  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <h1 className="post__title" style={{ color: "#fff" }}>{title}</h1>
    <nav className="breadcrumbs">
      {/* <ul>
        <li>
          <Link href="/" style={{ color: "#fff" }}>Home</Link>
        </li>
        <li aria-current="page" style={{ color: "#fff" }}>{" "}{title}</li>
      </ul> */}
    </nav>
  </div>
</div>
  );
};

export default PageHeader;
