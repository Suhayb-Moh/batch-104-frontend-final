/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import CategorySection from "../Components/CategoriesSection";
import Logos from "../Components/Logos";
import { Link } from "react-router-dom";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Toyota Harrier",
    href: "/caroverview",
    price: "$39",
    description: "3 sizes available",
    imageSrc:
      "https://previews.dropbox.com/p/thumb/ABpRcIHrOivWwSiHuUZj89CQaXclrTsNPRlZro1Np0OCQDm3bCAjWJAauTXGs7lSALroWuKTBboSfgjSNyxET1NoNeolVWRCJzFfEtmXXrB_-YA64oEbM8XAGAGbnqtwL59VMIhkj7V2x0z8Ny18LloqvzIG80uNFzV_B7kGcNwFEMqR6gTu60sUhoY6Q4D6cFgntlLX3wYS8BlGiocWwCthogkYxNIiUS7EIClf87LkpxCPdS0d1DQQrePZVHoNbARiBhZmURf4PY48C2ijJwLKVyouU6pn5dH0LJ5RcMJ8LQ1Jvb8b_zDyawhco_JICdfihZBEQhjLMpB_WsKFz_Qz1qj95yry-eOZ5C6Q0Lj_EFSLeif8gAi_ElzXq2KK3JA/p.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Focus Card Holder",
    href: "#",
    price: "$64",
    description: "Walnut",
    imageSrc:
      "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295548318_3245613775724353_2521752149924722232_n.jpg?stp=cp1_dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1Xjh_xcwoAUAX8zymOi&_nc_ht=scontent.fhga1-1.fna&oh=00_AT_BfNMr_reUSXf5yLCrN-ED17nyfhhk4MUCaIMCrh8Iuw&oe=62FE2155",
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://scontent.fhga2-1.fna.fbcdn.net/v/t39.30808-6/287825779_3217506105201787_5186040851603330884_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y2zLzvigXckAX85utY0&_nc_ht=scontent.fhga2-1.fna&oh=00_AT9ubz8WuxYlcVCYe_a3HSHqalC9PpRlraoFGRSm1ZLJLQ&oe=62FECA82",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://scontent.fhga2-1.fna.fbcdn.net/v/t39.30808-6/295663111_3242463142706083_2771092332327238390_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=prtOAWf-aSUAX-7UAW2&_nc_oc=AQkq8-1KY3zHnrDSYwOKp1y-NlBYQ_GNGJxGTOq_s96oFR0nYZEV6xgG8A2r1SpfCoo&_nc_ht=scontent.fhga2-1.fna&oh=00_AT-KYia0lk_awRv6ml7qNERIIA_ViE-CRA6ptkwIdpNAgg&oe=62FEA0CF",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 5,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://scontent.fhga2-1.fna.fbcdn.net/v/t39.30808-6/294177118_3239799719639092_4017029875841900168_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=q88_QA5ii9AAX_jtOWB&_nc_ht=scontent.fhga2-1.fna&oh=00_AT-FGl-XPZgUGTtiDHwxE6sdSmjrh1sHnB7LAZ6j3faa7A&oe=62FE6F80",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 6,
    name: "Focus Carry Case",
    href: "#",
    price: "$32",
    description: "Heather Gray",
    imageSrc:
      "https://scontent.fhga2-1.fna.fbcdn.net/v/t39.30808-6/289379735_3223116207974110_7392156006483924320_n.jpg?stp=cp1_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3x28xkvZAs4AX8GdapQ&_nc_ht=scontent.fhga2-1.fna&oh=00_AT_QNWIAsGbohQB9UtPz1ETBFyaBQ4sTq0HvqLn1WOUYRg&oe=62FE8263",
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];
/* This example requires Tailwind CSS v2.0+ */

export default function Home() {
  return (
    <div>
      <div className="relative bg-gray-50">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Choose Your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Dream Car
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/299351600_3259069344378796_1807598120226063361_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5YFyrCWsTgAAX-ImCH_&_nc_ht=scontent.fhga1-1.fna&oh=00_AT9D5mUMQ14W9Oxxn0CGHSKDuIZ0CM5U3n0sUR5_2-MLjg&oe=6305D5B1"
              alt=""
            />
          </div>
        </main>
      </div>

      <div className="bg-white  mt-1">
        {/* Products Section */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <Link to="/caroverview">
                  <a key={product.id} href={product.href} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {product.description}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CategorySection />
      <Logos />
    </div>
  );
}
