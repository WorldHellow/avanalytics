import http from "./httpService";

const apiEndpoint = `/videos`;

export function getVideos() {
  return http.get(apiEndpoint);
}
