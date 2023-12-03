import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HomePageCarousel from "./HomePageCarousel";
import ServicesCategory from "../ServicesCategory";
import styles from "../../StyleComponents/Home.module.css";
import HomePageNav from "./HomePageNav";
const cardData = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    service: "Appliance Repair",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
    service: "Home Painting",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    service: "Cleaning & Pest",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png",
    service: "Disinfection",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    service: "Home Repair",
  },
];
const newCategoryLaunches = [
  {
    logo: "https://images.unsplash.com/photo-1616610269931-04d58b579ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFib3VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    services: "Labour Hire",
    text: "from INR 300",
  },
  {
    logo: "https://media.istockphoto.com/id/155352066/photo/indian-engineer-architect-on-construction-site.jpg?s=612x612&w=0&k=20&c=d-TVcLrZMBPCqgHOuGB0oNnhR_iwmL2n-Jowyie28TY=",
    services: "Hire experienced contractors",
    text: "",
  },
  {
    logo: "https://img.indiafilings.com/learn/wp-content/uploads/2017/06/12010447/GST-Rate-for-Building-Materials.jpg",
    services: "Construction Material",
    text: "Flat 15% off on first order ",
  },
  {
    logo: "https://st4.depositphotos.com/1643295/23680/i/1600/depositphotos_236803618-stock-photo-indian-architect-man-working-blueprints.jpg",
    services: "Hire Architect",
  },
];
const sliderData = [
  
  {
    logo: "https://thumbs.dreamstime.com/b/happy-customer-just-bought-car-dealership-73626845.jpg",
    text: "",
    services: "OUR HAPPY Customer",
  },
  {
    logo: "https://i.pinimg.com/736x/b8/f3/11/b8f311fc01d8fdebacac1133f337388c.jpg",
    text: "",
    services: "E-Yug Team",
  },
  
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018859209-d2b667.jpeg",
    text: "",
    services: "Home Painting",
  },
  
 
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018868112-a22d49.jpeg",
    text: "",
    services: "Bathroom Cleaning",
  },
];

const cleaning = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
    services: "Bathroom And Kitchen Cleaning",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg",
    services: "Full Home Cleaning",
    text: "",
  },
  {
    logo: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/02/21/Pictures/house-maids_944b0fea-d875-11e5-b369-6a1e536aef0c.JPG",
    services: "Maid Hiring",
    text: "",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkwfQyKak_bIRVSm4BQBkjXn9YdmvDQbouzg&usqp=CAU",
    services: "Cockroach, Ant & General Pest Control",
    text: "",
  },
  {
    logo: "https://knot9prod.s3.amazonaws.com/thumbnails/712020/hover_712020057.jpg",
    services: "Gardener Service",
    text: "",
  },
  {
    logo: "https://www.mrright.in/ideas/wp-content/uploads/2016/11/Pest-control.jpg",
    services: "Termite Control",
    text: "",
  },
  {
    logo: "data:image/jpeg;base64,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",
    services: "Sofa & Carpet Cleaning",
    text: "",
  },
  {
    logo: "https://media.istockphoto.com/id/1248942280/photo/beautiful-female-is-loading-dirty-plates-into-a-dishwasher-machine-in-a-bright-sunny-kitchen.jpg?s=612x612&w=0&k=20&c=hEdE76E5NgcElbBX6nx5QrjsP2kL-NT5sjSZrgdBtcE=",
    services: "Dishwash Cleaning Service",
    text: "",
  },
];

const homerepairs = [
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg",
    services: "Furniture Making, Upholstery & Polish",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
    services: "Carpenters",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg",
    services: "Electricians",
    text: "",
  },
  {
    logo: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
    services: "Plumber",
    text: "",
  },
];

const HomePageService = ({ scrollNav }) => {
  return (
    <Box>
      {/* HOME SERVICES CARDS */}
      <Heading
        fontSize="32px"
        fontWeight="700"
        lineHeight="48px"
        m="4% 0 10% 0"
      >
        Home Services
      </Heading>
      <ServicesCategory data={cardData} />
      <Divider className={styles.dividers} />
      {scrollNav>1000 ? <HomePageNav/> :""}
      {/* CAROUSAL */}
      <HomePageCarousel data={sliderData} hideArrow={false} />
      <Divider className={styles.dividers} />

      {/* NEW CATEGORIES CARDS */}
      <Heading className={styles.headings}>Construction worker and contractors</Heading>
      <a   href = "/construction">

      <HomePageCarousel data={newCategoryLaunches} hideArrow={true} />
      </a>
      <Divider className={styles.dividers} />

      
      

      {/* CLEANING PEST CONTROL SLIDER */}
      <Heading className={styles.headings}>Cleaning & Pest Control</Heading>
      <HomePageCarousel data={cleaning} hideArrow={false} />
      <Divider className={styles.dividers} />

      

      {/* HOME REPAIRS */}
      <Heading className={styles.headings}>Home Repairs and building</Heading>
      <HomePageCarousel data={homerepairs} hideArrow={true} />
      <Divider className={styles.dividers} />
    </Box>
  );
};

export default HomePageService;
