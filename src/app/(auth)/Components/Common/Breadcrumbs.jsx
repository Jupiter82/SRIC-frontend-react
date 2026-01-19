import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Breadcrumbs = ({ title }) => {
    return (<>
        <div className="flex row gap-2 mx-4 my-4 text-blue-500">
            <Link href={"/profile"}>
                <h1 className="flex gap-2 ">
                    <FaHome className="text-xl" /> Home{" "}
                    <FaChevronRight className="my-1" />
                </h1>
            </Link>
            <h1 className="flex gap-2">
                Pages <FaChevronRight className="my-1" />
            </h1>
            <h1>{title} List</h1>
        </div>
    </>)
}
export default Breadcrumbs;