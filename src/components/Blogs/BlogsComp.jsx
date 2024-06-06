import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import justiceImg from "../../assets/blog/ig.jpg";

const BlogsData = [
  {
    id: 1,
    image: justiceImg,
    title: "Realtime analytics",
    description:
      "“Basketball still be played in High Schools and new teams were created in Army side and from some public institutions and Sportive associations has been created to promote basketball in all provinces in Rwanda, In 1974, Rwanda",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: justiceImg,
    title: "Realtime analytics",
    description:
      "“Basketball still be played in High Schools and new teams were created in Army side and from some public institutions and Sportive associations has been created to promote basketball in all provinces in Rwanda, In 1974, Rwanda ",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: justiceImg,
    title: "Realtime analytics",
    description:
      "“Basketball still be played in High Schools and new teams were created in Army side and from some public institutions and Sportive associations has been created to promote basketball in all provinces in Rwanda, In 1974, Rwanda ",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14" id="blogs">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
