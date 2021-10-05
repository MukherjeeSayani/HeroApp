export interface IVehicle {
  id: number;
  uid: string;
  vin: string;
  make_and_model: string;
  color: string;
  transmission: string;
  drive_type: string;
  fuel_type: string;
  car_type: string;
  car_options: string[];
  specs: string[];
  doors: number;
  mileage: number;
  kilometrage: number;
  license_plate: string;
 }



  export interface Powerstats {
      intelligence: string;
      strength: string;
      speed: string;
      durability: string;
      power: string;
      combat: string;
  }

  export interface Biography {
      fullName: string;
      alterEgos: string;
      aliases: string[];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
  }

  export interface Appearance {
      gender: string;
      race: string;
      height: string[];
      weight: string[];
      eyeColor: string;
      hairColor: string;
  }

  export interface Work {
      occupation: string;
      base: string;
  }

  export interface Connections {
      groupAffiliation: string;
      relatives: string;
  }

  export interface Image {
      url: string;
  }

  export interface RootObject {
      response: string;
      id: string;
      name: string;
      powerstats: Powerstats;
      biography: Biography;
      appearance: Appearance;
      work: Work;
      connections: Connections;
      image: Image;
  }


