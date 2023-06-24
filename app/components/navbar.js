import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">YourRecipe
            </Link>
            <Link href="/blog"className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog
            </Link>
            <Link href="/about"className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About
            </Link>
            {/* Add more navigation links here */}
          </div>
          {/* Add any additional elements like logo or user profile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
