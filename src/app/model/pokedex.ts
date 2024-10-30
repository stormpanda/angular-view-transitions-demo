export interface Pokedex {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: Region;
  version_groups: VersionGroup[];
}

export interface Description {
  description: string;
  language: Language;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  language: Language;
  name: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Region {
  name: string;
  url: string;
}

export interface VersionGroup {
  name: string;
  url: string;
}
