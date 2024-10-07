import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${slug}.md`);
        if (!response.ok) {
          throw new Error("Errore nel caricamento del post");
        }
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Errore nel fetch:", error);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div className="min-h-screen bg-primary-900">
      <NavigationBar />
      <div className="prose-lg prose prose-invert mx-auto bg-primary-900">
        <ReactMarkdown className="pt-24">{content}</ReactMarkdown>
      </div>
      <div className="h-24"></div>
      <Footer />
    </div>
  );
};

export default Post;
