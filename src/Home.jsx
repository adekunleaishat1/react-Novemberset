import { Bs0SquareFill,Bs3CircleFill } from "react-icons/bs";
import Firstimg from "./Images/customer-support.png"


const  Home = () => { 
    return(
        <div>
            <h1 className="text-[30px] text-[#fff] bg-gray-500">WELCOME TO REACT CLASS</h1>
            <Bs0SquareFill />
            <Bs3CircleFill />
           <img src={Firstimg} alt="" />
           <img src={require("./Images/customer-support.png")} alt="" />
        </div>
    )
}







export default Home