export const NODE_ENV = process.env.NODE_ENV!;
export const IS_PRODUCTION = NODE_ENV === "production";
export const API_ENDPOINT = true
  ? `https://api.weybridge.ae/api/v1`
  : `http://localhost:3500/api/v1`;

const TEST_PHONE_NUMBER_ID = "636149276241458";

export const META_GRAPH_ENDPOINT = `https://graph.facebook.com/v22.0/${TEST_PHONE_NUMBER_ID}/messages`;
