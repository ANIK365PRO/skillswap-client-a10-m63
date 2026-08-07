import dns from "node:dns";

dns.setServers([
  "8.8.8.8",
  "8.8.4.4",
]);


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 

  database: mongodbAdapter(db, {
    client
  }),

  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET 
        }, 
  },
  
 trustedOrigins: [
    process.env.NEXT_PUBLIC_BASE_URL,
  ],

  // role base authentication to additional fields. 

  user: {
    additionalFields: {
      role: {
        defaultValue: 'client',
      },
      plan: {
        defaultValue: 'free',
      }
    }
  },

  // when user use google login, we can set the default role and plan for the user.
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              role: user.role || "client",
              plan: user.plan || "free",
            },
          };
        },
      },
    },
  },


});