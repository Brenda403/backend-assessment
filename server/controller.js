gratitudes = [
  "My dog made me smile today",
  "I admire my parents for their grit and perseverance",
];
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A person is never too old to learn.",
      "Believe in yourself and others will too.",
      "Change is happening in your life, so go with the flow!",
      "Better ask twice than lose yourself twice",
      "You will always have good luck in your personal affairs.",
    ];
    let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomFortuneIndex];

    res.status(200).send(randomFortune);
  },
  getGratitudePrompt: (req, res) => {
    const prompts = [
      "What made you smile today?",
      "What is a small victory today?",
      "What three qualities do you admire about yourself?",
      "Who is someone in your life that you admire and why?",
      "What are three things you love about this time/stage in your life?",
    ];

    let randomPromptIndex = Math.floor(Math.random() * prompts.length);
    let randomPrompt = prompts[randomPromptIndex];

    res.status(200).send(randomPrompt);
  },
  collectGratitude: (req, res) => {
    const message = req.body.message;
    gratitudes.push(message);
    res.status(200).send(message);
  },
  displayGratitude: (req, res) => {
    res.status(200).send(gratitudes);
  },
};