import { Link } from "react-router-dom";
import Icon from "./Icon";
import TotalItem from "../pages/shopping-card/TotalItems";

const NavLink = ({
  url,
  text,
  icon,
  isActive,
}: {
  url: string;
  text: string;
  icon: string;
  isActive: boolean;
}) => {
  return (
    <Link
      to={url}
      className={`flex justify-center items-center border rounded px-2 py-1 ${
        isActive ? "bg-ada-purple text-light-purple" : " text-ada-purple"
      }`}
    >
      <li className="flex justify-center items-center gap-2 relative">
        {text}
        <Icon height={20} width={20} src={icon} />

        {text === "سبد خرید" ? (
          <div className="absolute bottom-[100%] left-[100%] w-4 h-4 rounded-full bg-pinky flex justify-center items-center">
            <TotalItem />
          </div>
        ) : (
          ""
        )}
      </li>
    </Link>
  );
};

export default NavLink;
