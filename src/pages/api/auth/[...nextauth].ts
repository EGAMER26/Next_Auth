import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
providers: [
  GithubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),
  CredentialsProvider({
    name: "nextAuthCredentials",
    credentials: {},
    async authorize(credentials) {
      console.log('credentials', credentials)

      return {
        name: "Evandro Gomes",
        email: "evandrogomes542@gmai.com",
        image: "https://github.com/egamer26.png",
      }
    }
  })
],
secret: process.env.SECRET,
})