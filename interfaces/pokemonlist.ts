export interface Pokemon{
    name: string;
    url: string;
    id: number;
    image: string;
}

export interface PokemonResponse{
    count: number;
    next?: string;
    previous?: string | null;
    results: Pokemon[]
}
