import { ObjectId } from "mongodb"; // Don't forget to import ObjectId

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("mongodbVSCodePlaygroundDB");
	const collection = db.collection("sales");

	switch (req.method) {
		case "GET":
			try {
				const data = await collection.find({}).toArray();
				console.log("Fetched data: ", data); // Log the data to check
				res.status(200).json({ success: true, data });
			} catch (error) {
				console.error(error);
				res
					.status(500)
					.json({ success: false, error: "Internal Server Error" });
			}
			break;

		case "POST":
			try {
				const { name, email } = req.body;
				if (!name || !email) {
					return res.status(400).json({
						success: false,
						message: "Name and email are required",
					});
				}
				const user = await collection.insertOne({ name, email });
				res.status(201).json({ success: true, data: user.ops[0] });
			} catch (error) {
				console.error(error);
				res
					.status(500)
					.json({ success: false, error: "Internal Server Error" });
			}
			break;

		case "PUT":
			try {
				const { id, ...updateData } = req.body;
				if (!ObjectId.isValid(id)) {
					return res
						.status(400)
						.json({ success: false, message: "Invalid ID" });
				}
				const user = await collection.updateOne(
					{ _id: new ObjectId(id) },
					{ $set: updateData }
				);
				res.status(200).json({ success: true, data: user });
			} catch (error) {
				console.error(error);
				res
					.status(500)
					.json({ success: false, error: "Internal Server Error" });
			}
			break;

		case "DELETE":
			try {
				const { id } = req.body;
				if (!ObjectId.isValid(id)) {
					return res
						.status(400)
						.json({ success: false, message: "Invalid ID" });
				}
				const user = await collection.deleteOne({ _id: new ObjectId(id) });
				res.status(200).json({ success: true, data: user });
			} catch (error) {
				console.error(error);
				res
					.status(500)
					.json({ success: false, error: "Internal Server Error" });
			}
			break;

		default:
			res.status(405).json({ success: false, message: "Method not allowed" });
			break;
	}
}
