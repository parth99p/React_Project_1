import React from "react";
import "../components/Home.css";
import dalfry from "../assets/dalfry.jpg";
import dalkhichdi from "../assets/dalkhichdi.jpg";
import friedrice from "../assets/friedrice.jpg";
import fries from "../assets/fries.jpg";
import meduvada from "../assets/meduvada.jpg";
import misalpav from "../assets/misalpav.jpg";
import momo from "../assets/momo.jpg";
import paneerchilly from "../assets/paneerchilly.jpg";
import paneercrispy from "../assets/paneercrispy.jpg";
import paneermasala from "../assets/paneermasala.jpg";
import puribhaji from "../assets/puribhaji.jpg";
import samosa from "../assets/samosa.jpg";
import sandwich from "../assets/sandwich.jpg";
import sevbhaji from "../assets/sevbhaji.jpg";
import tea from "../assets/tea.jpg";
import vadausal from "../assets/vadausal.jpg";
import vegbiryani from "../assets/vegbiryani.jpg";
import vegfriedrice from "../assets/vegfriedrice.jpg";
import vegnoodles from "../assets/vegnoodles.jpg";
import Card from "../components/Card";

const Home = ({cart, setCart}) => {

let cardData = [
  {
    id: 1,
    name : "Dalfry",
    image : dalfry,
    price : 80,
  },
  {
    id: 2,
    name : "Dalkhichdi",
    image : dalkhichdi,
    price : 120,
  },
  {
    id: 3,
    name : "Fried Rice",
    image : friedrice,
    price : 100,
  },
  {
    id: 4,
    name : "Fries",
    image : fries,
    price : 60,
  },
  {
    id: 5,
    name : "Meduvada",
    image : meduvada,
    price : 50,
  },
  {
    id: 6,
    name : "Misal Pav",
    image : misalpav,
    price : 150,
  },
  {
    id: 7,
    name : "Momo",
    image : momo,
    price : 120,
  },
  {
    id: 8,
    name : "Paneer Chilly",
    image : paneerchilly,
    price : 180,
  },
  {
    id: 9,
    name : "Paneer Crispy",
    image : paneercrispy,
    price : 200,
  },
  {
    id: 10,
    name : "Paneer Masala",
    image : paneermasala,
    price : 180,
  },
  {
    id: 11,
    name : "Puri Bhaji",
    image : puribhaji,
    price : 100,
  },
  {
    id: 12,
    name : "Samosa",
    image : samosa,
    price : 50,
  },
  {
    id: 13,
    name : "Sandwich",
    image : sandwich,
    price : 80,
  },
  {
    id: 14,
    name : "Sev Bhaji",
    image : sevbhaji,
    price : 120,
  },
  {
    id: 15,
    name : "Tea",
    image : tea,
    price : 20,
  },
  {
    id: 16,
    name : "Vada Saus",
    image : vadausal,
    price : 60,
  },
  {
    id: 17,
    name : "Veg Biryani",
    image : vegbiryani,
    price : 150,
  },
  {
    id: 18,
    name : "Veg Fried Rice",
    image : vegfriedrice,
    price : 120,
  },
  {
    id: 19,
    name : "Veg Noodles",
    image : vegnoodles,
    price : 100,
  }
];

return (
  <div>
    <Card cardData={cardData} cart={cart} setCart={setCart} />
  </div>
)
}

export default Home; 
