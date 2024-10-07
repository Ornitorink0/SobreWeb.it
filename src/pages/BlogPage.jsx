// src/pages/BlogPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MetaTags from "../Meta.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/Footer.jsx";

import { Book } from "@mui/icons-material";

const BlogPage = () => {
  // Lista dei post (potrebbe essere dinamica in futuro)
  const posts = [
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
    {
      title: "Il Nostro nuovo Blog",
      description:
        "Siamo felici di darvi il benvenuto nel nostro blog, uno spazio dedicato a esplorare temi appassionanti, condividere esperienze e discutere delle ultime novità nel mondo della tecnologia, della musica, della fotografia e molto altro. Qui troverete articoli che spaziano da approfondimenti su progetti informatici, consigli per la programmazione, recensioni musicali e suggerimenti per migliorare le vostre abilità fotografiche.",
      slug: "il-nostro-nuovo-blog",
      imageUrl: "/posts/images/first-post-image.jpg",
      author: "Matteo Gurrieri",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-900">
      <MetaTags
        title="Blog | SobreWeb"
        description="Blog di SobreWeb"
        name="Blog | SobreWeb"
        locale="it_IT"
        robots="index,follow"
        organization="SobreWeb"
      />
      <NavigationBar />
      <div className="container mx-auto bg-primary-900 p-4 pt-24">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="z-10 my-10 text-center text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          I Nostri <span className="text-rose-500">Post</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="m-6 rounded-lg border border-gray-700 bg-primary-800 shadow"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-300">
                  {post.title}
                </h2>
                <p className="mb-3 font-normal text-gray-400">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
                <p className="mt-2 text-sm text-gray-400">Di {post.author}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="container mx-auto mb-10 flex w-fit items-center justify-center rounded-lg border border-gray-700 bg-primary-800 px-8 py-4 text-center text-slate-300"
        >
          <Book />
          <p className="ms-2 text-sm">
            Tutti i post sono scritti dagli studenti stessi, che sono
            disponibili per la collaborazione e pubblicazione di articoli in
            qualsiasi momento, purchè siano inerenti alle attività di SobreWeb.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
