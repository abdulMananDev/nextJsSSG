import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    let time = setTimeout(() => {
      router.push("/");
      clearTimeout(time);
    }, 3000);
  }, []);
  return (
    <div className="grid-center">
      <Image
        className="animate-as"
        src="/astronaut404Page.svg"
        alt="404-img"
        width={200}
        height={300}
      />
      <h2>You Seem Lost BUZZ!</h2>
      <Link href="/">
        <a>Come Back</a>
      </Link>
      <a href="/Abdul Manan's Resume.pdf">Resume</a>
    </div>
  );
};
export default NotFound;
