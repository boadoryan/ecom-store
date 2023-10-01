import React from "react";

const CustomerInfoOverview = ({
  firstName,
  lastName,
  address,
  city,
  region,
  country,
  postalCode,
  phoneNumber,
  email,
}) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-xl mb-4">Shipping Information:</h3>
      <div className="border border-black rounded p-4">
        <div className="flex flex-col gap-y-4">
          {/* Full Name */}
          <div>
            <p className="font-bold ">Full Name:</p>
            <p>
              {firstName} {lastName}
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="font-bold ">Address:</p>
            <p>{address}</p>
            <p>
              {city}, {region}, {country}
            </p>
            <p>{postalCode}</p>
          </div>

          {/* Phone Number */}
          <div>
            <p className="font-bold ">Phone Number:</p>
            <p>{phoneNumber}</p>
          </div>

          {/* Email */}
          <div>
            <p className="font-bold ">Email:</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoOverview;
