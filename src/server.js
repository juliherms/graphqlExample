import app from './app';

//startup server
app.listen({ port: 4000 }).then(() => {
    console.log("Server is running on http://localhost:4000");
  });