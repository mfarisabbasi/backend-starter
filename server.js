// Packages Import Start
import { express, dotenv, cors, bodyParser } from "./packages.js";
// Packages Import End

// Config Import Start
import connectDB from "./configs/db.js";
// Config Import End

// Route Import Start
// import {

// } from "./routes/routes.js";
// Route Import End

// Basic Inits Start
dotenv.config();

connectDB();

const app = express();

// Basic Inits End

// Middleware usage start
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware usage end

// API routes start
app.get("/api/dev/v1", (req, res) => {
  res.send("API is running in development mode");
});

// API routes end

// Server start
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
);
// Server end
