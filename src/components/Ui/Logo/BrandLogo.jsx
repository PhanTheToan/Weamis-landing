import Link from "next/link";
import { Image } from "react-bootstrap";
const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/weamis/logo.png";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    <div className="brand-logo">
      <Link href="/">
        <Image src={logoSrc} alt="" className="light-version-logo" />
      </Link>
    </div>
  );
};

export default BrandLogo;
