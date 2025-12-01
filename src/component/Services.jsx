
import Button from "./Button";

function Services() {
  return (
    <div className=" ml-20">
      <h1 className="text-white text-6xl mt-30  font-semibold">My Services</h1>
      <p className="  mt-15 text-gray-300 text-sm">
        Explore my range of services designed to go beyond aesthetics. I craft{" "}
        <br /> visually appealing and fully functional website tailored to your{" "}
        <br /> business needs.{" "}
      </p>
      <Button name="Learn More" background="bg-white px-2 py-1 rounded-sm mt-6 font-medium" />
    </div>
  );
}

export default Services