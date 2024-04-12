import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              >
                <MdOutlineAttachMoney />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  TOTAL BALANCE
                </h2>
                <p className="text-gray-500 "> &#8377; 35000 </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              >
                <FaArrowDown />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  TOTAL DEPOSIT
                </h2>
                <p className="text-gray-500 "> &#8377; 35000 </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              >
                <FaArrowUp />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  TOTAL WITHDRAWAL
                </h2>
                <p className="text-gray-500 "> &#8377; 35000 </p>
              </div>
            </div>
          </div>
          
          
          
          
          
          
        </div>
      </div>
    </section>
  );
};

export default page;
