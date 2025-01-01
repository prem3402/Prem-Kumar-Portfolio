import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#Experience" },
  { name: "Projects", href: "#Projects" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-navy fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="#">
                {" "}
                <b> Prem Kumar S </b>
              </a>
            </div>
            <div className="hidden sm:ml-1 sm:flex sm:space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-green text-white" : "text-white",
                    "rounded-md px-3 py-2 text-sm font-medium text-semibold"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:prem093402@gmail.com"
              className="text-white hover:text-white"
            >
              <MailRoundedIcon style={{ fontSize: "20px" }} />
            </a>
            <a
              href="https://github.com/prem3402"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: "20px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/prem-kumar-s-6ba57b233/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "21px" }} />
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
