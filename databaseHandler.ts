import { openDB } from "idb";
import { ITrip } from "./src/models/TripEntites";

const DATABASE_NAME = "TripDB";

export async function insertTrip(TripInfo: ITrip) {
  const db = await openDB(DATABASE_NAME, 1);
  const id = await db.add("trips", TripInfo);
  return id;
}

export async function getAllTrip() {
  const db = await openDB(DATABASE_NAME, 1);
  const result = await db.getAll("trips");
  return result;
}
export async function getTripById(id: number) {
  const db = await openDB(DATABASE_NAME, 1);
  return await db.get("trips", id);
}
export async function deleteTrip(id: number) {
  const db = await openDB(DATABASE_NAME, 1);
  await db.delete("trips", id);
  return;
}
export async function updateTrip(TripInfo: ITrip) {
  const db = await openDB(DATABASE_NAME, 1);
  const oldTrip = (await db.get("trips", TripInfo.id)) as ITrip;
  oldTrip.NameOfTrip = TripInfo.NameOfTrip;
  oldTrip.Destination = TripInfo.Destination;
  oldTrip.StartDate = TripInfo.StartDate;
  oldTrip.EndDate = TripInfo.EndDate;
  oldTrip.RiskAssessment = TripInfo.RiskAssessment;
  oldTrip.Transport = TripInfo.Transport;
  oldTrip.Description = TripInfo.Description;
  oldTrip.Budget = TripInfo.Budget;
  await db.put("trips", oldTrip);
  return;
}
initDB().then(() => {
  console.log("database created!");
});

async function initDB() {
  const db = await openDB(DATABASE_NAME, 1, {
    upgrade(db) {
      const store = db.createObjectStore("trips", {
        keyPath: "id",
        autoIncrement: true,
      });
    },
  });
}
