import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.67147 1.02234 10.6393 0 13.695 0C16.7507 0 19.7185 1.02234 22.1261 2.90424C24.5336 4.7861 26.2423 7.4194 26.98 10.3847H23.922C23.2081 8.40618 21.9424 6.73515 20.2848 5.55878C18.6272 4.38241 16.6604 3.75033 14.645 3.75033C12.6296 3.75033 10.6628 4.38241 9.00521 5.55878C7.34761 6.73515 6.08194 8.40618 5.36805 10.3847H0.41ZM0 12.1538H5.52C6.3036 14.3181 7.72301 16.2196 9.59134 17.5853C11.4597 18.951 13.6833 19.7081 15.965 19.7081C18.2467 19.7081 20.4703 18.951 22.3387 17.5853C24.207 16.2196 25.6264 14.3181 26.41 12.1538H32C31.1522 15.4302 29.2556 18.3455 26.5926 20.5463C23.9295 22.7472 20.6331 24.1254 17.175 24.4885C13.7169 24.8516 10.2347 24.1841 7.31346 22.5914C4.39223 20.9986 2.1781 18.5831 0.998 15.7145C0.36095 14.1925 0 12.5425 0 10.8697V12.1538Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-12">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  to="/create-page"
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                >
                  + Create
                </Link>
              </li>
              <li>
                <Link
                  to="/edit-page"
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  to="/single-page"
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
