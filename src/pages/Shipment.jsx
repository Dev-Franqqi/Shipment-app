import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Shipment(){
  const location = useLocation();
  const { shipment } = location.state || {};

  return (
    <div>
    
      {shipment ? (
        <div>
          <p>Shipment Data:</p>
          <pre>{JSON.stringify(shipment, null, 2)}</pre>
        </div>
      ) : (
        <div className="text-center py-10">
          <p >No shipment data available.</p>
          <p>
            return to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};
