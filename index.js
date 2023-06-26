
import {config} from 'dotenv'
 import { Configuration, OpenAIApi } from "openai"
config()




// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)

// const response = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [
//     { role: "system", content: "You are a helpful assistant OF  BANK bai IN ANGOLA." },
//     { role: "user", content: "who is the presidente of the bank bai" },
//   ],
// })
// console.log(response.data.choices[0].message)



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "who is the presidente of the angola adn tell me more about him",

  temperature: 0,
})
console.log(response.data.choices[0].text)