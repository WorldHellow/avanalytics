import http from "./httpService";

const apiEndpoint = `/common/celebrities`;

export function getCelebrities() {
  return http.get(apiEndpoint);
}
