// /lib/mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // MongoDB Atlas connection string
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
	// Use a global variable to preserve the client in dev mode
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}

	clientPromise = global._mongoClientPromise;
} else {
	// Use a new client in production
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
