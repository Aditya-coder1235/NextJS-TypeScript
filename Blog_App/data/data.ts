interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    author: string;
    authorImage:string
}


export const blogs:Blog[] = [
    {
        id: 1,
        title: "Getting Started with the MERN Stack",
        description:
            "Learn how to build full-stack applications using MongoDB, Express, React, and Node.js. This guide covers the fundamentals and project structure.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        date: "2026-05-01",
        category: "Web Development",
        author: "Aditya Sharma",
        authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        title: "Understanding TypeScript Generics",
        description:
            "Generics allow you to write reusable and flexible code in TypeScript. In this article we explore generics with simple examples.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
        date: "2026-04-28",
        category: "TypeScript",
        author: "Rohit Verma",
        authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: 3,
        title: "Next.js 16 New Features Explained",
        description:
            "Next.js 16 introduces improved routing, server components, and faster builds. Learn how these features improve performance.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        date: "2026-04-25",
        category: "Next.js",
        author: "Priya Desai",
        authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 4,
        title: "React Context API with TypeScript",
        description:
            "Managing global state becomes easier using the Context API. This tutorial shows how to use it with TypeScript safely.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        date: "2026-04-20",
        category: "React",
        author: "Karan Patel",
        authorImage: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
        id: 5,
        title: "Building REST APIs with Node.js and Express",
        description:
            "Learn how to design and build scalable REST APIs using Node.js and Express with best practices and folder structure.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
        date: "2026-04-18",
        category: "Backend",
        author: "Sneha Kulkarni",
        authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        id: 6,
        title: "Understanding React Hooks in Depth",
        description:
            "React hooks like useState, useEffect, and useRef help simplify functional components. Learn when and how to use them.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        date: "2026-04-15",
        category: "React",
        author: "Amit Joshi",
        authorImage: "https://randomuser.me/api/portraits/men/60.jpg",
    },
];

export default blogs;
