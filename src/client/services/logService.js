import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://97804bd422dc4d26bc1caada0299f8a8@sentry.io/5186162"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
