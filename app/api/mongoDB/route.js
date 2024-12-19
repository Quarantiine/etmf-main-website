import clientPromise from "@/lib/mongodb";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("mongodbVSCodePlaygroundDB"); // Replace with your DB name

		// Fetch collections
		const collections = await db.listCollections().toArray(); // Make sure to call .toArray() to get an array of collections

		// Fetch documents from the "sales" collection
		const salesCollection = db.collection("sales");
		const salesData = await salesCollection.find().toArray(); // Fetch all documents in the "sales" collection

		return new Response(
			JSON.stringify({
				message: "Successfully connected to MongoDB!",
				collections, // Array of collections metadata
				salesData, // Actual documents from the "sales" collection
			}),

			{ status: 200, headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);

		return new Response(
			JSON.stringify({ error: "Failed to connect to MongoDB" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}

export async function POST(req) {
	try {
		const client = await clientPromise;
		const db = client.db("mongodbVSCodePlaygroundDB"); // Replace with your DB name

		// Get the data from the request body
		const newData = await req.json(); // Parse incoming JSON data

		// Ensure the required fields exist in the request body
		if (!newData.item || !newData.price) {
			return new Response(
				JSON.stringify({ error: "Item and price are required." }),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			);
		}

		// Insert new document into the "sales" collection
		const salesCollection = db.collection("sales");
		const result = await salesCollection.insertOne(newData);

		return new Response(
			JSON.stringify({
				message: "Successfully inserted data into MongoDB",
				insertedId: result.insertedId,
			}),
			{ status: 201, headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		console.error("Error inserting data into MongoDB:", error);

		return new Response(
			JSON.stringify({ error: "Failed to insert data into MongoDB" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
