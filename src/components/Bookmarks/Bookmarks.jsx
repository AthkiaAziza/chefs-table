

const Bookmarks = () => {
    return (
        <div className="mx-10 mt-10 border-2 rounded-xl w-[500px]">
            <div>
                <div className="overflow-x-auto">
                    <div>
                    <p className="text-center mt-5 text-[#282828] font-semibold text-xl">Want to cook: 01</p>
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
                                <td className="text-[#282828B3] text-base">Chicken Caesar Salad</td>
                                <td className="text-[#282828B3] text-base">20 minutes</td>
                                <td className="text-[#282828B3] text-base">400 calories</td>
                                <button className="btn bg-[#0BE58A] rounded-full mt-2">Preparing</button>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
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
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
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

export default Bookmarks;