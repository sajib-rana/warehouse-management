import React from 'react';

const Blogs = () => {
    return (
      <div>
        <h1>Difference between javascript and nodejs</h1>
        <p>
          JavaScript is a simple programming language that runs in any browser
          JavaScript Engine. Whereas Node JS is an interpreter or running
          environment for a JavaScript programming language that holds many
          excesses, it requires libraries that can easily be accessed from
          JavaScript programming for better use.
        </p>
        <h1> Differences between sql and nosql databases</h1>
        <p>
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores. SQL databases are better for
          multi-row transactions, while NoSQL is better for unstructured data
          like documents or JSON.
        </p>
        <h1>What is the purpose of jwt and how does it work</h1>
        <p>
          A JWT is a mechanism to verify the owner of some JSON data. It's an
          encoded, URL-safe string that can contain an unlimited amount of data
          (unlike a cookie) and is cryptographically signed. When a server
          receives a JWT, it can guarantee the data it contains can be trusted
          because it's signed by the source. JWT, or JSON Web Token, is an open
          standard used to share security information between two parties — a
          client and a server. Each JWT contains encoded JSON objects, including
          a set of claims. JWTs are signed using a cryptographic algorithm to
          ensure that the claims cannot be altered after the token is issued.
        </p>
      </div>
    );
};

export default Blogs;