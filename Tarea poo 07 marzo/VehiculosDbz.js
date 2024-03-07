class VehiculoDragonBall {
  constructor(tipo, propulsor, combustible) {
    this.tipo = tipo;
    this.propulsor = propulsor;
    this.combustible = combustible;
  }
}

class NubeVoladora extends VehiculoDragonBall {
  constructor(combustible, velocidadMaxima) {
    super('Nube Voladora', 'Propulsor Mágico', combustible);
    this.velocidadMaxima = velocidadMaxima;
  }

  describir() {
    console.log(`La ${this.tipo} con propulsor ${this.propulsor} tiene una velocidad máxima de ${this.velocidadMaxima} y funciona con ${this.combustible}.`);
  }
}

class AutoVeloz extends VehiculoDragonBall {
  constructor(propulsor, combustible, velocidad) {
    super('Auto Veloz', propulsor, combustible);
    this.velocidad = velocidad;
  }

  describir() {
    console.log(`El ${this.tipo} con propulsor ${this.propulsor}, velocidad máxima ${this.velocidad}, funciona con ${this.combustible}.`);
  }
}

class NaveEspacial extends VehiculoDragonBall {
  constructor(propulsor, combustible, capacidad) {
    super('Nave Espacial', propulsor, combustible);
    this.capacidad = capacidad;
  }

  describir() {
    console.log(`La ${this.tipo} con propulsor ${this.propulsor}, capacidad ${this.capacidad}, funciona con ${this.combustible}.`);
  }
}

let nubeGoku = new NubeVoladora('Aire Puro', 'Ilimitada');
let autoVegeta = new AutoVeloz('Overdrive 2000', 'Combustible Saiyan', '350 km/h');
let naveFreezer = new NaveEspacial('Warp Drive', 'Combustible Frieza', '300 personas');

nubeGoku.describir();
autoVegeta.describir();
naveFreezer.describir();
