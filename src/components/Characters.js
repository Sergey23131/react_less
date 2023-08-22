import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import {Character} from "./Character";
import {characterActions} from '../redux'
import {characterService} from "../services";
import {useSearchParams} from "react-router-dom";

function Characters() {
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])

    useEffect(() => {
        characterService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(characterActions.setCharacters(value)))

    }, [query])

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
