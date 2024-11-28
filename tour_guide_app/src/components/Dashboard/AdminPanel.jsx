import { Link, NavLink, Outlet } from "react-router-dom";

function AdminPanel() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/users" },
    { name: "Tours Packeges", path: "add/tours/packages"},
    { name: "Bookings", path: "/bookings" },
    { name: "Financials", path: "/financials" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      <div class="flex h-screen bg-gray-100">
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
          <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
            Admin Panel
          </h2>
          <ul className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded ${isActive
                      ? "bg-gray-700 text-yellow-400 font-bold"
                      : "hover:bg-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div class="flex-1 p-6">
          <h1 class="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <p class="mt-4 text-gray-600">Welcome to your Tour App dashboard. Here’s a quick overview.</p>
          <Outlet/>
        </div>
        
      </div>


    </>
  );
}

export default AdminPanel;