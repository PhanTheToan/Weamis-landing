const PortfolioFilterNav = ({ filterKey, handleFilterKeyChange }) => {
  return (
    <div className="zubuz-portfolio-menu">
      <ul
        id="watch-filter-gallery"
        className="option-set clear-both"
        data-option-key="filter"
      >
        <li
          className={filterKey === "*" ? "active" : ""}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        <li
          className={filterKey === "landingpage" ? "active" : ""}
          onClick={handleFilterKeyChange("landingpage")}
        >
          Landing Page
        </li>
        <li
          className={filterKey === "saas" ? "active" : ""}
          onClick={handleFilterKeyChange("saas")}
        >
          Website SaaS
        </li>
        <li
          className={filterKey === "ecommerce" ? "active" : ""}
          onClick={handleFilterKeyChange("ecommerce")}
        >
          Ecommerce
        </li>
        {/* <li
          className={filterKey === "branding" ? "active" : ""}
          onClick={handleFilterKeyChange("branding")}
        >
          Branding
        </li>
        <li
          className={filterKey === "wifi" ? "active" : ""}
          onClick={handleFilterKeyChange("wifi")}
        >
          Wifi Marketing
        </li>
        <li
          className={filterKey === "chuyendoiso" ? "active" : ""}
          onClick={handleFilterKeyChange("chuyendoiso")}
        >
          Chuyển đổi số
        </li>
        <li
          className={filterKey === "ai" ? "active" : ""}
          onClick={handleFilterKeyChange("ai")}
        >
          Chatbot - WeAI
        </li>
        <li
          className={filterKey === "VR" ? "active" : ""}
          onClick={handleFilterKeyChange("VR")}
        >
          Ứng dụng VR
        </li> */}
      </ul>
    </div>
  );
};

export default PortfolioFilterNav;
