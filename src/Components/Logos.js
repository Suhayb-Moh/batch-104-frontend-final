/* This example requires Tailwind CSS v2.0+ */
import nissan from "../images/nissan.svg";
import toyota from "../images/toyota.svg";
import hyundai from "../images/hyundai.svg";
export default function Logos() {
  return (
    <div className="bg-indigo-700 mb-8">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          The world's most innovative companies use Workflow
        </h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-12" src={nissan} alt="Tuple" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-12" src={toyota} alt="Mirage" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-12" src={hyundai} alt="StaticKit" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                alt="Transistor"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
