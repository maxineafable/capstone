import { betterAuth } from "better-auth";
import { drizzleAdapter } from '@better-auth/drizzle-adapter/relations-v2';
import { db } from "@/db/index"; // your drizzle instance
import * as schema from '@/db/schema';
import { phoneNumber } from "better-auth/plugins"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema,
  }),
  plugins: [
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, ctx) => {
        // Implement sending OTP code via SMS
      },
      signUpOnVerification: {
        getTempEmail: (phoneNumber) => {
          return `${phoneNumber}@my-site.com`
        },
      }
    }),
  ],
});
