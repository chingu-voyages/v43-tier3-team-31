import React from "react";
import SidebarItem from "./SidebarItem";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function DashboardSidebar() {
  return (
    <aside className="w-64" aria-label="Sidenav">
      <div className="h-screen py-5 px-3 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <ul className="space-y-2">
          <li>
            <SidebarItem href="overview" iconName={faCoffee}>
              Overview
            </SidebarItem>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 "
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                All Posts
              </span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              <li>
                <SidebarItem href="posts" iconName={faCoffee}>
                  Posts
                </SidebarItem>
              </li>
              <li>
                <SidebarItem href="likes" iconName={faCoffee}>
                  Likes
                </SidebarItem>
              </li>
            </ul>
          </li>
          <li>
            <SidebarItem href="ingredient-list" iconName={faCoffee}>
              Ingredients list
            </SidebarItem>
          </li>
        </ul>

        <hr className="divide-x my-2" />

        <ul className="pt-5 mt-5 space-y-2">
          <li>
            <button
              type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white darkHover:bg-gray-700"
              aria-controls="dropdown-authentication"
              data-collapse-toggle="dropdown-authentication"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                Settings
              </span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-authentication" className="hidden py-2 space-y-2">
              <li>
                <SidebarItem href="profile" iconName={faCoffee}>
                  Profile
                </SidebarItem>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 darkHover:bg-gray-700 dark:text-white group"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">Guide</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
