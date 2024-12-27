import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Book App</div>
          <div className="space-x-4">
            <NavLink to="/books" className="hover:text-gray-400">
              Books
            </NavLink>
            <NavLink to="/add-book" className="hover:text-gray-400">
              Add Book
            </NavLink>
            <NavLink to="/add-author" className="hover:text-gray-400">
              Add Author
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100 p-4">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
