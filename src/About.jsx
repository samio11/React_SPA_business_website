
import { Link, useLoaderData } from "react-router-dom";

const About = () => {
    const { products } = useLoaderData();
    console.log(products)
    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
                products.map(Element => (
                    <div key={Element.id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={Element.images[0]} alt="Shoes" className="h-[200px]" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{Element.title}</h2>
                            <p className="text-xl">{Element.description}</p>
                            <div className="card-actions justify-center">
                               <Link to={`/product/${Element.id}`}>
                               <button className="btn btn-primary btn-wide">View More</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default About;