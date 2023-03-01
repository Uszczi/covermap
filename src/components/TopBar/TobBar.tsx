import { FaGithub } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="-ml-5 h-16 w-screen bg-gray-300 px-5 md:ml-0 md:px-0">
      <div className="container mx-auto flex h-full items-center justify-between">
        <h1 className="text-3xl font-bold">Cover Map</h1>

        <div className="flex items-center">
          <a href="https://github.com/Uszczi/covermap" rel="noreferrer">
            <FaGithub height={200} width={200} size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
