import { Link } from "react-router-dom";

const BlogCard = ({
  image,
  category,
  title,
  author,
  date,
  isLarge = false,
}) => {
  return (
    <article
      className={`relative group overflow-hidden ${
        isLarge ? "col-span-2 row-span-2" : ""
      }`}
    >
      <Link to="#" className="block relative w-full">
        {/* Image with overlay */}
        <div className="relative w-full h-[280px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Category tag */}
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-black/80 rounded">
            {category}
          </span>

          {/* Title */}
          <h2 className={`font-bold mb-4 ${isLarge ? "text-3xl" : "text-xl"}`}>
            {title}
          </h2>

          {/* Author info */}
          <div className="flex items-center gap-3">
            <img
              src={author.image}
              alt={author.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <div className="flex gap-2 text-sm">
              <span className="font-medium">{author.name}</span>
              <span className="text-gray-300">{date}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
