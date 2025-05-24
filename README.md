# dicee

A TypeScript utility library for handling dice operations with support for custom sides and dice sets.

## Features

- Create individual dice with custom sides
- Manage sets of dice with synchronized operations
- Roll dice with optional exclusions
- Find matching dice by side or number
- Calculate sums and get specific dice subsets
- Type-safe implementation with TypeScript

## Basic Usage

```typescript
import { Die, DiceSet } from "dicee";

// Create a standard 6-sided die
const standardDie = new Die([1, 2, 3, 4, 5, 6]);

// Create a set of 3 dice with custom sides
const customSides = ["red", "blue", "green", "yellow"];
const diceSet = new DiceSet(3, customSides);

// Roll all dice in the set
const rolledDice = diceSet.roll();

// Get current sides of all dice
const currentSides = diceSet.sides;
```

## API

The library provides several utility functions:

- `fromSides`: Create dice from an array of sides
- `getDiceToRoll`: Get dice that need to be rolled
- `hasSameBySide`: Check if dice have matching sides
- `getSum`: Calculate the sum of dice values
- `getSides`: Get all sides from a set of dice
- `getSameBySide`: Find dice with matching sides
- `getRest`: Get remaining dice after excluding specific ones
- `getSameByNumber`: Find dice with matching numbers

## Types

The library includes several core types:

- `Die`: Represents a single die with multiple sides
- `DiceSet`: Manages a collection of dice with synchronized operations
- `Sides`: Type for defining possible sides of a die

## Installation

```bash
npm install dicee
```

## License

MIT
