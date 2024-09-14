import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          © 2024 LangGo Store, Inc. All right reserved
        </p>
        <div className="flex justify-center gap-4 mt-4 font-cursive text-2xl">
          <a
            href="https://www.facebook.com/people/Chitagone-Inthavong/pfbid0381FPvJ8bcmikokZZyManWVtPNxWgktdV7GMzjXDY7Hzq5gyQcJSiwVaaqjqBxWuml/?mibextid=ZbWKwL"
            target="_blank"
            className="cursor-pointer"
          >
            Contact me
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-5">
          <a
            href="https://www.facebook.com/people/Chitagone-Inthavong/pfbid0381FPvJ8bcmikokZZyManWVtPNxWgktdV7GMzjXDY7Hzq5gyQcJSiwVaaqjqBxWuml/?mibextid=ZbWKwL"
            target="_blank"
          >
            <Image
              src="https://res.cloudinary.com/dil9kylo3/image/upload/v1726320071/xesod5zmhi7ywvlrm26z.png"
              alt="Face Book"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://res.cloudinary.com/dil9kylo3/image/upload/v1726321096/hmn2xzhb8wg6yxdfyeyh.jpg"
            target="_blank"
          >
            <Image
              src="https://res.cloudinary.com/dil9kylo3/image/upload/v1726320413/bdhi6d69dadrjsqesml6.png"
              alt="What App"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
