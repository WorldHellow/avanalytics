import http from "./httpService";

const apiEndpoint = `/common/getDemoVideos`;

export function getVideos() {
  return http.get(apiEndpoint);
}
