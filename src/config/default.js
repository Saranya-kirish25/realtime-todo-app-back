

module.exports = {
  port: 8080,
  host: "0.0.0.0",
  corsOrigin: "https://realtime-todo-app-front.vercel.app/projects", // உங்கள் frontend live URL
  jwtSecret: "kanban_backend_project_@Saranya123!_secure_token", // 🔐 இங்க உங்கள் secret key
  mongoURI:"mongodb+srv://saranyakirishnamoorthy:Saranya123@cluster0.s16unli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // 🌐 MongoDB URI
  saltRounds: 10
};

