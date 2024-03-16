import profile from '../../assets/images/Frame (9).png'
import profile2 from '../../assets/images/Frame 5 (1).png'
const Header = () => {
    return (
        <div>
            {/*nav section  */}
            <div className='flex justify-between mt-10 mx-10'>
                <p className='text-[#150B2B] font-bold text-3xl'>Recipe Calories</p>
                <div className='flex gap-4 text-[#150B2BB3] text-base'>
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label className='input input-bordered flex items-center gap-2 rounded-[50px] bg-[#150B2B0D] border-none'>
                            <img src={profile} alt="" />
                            <input type="text" className="text-[#150B2BB3] text-base" placeholder="Search" />
                        </label>
                    </div>
                    <img src={profile2} alt="" />
                </div>
            </div>
            {/* banner section */}
            <div className='mx-10 mt-10'>
                <div className="hero h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/njktd8Q/istockphoto-137737392-612x612.jpg)'}}>
                    <div className="hero-overlay bg-opacity-15"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full">
                            <h1 className="text-[#FFFFFF] font-bold text-5xl mb-10">Discover an exceptional cooking <br /> class tailored for you!</h1>
                            <p className="text-[#FFFFFF] text-sm mb-8">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                            <div className='items-center space-x-8'>
                            <button className="btn rounded-full bg-[#0BE58A] border-none">Explore Now</button>
                            <button className="rounded-full border-white btn-outline btn text-white">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;