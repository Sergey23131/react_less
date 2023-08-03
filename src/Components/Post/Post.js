
function Post({value}) {

    let {mission_name, launch_year, links} = value
    let {mission_patch_small} = links

    return (
        <div className="Post">
            {
               <p>
                    MISSION NAME-{mission_name} <br/>
                    YEAR-{launch_year} <br/>
                    <img src={mission_patch_small} alt=""/>
                </p>

            }
        </div>
    );
}

export default Post;
