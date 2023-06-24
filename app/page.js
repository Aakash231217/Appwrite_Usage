"use client"
import Navbar from './components/navbar';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import {Client, Databases, ID} from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648a8d4b80049a240841');

export default function Home() {
const [blogPosts, setblogPosts]=useState([])
useEffect(()=>{
  document.title="Indian Recipes"
  const databases= new Databases(client);
  let promise= databases.listDocuments(
    "648a92bf122f414549d1",
    "648a93cea3dcf4cf71d0",
  );
  promise.then(function(response){
    console.log(response)
    setblogPosts(response.documents)
  },function(error){
    console.log(error)
  });
},[])

return (
  <>
     <Navbar/>
     <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post)=>(
          <div key={post.id} className="bg-white rounded-lg shadow-md">
            <img className="w-full h-48 object-cover rounded-lg shadow-md" src={post.image}alt={post.title}/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
               <p className="text-gray-700">{post.metadesc}</p>
               <Link href={`/blog/${post.slug}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover::bg-blue-600">
                Read More
               </Link>
              </div>
            </div>
        ))}
      </div>
     </div>
  </>
)
}