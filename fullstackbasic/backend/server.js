import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content:
        "Chuck Norris can hermetically seal a can of whoop ass and disguise it as a trick or treat gift for his annoying neighborhood kids.",
    },
    {
      id: 2,
      content:
        "Chuck Norris frequently signs up for beginner karate classes so he can accidentally roundhouse kick kids in the neck.",
    },
    {
      id: 3,
      content:
        "Chuck Norris only keeps in touch with his first nine dozen kids - all the others around the world get a quarterly newsletter",
    },
    {
      id: 4,
      content:
        "When Chuck Norris action figures first came out they had a recall, because they were beating the shit out of little kids.",
    },
    {
      id: 5,
      content:
        "Chuck Norris once abandoned one of his kids when it was discovered he was allergic to the family dinosaur!",
    },
    {
      id: 6,
      content:
        "Chuck Norris' penis is so massive that kids lose baseballs and frisbees on it",
    },
    {
      id: 7,
      content:
        "The only thing that makes Chuck Norris fall asleep is the sound of his own laughter after he kills a kids family making them orphans.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
