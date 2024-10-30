export interface PokemonGeneration {
  abilities: any[];
  id: number;
  main_region: {
    name: string;
    url: string;
  };
  moves: {
    name: string;
    url: string;
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  pokemon_species: {
    name: string;
    url: string;
  }[];
  types: {
    name: string;
    url: string;
  }[];
  version_groups: {
    name: string;
    url: string;
  }[];
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other?: any;
  versions?: any;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PastType {
  generation: {
    name: string;
    url: string;
  };
  types: Type[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
}
