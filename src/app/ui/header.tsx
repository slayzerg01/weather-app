import { SunIcon } from "@heroicons/react/24/solid";
import { ThemeSwitcher } from "./themeswitcher";

function Header() {
    return (
        <header className="dark:bg-zinc-800">
            <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 flex flex-row justify-between">
                <div className="flex">
                    <SunIcon className="h-10 w-10 mr-2 md:mr-5" />
                    <h1 className="text-sm md:text-3xl self-center text-center font-bold tracking-tight">Weather app</h1>
                </div>
                <ThemeSwitcher/>
            </div>
        </header>
    );
}

export default Header;
