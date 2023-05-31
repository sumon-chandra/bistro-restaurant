const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log(req.headers);
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "Unauthorized access." });
  }
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.USER_SECRET_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "Unauthorized access 2." });
    }
    req.decoded = decoded;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Bistro boss restaurant is running.");
});

const uri = `mongodb+srv://${process.env.BISTRO_DB_USER}:${process.env.BISTRO_DB_PASS}@cluster0.lh1oos6.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("bistroDB").collection("users");
    const menuCollection = client.db("bistroDB").collection("menu");
    const reviewsCollection = client.db("bistroDB").collection("reviews");
    const cartCollection = client.db("bistroDB").collection("carts");

    // JWT Authorization
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.USER_SECRET_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email };
      const user = await usersCollection.findOne(query);
      if (user?.rule !== "admin") {
        return res.status(401).send({ message: "Unauthorized access" });
      }
      next();
    };

    // Users collection
    app.get("/users", verifyJWT, async (req, res) => {
      const users = await usersCollection.find().toArray();
      res.send(users);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.status(409).send({ message: "User already exists" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.patch("/users/admin/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email };
      const updateDoc = {
        $set: {
          rule: "admin",
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) return res.send({ admin: false });
      const filter = { email };
      const user = await usersCollection.findOne(filter);
      const result = { admin: user?.rule === "admin" };
      res.send(result);
    });

    // Get all menu
    app.get("/menu", async (req, res) => {
      const menu = await menuCollection.find().toArray();
      res.send(menu);
    });
    app.post("/menu", verifyJWT, verifyAdmin, async (req, res) => {
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result);
    });

    // Get all reviews
    app.get("/reviews", async (req, res) => {
      const reviews = await reviewsCollection.find().toArray();
      res.send(reviews);
    });

    // Get a list of all the cart items
    app.get("/carts", verifyJWT, async (req, res) => {
      const email = req.query.email;
      if (!email) return res.send([]);
      if (req.decoded.email !== email)
        return res
          .status(401)
          .send({ error: true, message: "Forbidden access token" });
      const query = { email: email };
      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    // Sent item in carts
    app.post("/carts", async (req, res) => {
      const item = req.body;
      const result = await cartCollection.insertOne(item);
      res.send(result);
    });

    // Delete item from cart
    app.delete("/carts/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
