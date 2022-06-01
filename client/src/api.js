/**
 * Create a function to reach out and grab your list of cities.
 */

export async function fetchCities() {
  const response = await fetch('/cities');
  const cities = await response.json();
  return cities;
}
