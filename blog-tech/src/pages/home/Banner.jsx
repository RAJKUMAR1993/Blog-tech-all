import BlogCard from "../../components/BlogCard";
import { sampleBlogPosts } from "../../data/sampleData";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleBlogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            {...post}
            isLarge={index === 0} // First post is larger
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
