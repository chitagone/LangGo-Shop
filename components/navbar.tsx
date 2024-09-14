import Link from "next/link";
import Container from "./ui/container";
import NavbarActions from "./navbar-action";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  return (
    <div className=" bg-white shadow-sm">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="-ml-4 flex lg:ml-0 gap-x-2 items-center ">
            <Image
              src="https://res.cloudinary.com/dil9kylo3/image/upload/v1726311842/bjtxwmida5zukxlmqdhm.png"
              alt="Logo"
              width={120}
              height={100}
            />
            <h3 className="text-3xl font-cursive -ml-8">Chittagone</h3>
          </Link>

          <div className="mr-3">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
