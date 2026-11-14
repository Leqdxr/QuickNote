import ratelimit from "../src/config/upstash.js";

export const rateLimiter = async (_, response, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return response.status(429).json({
        message: "Too many requests, please try again after a while",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit reached", error);
    next(error);
  }
};
