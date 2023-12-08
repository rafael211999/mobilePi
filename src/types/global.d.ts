export { };

declare global {
    // Declare module for PNG files
    module '*.png';

    // Declare module for JPG files
    module '*.jpg';

    type PokemonType = {
        type: {
            name: string;
            url: string;
        };
    };

    type Pokemon = {
        id?: number;
        name: string;
        url: string;
        types?: PokemonType[];
    };
}