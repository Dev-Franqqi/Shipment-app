export default async function getShipment(id) {
  try {
    const response = await fetch(
      `https://dev-franqqi-shipment-api.onrender.com/admin/shipments/${id}`
    );
    return response.json();
  } catch (error) {
    return
    
  }
}
