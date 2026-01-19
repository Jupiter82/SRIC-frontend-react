import Link from "next/link"
import { FaPlus } from "react-icons/fa"

const Add_Form_Button = ({ title, path }) => {
    return (<>
        {/* <button className=" text-white text-sm bg-green-400 rounded-md px-3 py-2 mx-4 hover:bg-green-500 transition"> */}
        <Link href={path} className="inline-flex items-center text-white text-sm bg-green-400 rounded-md px-3 py-2 mx-4 hover:bg-green-500 transition">
            <FaPlus className="mr-2 text-sm" />
            Add New {title}
        </Link>
        {/* </button> */}
    </>)

}
export default Add_Form_Button