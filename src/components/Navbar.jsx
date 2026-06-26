// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {

//   const navigate = useNavigate();

//   const role = localStorage.getItem("role");

//   const handleLogout = () => {

//     localStorage.removeItem("role");

//     navigate("/");
//   };

//   return (
//     <nav
//       className="
//       flex
//       justify-between
//       items-center
//       px-6
//       md:px-10
//       py-6
//       border-b
//       border-white/10
//       "
//     >

//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-white">
//         Smart Lead
//       </h1>

//       {/* Links */}
// <div className="hidden md:flex items-center gap-6 text-sm md:text-base">

//         <Link
//           to="/home"
//           className="text-gray-300 hover:text-white transition"
//         >
//           Home
//         </Link>

//         {/* ADMIN ONLY */}
//         {role === "ADMIN" && (
//           <>
//             <Link
//               to="/total-leads"
//               className="text-gray-300 hover:text-white transition"
//             >
//               Total Leads
//             </Link>

//             <Link
//               to="/request-service"
//               className="text-gray-300 hover:text-white transition"
//             >
//               Create Lead
//             </Link>

//             <Link
//               to="/all-leads"
//               className="text-gray-300 hover:text-white transition"
//             >
//               All Leads
//             </Link>

//             <Link
//               to="/providers"
//               className="text-gray-300 hover:text-white transition"
//             >
//               Providers
//             </Link>

//             <Link
//               to="/pending-leads"
//               className="text-gray-300 hover:text-white transition"
//             >
//               Pending Leads
//             </Link>

//             <Link
//               to="/analytics"
//               className="text-gray-300 hover:text-white transition"
//             >
//               Analytics
//             </Link>
//           </>
//         )}

//         {/* PROVIDER ONLY */}
//         {role === "PROVIDER" && (
//           <Link
//             to="/my-work"
//             className="
//             px-4
//             py-2
//             rounded-xl
//             bg-purple-500/10
//             border
//             border-purple-500/20
//             text-purple-400
//             hover:bg-purple-500/20
//             transition
//             "
//           >
//             My Work
//           </Link>
//         )}

//         {/* Logout */}
//         <button
//           onClick={handleLogout}
//           className="
//           px-4
//           py-2
//           rounded-xl
//           border
//           border-white/10
//           text-gray-300
//           hover:bg-white/5
//           hover:text-white
//           transition
//           "
//         >
//           Logout
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="border-b border-white/10 bg-[#0b0914] text-white">

      <div className="flex justify-between items-center px-6 md:px-10 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Smart Lead
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm md:text-base">

          <Link to="/home" className="text-gray-300 hover:text-white transition">
            Home
          </Link>

          {role === "ADMIN" && (
            <>
              <Link
                to="/total-leads"
                className="text-gray-300 hover:text-white transition"
              >
                Total Leads
              </Link>

              <Link
                to="/request-service"
                className="text-gray-300 hover:text-white transition"
              >
                Create Lead
              </Link>

              <Link
                to="/all-leads"
                className="text-gray-300 hover:text-white transition"
              >
                All Leads
              </Link>

              <Link
                to="/providers"
                className="text-gray-300 hover:text-white transition"
              >
                Providers
              </Link>

              <Link
                to="/pending-leads"
                className="text-gray-300 hover:text-white transition"
              >
                Pending Leads
              </Link>

              <Link
                to="/analytics"
                className="text-gray-300 hover:text-white transition"
              >
                Analytics
              </Link>
            </>
          )}

          {role === "PROVIDER" && (
            <Link
              to="/my-work"
              className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition"
            >
              My Work
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition"
          >
            Logout
          </button>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 space-y-4 bg-[#111827] border-t border-white/10">

          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Home
          </Link>

          {role === "ADMIN" && (
            <>
              <Link
                to="/total-leads"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                Total Leads
              </Link>

              <Link
                to="/request-service"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                Create Lead
              </Link>

              <Link
                to="/all-leads"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                All Leads
              </Link>

              <Link
                to="/providers"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                Providers
              </Link>

              <Link
                to="/pending-leads"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                Pending Leads
              </Link>

              <Link
                to="/analytics"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                Analytics
              </Link>
            </>
          )}

          {role === "PROVIDER" && (
            <Link
              to="/my-work"
              onClick={() => setMenuOpen(false)}
              className="text-purple-400"
            >
              My Work
            </Link>
          )}

          <button
            onClick={handleLogout}
            className="w-full rounded-xl border border-white/10 py-2 text-left pl-3 hover:bg-white/5"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;