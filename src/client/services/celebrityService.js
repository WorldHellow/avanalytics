import http from "./httpService";

const apiEndpoint = `/celebrities`;

export function getCelebrities() {
  return http.get(apiEndpoint);
}
