export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    const personas = [...this.members];
    for (const persona of personas) {
      yield persona;
    }
  }

  add(persona) {
    if (!this.members.has(persona)) {
      this.members.add(persona);
    } else {
      throw new Error('Персонаж уже добавлен');
    }
  }

  addAll(...personas) {
    personas.forEach((persona) => this.members.add(persona));
  }

  toArray() {
    return [...this.members];
  }
}
