import { SunIcon } from "@heroicons/react/24/solid";

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 flex">
                <SunIcon className="h-10 w-10 text-black mr-5" />
                <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">Weather app</h1>
            </div>
        </header>
    );
}

export default Header;
