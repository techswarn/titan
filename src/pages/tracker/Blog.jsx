import BlogCard from "./BlogCard";

// const datas = [
//   {
//     id: "180aa4db-5d7f-4ea2-acbf-9236eca8237e",
//     userid: "6aed1328-08da-46d7-ad8c-17cfa99c808b",
//     subject: "How to clear npm cache",
//     paragraph: "To clear npm cache, please execute 'npm cache clear --force'",
//     created_at: "2023-11-17T23:11:16.734+05:30",
//     updated_at: "2023-11-17T23:11:16.734+05:30",
//   },
//   {
//     id: "5e944a4a-a562-4e67-a20d-f820987b424b",
//     userid: "6aed1328-08da-46d7-ad8c-17cfa99c808b",
//     subject: "Test1",
//     paragraph: "The command is php artisan serve1",
//     created_at: "2023-11-19T12:55:32.886+05:30",
//     updated_at: "2023-11-19T12:55:32.886+05:30",
//   },
//   {
//     id: "a57d09da-e941-47e1-87bc-979e1903faaf",
//     userid: "6aed1328-08da-46d7-ad8c-17cfa99c808b",
//     subject: "Laravel run command",
//     paragraph: "The command is php artisan serve",
//     created_at: "2023-11-18T18:20:09.206+05:30",
//     updated_at: "2023-11-18T18:20:09.206+05:30",
//   },
// ];

const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

// function Blog(blogs) {
//   const data = blogs.blogs;
//   const listItems = data?.map((blog) => (
//     <li key={blog.id}>
//       <h2>{blog.subject}</h2>
//       <p>{blog.paragraph}</p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

function Blog(blogs) {
  const data = blogs.blogs;
  return data?.map((blog) => (
    <ul key={blog.id}>
      <BlogCard subject={blog.subject} para={blog.paragraph} />
    </ul>
  ));
}

export default Blog;
