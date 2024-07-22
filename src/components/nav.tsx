import Link from "next/link"
import Theme from "./theme"
export default function Nav() {
   
    return (
        <nav className="flex justify-between  w-full px-4 py-2 border-b">
            <div className=" text-xl lg:text-3xl lg:tracking-widest font-medium font-mono flex-1  py-2 ">
                <Link href="/">
                    INTERVIEW PLAYBOOK
                </Link>
            </div>
            <div className=" py-2">
                <Theme />
            </div>
        </nav>
    )
}
