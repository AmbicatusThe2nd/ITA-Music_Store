import Item from "../item/Item";
import { GetAllItems } from "../../../services/ItemService";
import { useEffect, useState } from "react";
import CartContextProvider from "../../../context/Store";
import { Link } from "react-router-dom";



const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        GetAllItems().then((result) => {
            setItems(result.items);
        })
    }, [])

    return (
        <div className="home">
            <div className="mt-10 text-3xl mx-auto max-w-6xl">
                <section className="bg-white py-8">

                    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                                <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                    Store
                                </a>

                                <div className="flex items-center" id="store-nav-content">

                                    <Link className="pl-3 inline-block no-underline hover:text-black" to="/cart">
                                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                                            <circle cx="10.5" cy="18.5" r="1.5" />
                                            <circle cx="17.5" cy="18.5" r="1.5" />
                                        </svg>
                                    </Link>

                                    <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </nav>
                        {
                            items.map((item, index) => {
                                return (
                                    <CartContextProvider key={index}>
                                        <Item
                                            key={index}
                                            product={item}
                                            link={'#'}
                                        />
                                    </CartContextProvider>
                                )
                            })
                        }

                    </div>

                </section>
            </div>
        </div>
    )
}

export default Home;