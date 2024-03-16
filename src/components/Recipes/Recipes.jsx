import profile from '../../assets/images/Caesar-Salad-768x512.webp'
import profile2 from '../../assets/images/Frame (10).png'
import profile3 from '../../assets/images/Frame (11).png'

const Recipes = () => {
    return (
        <div>
            <div className='mx-10 mt-10 grid grid-cols-2 gap-6'>
                <div className="card w-96 bg-base-100 border-2 rounded-2xl">
                    <figure className="px-5 pt-5 w-full">
                        <img src={profile} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='px-4 space-y-3'>
                        <p className='mt-3 text-[#282828] font-semibold text-xl'>Spaghetti Bolognese</p>
                        <p className='text-[#878787] text-base'>Classic Italian pasta dish with savory meat sauce.</p>
                        <div className='divider'></div>
                        <p className='text-[#282828] text-lg font-medium'>Ingredients: 6</p>
                        <p className='text-[#878787] text-lg'>. 500g ground beef</p>
                        <p className='text-[#878787] text-lg'>. 1 onion, chopped</p>
                        <p className='text-[#878787] text-lg'>. 2 cloves garlic, minced</p>
                        <div className='divider'></div>
                        <div className='flex gap-3'>
                            <div className='flex'>
                                <img src={profile2} alt="" />
                                <p className='text-[#282828CC] text-base'>30 minutes</p>
                            </div>
                            <div className='flex'>
                                <img src={profile3} alt="" />
                                <p className='text-[#282828CC] text-base'>600 calories</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn bg-[#0BE58A] rounded-full mb-3">Want to Cook</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 border-2 rounded-2xl">
                    <figure className="px-5 pt-5 w-full">
                        <img src={profile} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='px-4 space-y-3'>
                        <p className='mt-3 text-[#282828] font-semibold text-xl'>Spaghetti Bolognese</p>
                        <p className='text-[#878787] text-base'>Classic Italian pasta dish with savory meat sauce.</p>
                        <div className='divider'></div>
                        <p className='text-[#282828] text-lg font-medium'>Ingredients: 6</p>
                        <p className='text-[#878787] text-lg'>. 500g ground beef</p>
                        <p className='text-[#878787] text-lg'>. 1 onion, chopped</p>
                        <p className='text-[#878787] text-lg'>. 2 cloves garlic, minced</p>
                        <div className='divider'></div>
                        <div className='flex gap-3'>
                            <div className='flex'>
                                <img src={profile2} alt="" />
                                <p className='text-[#282828CC] text-base'>30 minutes</p>
                            </div>
                            <div className='flex'>
                                <img src={profile3} alt="" />
                                <p className='text-[#282828CC] text-base'>600 calories</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn bg-[#0BE58A] rounded-full">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;