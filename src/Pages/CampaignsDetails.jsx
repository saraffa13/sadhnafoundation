import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCampaignDetails } from "../store/reducers/campaigns";
import { useDispatch, useSelector } from "react-redux";

const CampaignsDetails = () => {
  const { campaignId } = useParams();
  const dispatch = useDispatch();

  const { campaignDetails, loading, error } = useSelector(
    (state) => state.campaigns
  );

  useEffect(() => {
    if (campaignId) {
      dispatch(fetchCampaignDetails(Number(campaignId)));
    }
  }, [dispatch, campaignId]);

  if (loading) {
    return <p className="text-center text-indigo-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  if (!campaignDetails) {
    return <p className="text-center text-gray-600">Campaign not found.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {campaignDetails.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${campaignDetails.title} - Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="p-6">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">
              {campaignDetails.title}
            </h1>
            <p className="text-gray-700 text-lg whitespace-pre-line">
              {campaignDetails.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsDetails;