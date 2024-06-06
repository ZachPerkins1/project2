export async function fetchTime() {
  const response = await fetch("http://localhost:3000/api/time");

  const data = await response.json();
  console.log(data);
  return data;
}


export async function fetchVacations() {
  const response = await fetch("http://localhost:3000/api/vacations");

  const data = await response.json();
  console.log(data);
  return data;
}