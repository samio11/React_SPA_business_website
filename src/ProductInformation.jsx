import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductInformation = () => {
    const achivedData = useLoaderData();
    const {brand,category,description,price,title,thumbnail} = achivedData
    const callData = () =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around items-center h-[70%]">
           <div className="flex-1">
               <img src={thumbnail} alt="" className="h-[500px]"/>
           </div>
           <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-xl">Brand Name:- {brand}</p>
                <p className="text-xl">Type:- {category}</p>
                <p className="text-xl">About:- {description}</p>
                <p className="text-xl">Price:- {price}$</p>
                <div className="flex justify-center items-center gap-7">
                <Link to={'/about'}>
                    <button className="btn btn-primary">Go Home</button>
                </Link>
                <button onClick={callData} className="btn btn-primary">Purchase</button>
                </div>
           </div>
        </div>
    );
};

export default ProductInformation;