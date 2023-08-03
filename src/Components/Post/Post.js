function Post({value, userIDComment}) {
    let {address} = value
    /* let {mission_name, launch_year, links} = value
     let {mission_patch_small} = links
 */
    return (
        <div className="Post">
            {
                /*  <p>
                       MISSION NAME-{mission_name} <br/>
                       YEAR-{launch_year} <br/>
                       <img src={mission_patch_small} alt=""/>
                   </p>*/
                <p>
                    userDetails: id - {value.id} <br/>
                    name - {value.name} <br/>
                    userName - {value.username} <br/>
                    email - {value.email} <br/> <br/>
                    userAddress: street - {address.street}<br/>
                    city - {address.city}
                    <button onClick={()=>{
                        userIDComment(value.id)}
                    }>details</button>
                    <br/> <br/> <br/>

                </p>
            }
        </div>
    );
}

export default Post;
