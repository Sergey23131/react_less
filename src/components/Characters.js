import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import {Character} from "./Character";
import {characterActions} from '../redux'
import {characterService} from "../services";

function Characters() {
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)


    useEffect(() => {
        characterService.getAll().then(value => value.data).then(value => dispatch(characterActions.setCharacters(value)))

    }, [])

    console.log(characters)

    return (
        <div className='Characters'>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }
        </div>
    );
}

export {Characters};
