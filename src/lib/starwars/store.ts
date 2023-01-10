import { writable } from 'svelte/store'

export type starwarstype = {
    header: string[],
    rows: any[][],
    next: string,
    previous: string,
    fulldata: People,
}

const createStarWarsType = (header : string[], rows: any[][], next : string, previous : string, fulldata : Species | People | StarShips | Planets | Vehicles | Films) : starwarstype => {
    return {
        header,
        rows : rows,
        next : next,
        previous    : previous,
        fulldata   : fulldata,
        } as starwarstype
    }

export const people = writable( 
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as People)
)
export const ships = writable(
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as StarShips)
)
export const planets = writable(
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as Planets)
)
export const vehicles = writable(
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as Vehicles)
)
export const films = writable(
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as Films)
)
export const species = writable(
    createStarWarsType([] as string[], [] as any[][], '' as string, '' as string, {} as Species)
)

type People = {
    birth_year: string,
    eye_color: string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[],
}
type StarShips = {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    films: string[],
    pilots: string[],
    starship_class: string,
    url: string,
}
type Planets = {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: string[],
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: string[],
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string,
}
type Vehicles = {
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: string[],
    films: string[],
    url: string,
    vehicle_class: string,
}
type Films = {
    characters: string[],
    created: string,
    director: string,
    edited: string,
    episode_id: number,
    opening_crawl: string,
    planets: string[],
    producer: string,
    release_date: string,
    species: string[],
    starships: string[],
    title: string,
    url: string,
    vehicles: string[],
}
type Species = {
    average_height: string,
    average_lifespan: string,
    classification: string,
    created: string,
    designation: string,
    edited: string,
    eye_colors: string,
    hair_colors: string,
    homeworld: string,
    language: string,
    name: string,
    people: string[],
    films: string[],
    skin_colors: string,
    url: string,
}
function removeLastComma(strng: string) {
  var n = strng.lastIndexOf(',')
  if (n > 0) {
    return strng.substring(0, n)
  }
  return strng
}
export const peopleLoad = (data: any) => {
  let test = {}

  people.update(() => {
    let rows = data.results.map((person: People ) => {
      let ary = []
      ary.push(person.name)
      ary.push(person.height)
      ary.push(person.mass)
      ary.push(person.skin_color)
      ary.push(person.hair_color)
      return ary
    })
    let header = ['name', 'height', 'mass', 'skin_color', 'hair_color']
    let next = data.next
    let previous = data.previous
    return {
      header,
      rows,
      next,
      previous,
      fulldata: data,
    }
  })
}
export const shipsLoad = (data:any) => {
  ships.update(() => {
    let rows = data.results.map((ship: StarShips) => {
      let ary = []
      ary.push(ship.name)
      ary.push(ship.model)
      ary.push(ship.starship_class)
      return ary
    })
    let header = ['name', 'model', 'starship_class']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const planetsLoad = (data: any) => {
  planets.update(() => {
    let rows = data.results.map((planet: Planets) => {
      let ary = []
      ary.push(planet.name)
      ary.push(planet.rotation_period)
      ary.push(planet.diameter)
      ary.push(planet.climate)
      ary.push(planet.terrain)
      return ary
    })
    let header = ['name', 'rotation_period', 'diameter', 'climate', 'terrain']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const vehiclesLoad = (data:any) => {
  vehicles.update(() => {
    let rows = data.results.map((vehicle:Vehicles) => {
      let ary = []
      ary.push(vehicle.name)
      ary.push(vehicle.model)
      ary.push(vehicle.vehicle_class)
      return ary
    })
    let header = ['name', 'model', 'vehicle_class']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const filmsLoad = (data: any) => {
  films.update(() => {
    let rows = data.results.map((film: Films) => {
      let ary = []
      ary.push(film.title)
      ary.push(film.episode_id)
      ary.push(film.opening_crawl)
      return ary
    })
    let header = ['title', 'episode_id', 'opening_crawl']
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const speciesLoad = (data:any) => {
  species.update(() => {
    let rows = data.results.map((specie: Species) => {
      let ary = []
      ary.push(specie.name)
      ary.push(specie.classification)
      ary.push(specie.designation)
      ary.push(specie.average_height)
      ary.push(specie.language)
      return ary
    })
    let header = [
      'name',
      'classification',
      'designation',
      'average_height',
      'language',
    ]
    return {
      header,
      rows,
      next: data.next,
      previous: data.previous,
      fulldata: data,
    }
  })
}
export const getPage = (url:string) => {
  fetch(removeLastComma(url))
    .then((response) => response.json())
    .then((data) => {
      if (url.indexOf('people') !== -1) {
        peopleLoad(data)
      } else if (url.indexOf('starships') !== -1) {
        shipsLoad(data)
      } else if (url.indexOf('planets') !== -1) {
        planetsLoad(data)
      } else if (url.indexOf('vehicles') !== -1) {
        vehiclesLoad(data)
      } else if (url.indexOf('films') !== -1) {
        filmsLoad(data)
      } else if (url.indexOf('species') !== -1) {
        speciesLoad(data)
      }
    })
}
export const loadAll = () => {
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((data) => {
      peopleLoad(data)
    })
  fetch('https://swapi.dev/api/starships/')
    .then((response) => response.json())
    .then((data) => {
      shipsLoad(data)
    })
  fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((data) => {
      planetsLoad(data)
    })
  fetch('https://swapi.dev/api/vehicles/')
    .then((response) => response.json())
    .then((data) => {
      vehiclesLoad(data)
    })
  fetch('https://swapi.dev/api/films/')
    .then((response) => response.json())
    .then((data) => {
      filmsLoad(data)
    })
  fetch('https://swapi.dev/api/species/')
    .then((response) => response.json())
    .then((data) => {
      speciesLoad(data)
    })
}