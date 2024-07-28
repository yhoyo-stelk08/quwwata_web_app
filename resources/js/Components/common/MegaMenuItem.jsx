import { Link } from "@inertiajs/react";

const MegaMenuItem = ({ title, description, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="block p-3 rounded-lg hover:bg-gradient-to-t hover:from-slate-500 hover:to-white transition-all duration-300 transform scale-100 hover:scale-110"
      >
        <div className="font-semibold text-slate-950">{title}</div>
        <span className="text-sm text-slate-900 text-opacity-50 dark:text-gray-400">
          {description}
        </span>
      </Link>
    </li>
  );
};
export default MegaMenuItem;
