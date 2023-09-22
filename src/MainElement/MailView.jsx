import { Link, Outlet } from "react-router-dom";

const MailView = () => {
    return (
        <div>
            <section>
                <div className="flex justify-between items-center shadow-xl h-[100px] px-9">
                    <div>
                        <h3 className="text-3xl font-semibold">E-commerce-website</h3>
                    </div>
                    <div className="flex justify-around items-center gap-5">
                    
                        <Link to={'/'}>
                            <button className="btn btn-outline">Home</button>
                        </Link>
                        <Link to={'/about'}>
                            <button className="btn btn-outline">Product</button>
                        </Link>
                        <Link to={'/contact'}>
                            <button className="btn btn-outline">Contact</button>
                        </Link>
                        <Link to={'/more'}>
                            <button className="btn btn-outline">More Section</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Outlet></Outlet>
            <div className="">

                <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>

        </div>
    );
};

export default MailView;