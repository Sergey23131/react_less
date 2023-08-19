import {CharacterPagination, Characters} from "../components";


function CharacterPage() {

    return (
        <div className="CharacterPage">
        <Characters/>
            <CharacterPagination/>
        </div>
    );
}

export {CharacterPage};
