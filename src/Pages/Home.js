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

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Toyota Harrier",
    href: "#",
    price: "$39",
    description: "3 sizes available",
    imageSrc:
      "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295556190_3245614699057594_3135515241765743762_n.jpg?stp=cp1_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SdNw4F5OCIwAX_Gh6tH&_nc_ht=scontent.fhga1-1.fna&oh=00_AT_v_ThuFtZGNPsijZBEy_gNe_7vTwrSg526cGPFdA60aw&oe=62FE2920",
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

export default function Home() {
  return (
    <div className="bg-white  mt-7">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Verna-300320201643.jpg&w=872&h=578&q=75&c=1"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Order Your Car</span>
                    <span className="block text-indigo-200">Now!!!</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Products Section */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
