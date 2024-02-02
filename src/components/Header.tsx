import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
    function handleMobileMenu() {
        const sidebar = document.getElementById("sidebar");

        if (sidebar) {
            const isHidden = sidebar.classList.contains("hidden");
            sidebar.classList.toggle("hidden");

            sidebar.style.marginLeft = isHidden ? "16px" : "64px";
        }
    }

    return (
        <header className="bg-white dark:bg-neutral-900 p-10 lg:p-14 mx-4 xl:mx-16 mt-4 lg:mt-10 rounded-3xl shadow-xl border border-gray-200 dark:border-neutral-800">
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-6">
                    <IoMenuOutline onClick={handleMobileMenu}  className="xl:hidden w-8 h-8 dark:text-white"/>
                    <h1 className="font-semibold text-3xl dark:text-white">Jonathan<span className="text-blue-700 text-2xl font-bold">.Dev</span></h1>
                </div>
                <div className="hidden md:flex justify-between items-center gap-6 dark:text-white">
                    <a href="https://github.com/Joplay42" target="_blank">
                        <FaGithub className="w-8 h-8"/>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <IoLogoLinkedin className="w-10 h-10"/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;