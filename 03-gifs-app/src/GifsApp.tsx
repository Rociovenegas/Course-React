import { useState } from 'react';

import { GifList } from './gifs/components /GifList';
import { PreviousSearches } from './gifs/components /PreviousSearches';
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import type { Gif } from './gifs/interfaces/gif.interface';



export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>(mockGifs);

    const handleTermClicked = (term: string) => { console.log({ term }) };

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLocaleLowerCase();
        if (query.length == 0) return;

        if (previousTerms.includes(query)) return;

        //if (previousTerms.unshift(query) > 8) previousTerms.pop();  
        setPreviousTerms([query, ...previousTerms].splice(0, 4));

        setGifs(await getGifsByQuery(query));

    }

    return (
        <>
            {/* Header */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto"
            />

            {/* SearchBar */}
            <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

            {/* PreviousSearches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>

    );
};
