import { Brush, Laptop2, Laptop2Icon, Server, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Front-End Dev",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magni amet quae earum rem maiores illum fugit ipsa repudiandae, temporibus est in ut commodi soluta? Earum quia eius fugit officia.",
    icon: <Laptop2 />,
  },

  {
    id: 2,
    title: "Back-End Dev",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,magni amet quae earum rem maiores illum fugit ipsa repudiandae, temporibus est in ut commodi soluta? Earum quia eius fugit officia.",
    icon: <Server />,
  },

  {
    id: 3,
    title: "UI/UX",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magni amet quae earum rem maiores illum fugit ipsa repudiandae, temporibus est in ut commodi soluta? Earum quia eius fugit officia.",
    icon: <Brush />,
  },

  {
    id: 4,
    title: "Prof",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, magni amet quae earum rem maiores illum fugit ipsa repudiandae, temporibus est in ut commodi soluta? Earum quia eius fugit officia.",
    icon: <Zap />,
  },
];

import Button from "../component/Button";

function Service() {
  return (
    <section className="flex">
      <div>
        <h2>My Services</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, in.
          Eveniet incidunt amet reprehenderit inventore!
        </p>
        <Button name="learn more" style="bg-white text-black p-2" />
      </div>
      <div className="text-white">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.icon}</span>
              <span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
