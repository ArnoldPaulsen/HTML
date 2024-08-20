const vehicles = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2018,
    type: "sedan",
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2020,
    type: "sedan",
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2019,
    type: "truck",
  },
  {
    make: "Chevrolet",
    model: "Tahoe",
    year: 2021,
    type: "suv",
  },
  {
    make: "BMW",
    model: "X5",
    year: 2017,
    type: "suv",
  },
  {
    make: "Harley-Davidson",
    model: "Iron 883",
    year: 2019,
    type: "motorcycle",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    type: "suv",
  },
  {
    make: "Nissan",
    model: "Altima",
    year: 2016,
    type: "sedan",
  },
  {
    make: "Ram",
    model: "1500",
    year: 2020,
    type: "truck",
  },
  {
    make: "Ducati",
    model: "Monster",
    year: 2021,
    type: "motorcycle",
  },
];

//Part 1
// 1. Function to add a vehicle
function addVehicle(event) {
  event.preventDefault();
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const year = parseInt(document.getElementById('year').value);
  const type = document.getElementById('type').value;

  vehicles.push({ make, model, year, type });
  alert('Vehicle has been added successfully!');
}

// 2. Function to find the total number of vehicles
function getTotalVehicles() {
  const total = vehicles.length;
  document.getElementById('result').textContent = `Total Vehicles: ${total}`;
}

// 3. Function to calculate the average year
function getAverageYear() {
  const totalYears = vehicles.reduce((sum, vehicle) => sum + vehicle.year, 0);
  const average = Math.round(totalYears / vehicles.length);
  document.getElementById('result').textContent = `Average Year: ${average}`;
}

// Form validation and submission
document.getElementById('vehicleForm').addEventListener('submit', addVehicle);

// Part 4: Function to calculate total vehicles by type
function calculateTotalVehiclesByType() {
  const types = [];
  vehicles.forEach(vehicle => {
    if (!types.includes(vehicle.type)) {
      types.push(vehicle.type);
    }
  });
  
  const results = types.map(type => {
    const count = vehicles.filter(vehicle => vehicle.type === type).length;
    return `${type}: ${count}`;
  });

  document.getElementById('result').innerHTML = `Total Vehicles by Type:<br>${results.join('<br>')}`;
}



