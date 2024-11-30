import React from "react";
import HomeSlider from "../components/HomeSlider";
import { useEffect, useState } from "react";

export default function Home() {
  let [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);

  return (
    <>
      <div className="mt-5">
        <HomeSlider
          img1="/books-img1.jpg"
          label1="Book Store"
          description1="We are the Best Book Selling Store"
          img2="books-img2.jpg"
          label2="Name of Trust"
          description2="We are selling the books, which are trusted, world wide"
          img3="books-img3.jpg"
          label3="Leading Book Store"
          description3="We are NUMBER 1 Book Store in UK"
        />
        <h1 className="bg-dark text-white">
          Welcome to Our Book Store, Mr/Mrs. {userName=="undefined"? "Annonymous" : userName}
        </h1>
        <p className="bg-dark text-white">
          At our UK-based bookstore, we strive to create an immersive experience
          for book lovers, combining the charm of a traditional bookshop with
          modern conveniences. Our carefully curated inventory spans genres from
          timeless literary classics and contemporary bestsellers to
          lesser-known indie titles, allowing readers to discover something new
          every time they visit. We take pride in sourcing books from around the
          world, ensuring a diverse collection that celebrates global literature
          and unique voices. Alongside fiction, we offer a robust selection of
          non-fiction books, including history, science, self-development, art,
          and more, catering to readers with diverse interests. Our store is
          thoughtfully designed to be more than just a place to buy books—it’s a
          space for exploration, creativity, and community. With cozy reading
          nooks, soft lighting, and a relaxing ambiance, visitors are encouraged
          to spend time browsing, reading, or attending one of our frequent
          literary events. We regularly host author signings, book clubs,
          writing workshops, and children's story hours, making us a cultural
          hub in the local community. Beyond our expansive book selection, we
          also stock a wide variety of complementary products, such as
          beautifully crafted stationery, journals, book-themed gifts, and
          high-quality bookmarks. Our store embraces both physical and digital
          formats, offering an extensive collection of e-books for those who
          prefer reading on the go. Our online platform allows customers to
          easily browse and purchase books from the comfort of their homes, with
          convenient delivery options across the UK. Customer service is at the
          heart of our mission. Our passionate and well-read staff is always
          ready to help customers find the perfect book, whether for themselves
          or as a thoughtful gift. We also offer personalized book
          recommendation services, subscription boxes, and special orders for
          hard-to-find titles. Our bookstore is more than just a retail
          space—it’s a vibrant community for book lovers, where people come
          together to celebrate stories, knowledge, and the joy of reading.
        </p>
      </div>
    </>
  );
}
