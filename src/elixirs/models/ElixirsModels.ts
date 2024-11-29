export interface ElixirDifficulty {
  Unknown: "Unknown";
  Advanced: "Advanced";
  Moderate: "Moderate";
  Beginner: "Beginner";
  OrdinaryWizardingLevel: "OrdinaryWizardingLevel";
  OneOfAKind: "OneOfAKind";
}

export type ElixirDifficultyType =
  | "Unknown"
  | "Advanced"
  | "Moderate"
  | "Beginner"
  | "OrdinaryWizardingLevel"
  | "OneOfAKind";

export interface Ingredient {
  id: string;
  name: string | null;
}

export interface ElixirInventor {
  id: string;
  firstName: string | null;
  lastName: string | null;
}

export interface Elixir {
  id: string;
  name: string;
  effect: string | null;
  sideEffects: string | null;
  characteristics: string | null;
  time: string | null;
  difficulty: ElixirDifficultyType;
  ingredients: Ingredient[] | null;
  inventors: ElixirInventor[] | null;
  manufacturer: string | null;
}
