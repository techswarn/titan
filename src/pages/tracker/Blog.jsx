import BlogCard from "./BlogCard";

function Blog(blogs) {
  const data = blogs.blogs;
  return data?.map((blog) => (
    <ul key={blog.id}>
      <BlogCard subject={blog.subject} para={blog.paragraph} />
    </ul>
  ));
}

export default Blog;
