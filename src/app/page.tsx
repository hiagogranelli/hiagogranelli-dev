import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>hi, I&apos;m Hiago</h1>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/hiagogranelli/" target="_blank">
          <FaLinkedinIn />
        </Link>
        <Link href="https://github.com/hiagogranelli" target="_blank">
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}
