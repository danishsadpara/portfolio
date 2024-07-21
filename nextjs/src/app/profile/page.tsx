import React from "react";
import Avatar from "@/components/Avatar";
import user from "@/entities/profile/data.json";

const Profile = () => {
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
          <button className="bg-slate-500 rounded-full text-white px-2 py-1 animate-bounce">
            <p className="text-xs">Download</p>
          </button>
        </div>
      </div>
      <div className="mx-5 md:mx-24 my-5 p-5 shadow-2xl rounded-2xl w-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 md:items-center">
          <div>
            <Avatar
              source={user.avatar}
              altText="self avatar"
              width={90}
              height={90}
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm">
                <b>Nationality:</b> {user.nationality} | <b>Gender:</b>{" "}
                {user.gender} | <b>Email:</b> {user.email} | <b>Phone:</b>{" "}
                {user.phone}
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
          {user.education.map((edu, index) => (
            <div key={index} className="mt-4">
              <p className="font-bold">{edu.degree}</p>
              <p className="text-sm">
                {edu.institution}, {edu.location}
              </p>
              <p className="text-xs text-gray-600">{edu.dates}</p>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            WORK EXPERIENCE
          </h2>
          {user.workExperience.map((work, index) => (
            <div key={index} className="mt-4">
              <p className="font-bold">{work.position}</p>
              <p className="text-sm">
                {work.company}, {work.location}
              </p>
              <p className="text-xs text-gray-600">{work.dates}</p>
            </div>
          ))}
        </div>

        {/* Language Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            LANGUAGE SKILLS
          </h2>
          {user.languageSkills.map((lang, index) => (
            <div key={index} className="space-y-1 mt-4">
              <p className="font-bold">{lang.language}</p>
              {lang.skills.length > 0 && (
                <div className="space-x-1 text-sm">
                  <p>
                    Understanding: {lang.proficiency} | Speaking:{" "}
                    {lang.proficiency} | Writing: {lang.proficiency}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Digital Skills Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            DIGITAL SKILLS
          </h2>
          <div className="mt-4">
            <p className="text-sm">{user.digitalSkills.join(" | ")}</p>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold border-b pb-1">
            ADDITIONAL INFORMATION
          </h2>
          <div className="mt-4">
            <p className="font-bold">Publications</p>
            {user.additionalInformation.publications.map((pub, index) => (
              <p key={index} className="text-sm">
                {pub}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
