import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function ServiceDetail() {
  const { slug } = useParams();

  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-5xl font-bold">
          Service Detail Page
        </h1>

        <p className="mt-4 text-xl">
          {slug}
        </p>
      </div>
    </>
  );
}

export default ServiceDetail;