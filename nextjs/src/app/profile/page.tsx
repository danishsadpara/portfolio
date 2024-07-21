import React from "react";
import Avatar from "@/components/Avatar";

const Profile = () => {
  const user = {
    avatar: "/self.jpg",
    name: "Muhammad Murtaza Danish",
    nationality: "Pakistani",
    gender: "Male",
    email: "danishsadpara@gmail.com",
    phone: "+92 312 0078619",
    address: "House no. 547, street no. 54, sector i-10/1 Islamabad",
  };

  return (
    <div className="">
      <div className="flex justify-between m-2 items-center">
        <Avatar
          source="/europass.png"
          altText="europass logo"
          width={90}
          height={40}
        />
        <div className="">
          <button
            // onClick={downloadPDF}
            className="bg-slate-500 rounded-full text-white px-2 py-1 animate-bounce"
          >
            <p className="text-xs "> Download</p>
          </button>
        </div>
      </div>
      <div className="mx-5 md:mx-24  my-5 p-5 shadow-2xl   rounded-2xl w-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:items-center ">
          <div>
            <Avatar
              source="/self.jpg"
              altText="self avatar"
              width={90}
              height={90}
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold ">{user.name}</h1>
              <p className="text-sm">
                <b>Nationality:</b> {user.nationality} | <b>Gender: </b>{" "}
                {user.gender} | <b>Email: </b>
                {user.email} | <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Address:</b> {user.address}
              </p>
            </div>
          </div>
        </div>

        {/* Education and Training Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">EDUCATION</h2>
          <div className="mt-4">
            <p className="font-bold">
              Bachelor of Computer Science (Software Engineering)
            </p>
            <p className="text-sm">
              Federal Urdu University of Arts Science and Technology (FUUAST),
              Islamabad (Pakistan)
            </p>
            <p className="text-xs text-gray-600">1/10/2018 - 1/08/2022</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            WORK EXPERIENCE
          </h2>
          <div className="mt-4">
            <p className="font-bold">Software Engineer</p>
            <p className="text-sm">
              PIXAKO TECHNOLOGIES PVT, Islamabad (Pakistan)
            </p>
            <p className="text-xs text-gray-600">
              01/02/2016 - <span className="text-blue-500">present</span>
            </p>
          </div>
        </div>

        {/* Language Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            LANGUAGE SKILLS
          </h2>
          <div className="space-y-1 mt-4">
            <p className="font-bold ">English</p>
            <div className=" space-x-1 text-sm">
              <p>Understanding: B1 | Speaking: B1 | Writing: B1 </p>
            </div>
            <p className="font-bold ">Urdu</p>
            <p className="">
              <span className="font-bold"> Shina</span> (Mother tongue)
            </p>
          </div>
        </div>

        {/* Digital Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            DIGITAL SKILLS
          </h2>
          <div className="mt-4">
            <p className="text-sm">
              Javascript | Nextjs | mongodb | graphQL | Typescript
            </p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            ADDITIONAL INFORMATION
          </h2>
          <div className="mt-4">
            <p className="font-bold">Publications</p>
            <p className="text-sm">
              Innovative Channels Pvt. Karachi (Pakistan) - 2019
            </p>
            <p className="text-sm">
              Diamantini, C., Khan, T., Potena, D. and Storti, E., 2022
            </p>
            <p className="text-sm">
              Keyword Extraction Using Graph-Based Approaches - 2017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
