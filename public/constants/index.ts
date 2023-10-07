import { randomUUID } from "crypto";
import { podImg1, podImg2, podImg3, podImg4, podImg5, podImg6 } from "../images";

const podcasts = [
  {
    title: "Selling a Business and Scaling Another Amidst Tragedy.",
    author: "Michele Hansen",
    image: podImg1,
    id: randomUUID(),
  },
  {
    title: "Mental health as a founder and the importance of community...",
    author: "James McKinven",
    image: podImg2,
    id: randomUUID(),
  },
  {
    title: "Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so",
    author: "Mahfuzul Nabil",
    image: podImg3,
    id: randomUUID(),
  },
  {
    title: "Selling a Business and Scaling Another Amidst Tragedy.",
    author: "Michele Hansen",
    image: podImg4,
    id: randomUUID(),
  },
  {
    title: "Mental health as a founder and the importance of community...",
    author: "James McKinven",
    image: podImg5,
    id: randomUUID(),
  },
  {
    title: "Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so",
    author: "Mahfuzul Nabil",
    image: podImg6,
    id: randomUUID(),
  },
];

export { podcasts };
