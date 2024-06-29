import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  breadcrumbData: {
    typeOf: string;
    typeName: string;
  };
}

const Breadcrumb = ({ breadcrumbData }: BreadcrumbProps) => {
  return (
    <ul className="breadcrumb">
      <li>
        <Link to="/" className="flex items-center">
          <div className="me-3">
            <AiFillHome size={20} />
          </div>
          Home
        </Link>
      </li>
      <li>
        <BsChevronRight />
      </li>
      <li>
        <Link
          to={`recipes/${breadcrumbData.typeOf}/${breadcrumbData.typeName}`}
        >
          {breadcrumbData.typeOf} / {breadcrumbData.typeName}
        </Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
