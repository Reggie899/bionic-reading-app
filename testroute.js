import express from "express";
import dotenv from 'dotenv';
dotenv.config();


const router = express.Router();
// import bionicReading from "bionic-reading";

import axios from "axios";



const encodedParams = new URLSearchParams();
encodedParams.append(
  "content",
  "Hello there! This is me. My journey as a web developer started at the beginning of 2020 when a friend of mine suggested I start learning how to create my own apps and projects after I kept telling him what I would change on different apps and websites... pretty much all the time. I am sure he just didn’t want to listen to my rants anymore. This kicked off a series of events and now I am here and you are reading this. That is the best example of how a thought becomes action and changes your life. Before becoming a web developer I got a degree in Sociology and worked in different roles in the social and cultural exchange field. I started out as an assistant, then moved on to being a coordinator and team lead to later becoming a counselor. It has been a great adventure that has equipped me with a lot of experience and trained me to see the big picture. I kicked off my web development journey by learning about different online training programs and decided to start learning coding with SheCodes. Quickly, I was captivated by all the things I was able to do and create and decided to enter the web development program of the DCI that teaches web development in depth and qualifies me as a full stack developer. This is where I am currently enrolled until December 2022. I am striving to create fun and interactive experiences for websites and apps users. These experiences can be heartwarming, inspiring, exciting, dreamy, ...you name it. If you are looking for exactly that, feel welcome to contact me. Let’s come up with a tailor made product for you and make it happen. I am looking forward to working with you."
);
encodedParams.append("response_type", "html");
encodedParams.append("request_type", "html");
encodedParams.append("fixation", "1");
encodedParams.append("saccade", "10");


const options = {
  method: "POST",
  url: "https://bionic-reading1.p.rapidapi.com/convert",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": `${process.env.KEY}`,
    "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
  },
  data: encodedParams,
};
let dataResult = "ll";
axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    dataResult = response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
console.log(dataResult);

export const hello = (req, res) => {
  res.status(200).json("dataResult");
};

router.get("/hello", hello);

//POST

router.post("/post", async (req, res) => {
  // if (/^[A-Za-z0-9]*$/.test(req.body.msg.newWord)) {
  console.log("Got body:", req.body);
  // console.log("!!!!!!", /^[A-Za-z0-9]*$/.test(req.body.msg.newWord));
  const encodedParams = new URLSearchParams();
  encodedParams.append("content", req.body.msg.newWord);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");
  encodedParams.append("fixation", "1");
  encodedParams.append("saccade", "10");

  const options = {
    method: "POST",
    url: "https://bionic-reading1.p.rapidapi.com/convert",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `${process.env.KEY}`,
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    data: encodedParams,
  };
  let dataResult = "doin";
  // if (/^[A-Za-z0-9]*$/.test(req.body.msg.newWord)) {
  try {
    axios.request(options).then(function (response) {
      console.log(response.data);
      dataResult = response.data;
      console.log(dataResult);
      res.status(200).json(dataResult);
    });
  } catch {
    (function (error) {
      console.error(error);
    });
  }
  // if (importData[0].noun.indexOf(req.body.msg.newWord) === -1) {
  //   importData[0].noun.push(req.body.msg.newWord);
  // } else {
  //   res.json({ message: ` ${req.body.msg.newWord} already exists!` });
  // }
  // }
  // else {
  //   dataResult = {
  //     data: "No content"
  //   }
  //   res.status(200).json(dataResult);
  // }
});



export default router;
