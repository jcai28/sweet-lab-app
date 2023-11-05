

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold">
                    Give your life a little Sweet
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Order Now!
                </p>
                <div className="btn-container">
                    
                    <a href="#menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-35">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
                <img src={require("../asset/cake2.png")} alt="banner" className="max-h-13" />
            </div>
        </div>
    )
}

export default Banner;