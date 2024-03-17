import PropTypes from 'prop-types';

const Bookmark = ({ bookmarks, handleRemoveFromBookmark }) => {
    console.log(bookmarks)
    return (
        <div className="mx-10 mt-10 border-2 rounded-xl w-[500px]">
            <div>
                <div className="overflow-x-auto">
                    <div>
                        <p className="text-center mt-5 text-[#282828] font-semibold text-xl">Want to cook: {bookmarks.length}</p>
                        <div className="divider mx-10"></div>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[#878787] font-medium text-base">Name</th>
                                <th className="text-[#878787] font-medium text-base">Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookmarks.map((bookmark, idx) => <tr key={idx} className="bg-base-200">
                                    <th>1</th>
                                    <td className="text-[#282828B3] text-base">{bookmark.recipe_name}</td>
                                    <td className="text-[#282828B3] text-base">{bookmark.preparing_time}</td>
                                    <td className="text-[#282828B3] text-base">{bookmark.calories}</td>
                                    <button onClick={() => handleRemoveFromBookmark(bookmark.recipe_id)} className="btn bg-[#0BE58A] rounded-full mt-2">Preparing</button>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto">
                    <div>
                        <p className="text-center mt-5 text-[#282828] font-semibold text-xl">Currently cooking: 02</p>
                        <div className="divider mx-10"></div>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-[#878787] font-medium text-base">Name</th>
                                <th className="text-[#878787] font-medium text-base">Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td className="text-[#282828B3] text-base">Spaghetti Bolognese</td>
                                <td className="text-[#282828B3] text-base">30 minutes</td>
                                <td className="text-[#282828B3] text-base">600 calories</td>
                            </tr>
                            
                            <div>
                                <div>
                                    <p>Total Time =</p>
                                    <p>45 minutes</p>
                                </div>
                                <div>
                                    <p>Total Calories =</p>
                                    <p>1050 calories</p>
                                </div>
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;