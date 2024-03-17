import profile2 from '../../assets/images/Frame (10).png'
import profile3 from '../../assets/images/Frame (11).png'

const Recipe = ({ recipe, handleAddToBookmark }) => {
    const {recipe_name, image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className='mx-10 mt-10'>
                <div className="card w-96 bg-base-100 border-2 rounded-2xl">
                    <figure className="px-5 pt-5 w-full">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='px-4 space-y-3'>
                        <p className='mt-3 text-[#282828] font-semibold text-xl'>{recipe_name}</p>
                        <p className='text-[#878787] text-base'>{short_description}</p>
                        <div className='divider'></div>
                        <p className='text-[#282828] text-lg font-medium'>Ingredients: {ingredients.length}</p>
                        <ul>
                            {
                                ingredients.map((ingredient, idx) => <li key={idx} className='text-[#878787] text-lg'>. {ingredient}</li>)
                            }
                        </ul>
                        
                        <div className='divider'></div>
                        <div className='flex gap-3'>
                            <div className='flex'>
                                <img src={profile2} alt="" />
                                <p className='text-[#282828CC] text-base'>{preparing_time}</p>
                            </div>
                            <div className='flex'>
                                <img src={profile3} alt="" />
                                <p className='text-[#282828CC] text-base'>{calories}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleAddToBookmark(recipe)} className="btn bg-[#0BE58A] rounded-full mb-3">Want to Cook</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recipe;